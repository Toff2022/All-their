const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const auth = require("../middleware/auth.middleware")
const chalk = require("chalk")

router.patch("/:userId", async (req, res) => {
    try {
        const { userId } = req.params
        // todo: userId === current userId
        if (userId) {
            const updateUser = await User.findByIdAndUpdate(userId, req.body, { new: true })
            res.send(updateUser)
        } else {
            res.status(401).json({ message: "Unautorized!" })
        }

    } catch (e) {
        res.status(500).json({
            messge: "На сервере userId произошла ошибка. Попробуйте позже!"
        })
    }
})

router.get("/", async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).send(user)

    } catch (e) {
        res.status(500).json({
            messge: "На сервере user произошла ошибка. Попробуйте позже!"
        })
    }

})

module.exports = router