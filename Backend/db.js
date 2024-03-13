const mongoose = require('mongoose');
const { Schema } = require('zod');
// mongoose.connect();

const User  = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
        minLength : 3,
        maxLength : 30,
        lowercase : true,
        unique : true
    }, 

    password : {
        type: String,
        required: true,
        minLength: 6
    },

    firstName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 30,
        trim : true
    },

    lastName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 30,
        trim : true
    }
})

const AccountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }   
})



const user = mongoose.model('User',User)
const Account = mongoose.model('Account',AccountSchema)

module.exports = {
    user,
    Account
}