const User = require("../model/users.js")

module.exports = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id)
    res.render("updateUser", {
        user
    })
}
