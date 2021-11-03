const User = require('../model/users.js');
const Input = require('../model/input.js');

module.exports = async (req, res) => {
    const user = await User.find()
    const input = await Input.find()
    res.render('index', {
        user,
        input
    })
}
