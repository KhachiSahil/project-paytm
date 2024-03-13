const zod = require('zod');
const jwt = require('jsonwebtoken');
const express = require('express');
const route = express.Router();
const { user, Account } = require('../db.js');
const JWT_SECRET = require('../config');
const { authMiddleware } = require('../middlewares/authmiddleware.js');

const userSchema = zod.object({
    userName : zod.string().email().min(3).max(30),
    firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

route.post('/signup',async (req,res)=>{
    const {success} = userSchema.safeParse(req.body)

    if(!success){
        res.status(411).json({msg: 'Email already taken'})
    }
    
    const userExist = await user.findOne({userName: req.body.userName});
    if(userExist){
        res.status(411).json({msg: 'Email already taken'})
    }

    const userdb = await user.create({
        userName: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = userdb._id;
    const token = jwt.sign(userId,JWT_SECRET)

    await Account.create({
        userId : userId,
        balance : 1+Math.random()*1000
    })

    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

route.post('/signin',async (req,res)=>{

    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({message: "Incorrect inputs"})
    }

    const signUser = await user.findOne({
            userName:req.body.userName,
            password: req.body.password
        })
    if(!signUser){
            res.status(411).json({message: "Error while logging in"})
        }

    const reToken = jwt.sign({userId:user._id},JWT_SECRET);
    res.json({token: reToken})

})

const updateUser = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional() 
})

route.put('/', authMiddleware , async (req,res)=>{
        const {success} = updateUser.safeParse(req.body);

        if(!success){
            res.status(411).json({message: "Error while updating information"})
        }

        await user.updateOne({_id:req.userId},req.body)

        res.json({message:"updated successfully"})
})

route.get('/bulk',async (req,res)=>{
    const filter = req.query.filter || "";

    const sameUser = await user.find({
        $or : [{
            firstName : {
                "$regex" : filter
            }
        },{
            lastName : {
                "$regex" : filter
            }
        }
    ]
    })

    res.json({
        user : sameUser.map(user => ({
            userName : user,userName,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })

})


module.exports = route;