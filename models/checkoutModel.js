const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
    },

    phoneNumber:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);