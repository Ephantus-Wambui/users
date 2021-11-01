const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    pwd: String,
    dateJoined: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
