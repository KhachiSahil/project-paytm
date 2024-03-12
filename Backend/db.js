const mongoose = require('mongoose');
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

const user = mongoose.model('User',User)

module.exports = {
    user
}