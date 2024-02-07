const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    fullname: String,
    phoneNumber: String,
    address: String,
    city: String,
    state: String
});

module.exports = mongoose.model('User', userSchema);
