const express = require('express');
const { authMiddleware } = require('../middlewares/authmiddleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');


const app = express();
const accountRoute = express.Router();

accountRoute.get('/balance', authMiddleware ,async (req,res)=>{
        const user = await Account.findOne({
            userId : req.userId
        })

       res.status(200).json({balance:user.balance})
})

accountRoute.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const to = req.body.to;
        const amount = req.body.amount;

        const sender = await Account.findOne({ userId: req.userId }).session(session);
        if (!sender || sender.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        const receiver = await Account.findOne({ userId: to }).session(session);
        if (!receiver) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        return res.status(200).json({ message: "Transaction succeeded" });
    } catch (err) {
        await session.abortTransaction();
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    } finally {
        session.endSession();
    }
});

module.exports = {
    accountRoute
}