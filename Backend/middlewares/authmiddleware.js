const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config.js');


async function authMiddleware(req,res,next){
    const header = req.headers.Authorization;
    
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token  = header.split(' ')[1]
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.userId = decoded.userId;

        next();
    }catch(err){
        return res.status(403).json({})
    }

}

Router.get('/bulk',async (req,res)=>{
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

module.exports = {authMiddleware};