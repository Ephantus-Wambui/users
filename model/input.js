const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InputSchema = new Schema({
    date: String,
    time: String,
    range: String,
})

const Input = mongoose.model('Input', InputSchema)

module.exports = Input;
