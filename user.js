const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
    userId :{
        type:Number
    },
    id :{
        type:Number
    },
    title :{
        type:String
    },
    body :{
        type:String
    }

})

module.exports = mongoose.model('User',UserSchema)