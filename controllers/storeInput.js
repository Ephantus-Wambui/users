const Input = require('../model/input');
const path = require('path');

module.exports = (req, res) => {
    Input.create(req.body, (error, input) => {
        res.redirect('/')
    })
}
