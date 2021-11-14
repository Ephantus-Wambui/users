const User = require('../model/users.js')
const path = require('path')

module.exports = (req, res) => {
    User.replaceOne(req.body, (error, user) => {
        res.redirect('/')
    })
}
