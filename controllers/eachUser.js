const User = require("../model/users.js")

module.exports = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.render("eachUser", {
        user
    })
}
