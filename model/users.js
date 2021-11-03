const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    name: String,
    country: String,
    contact: String,
    pwd: String,
    dateJoined: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
