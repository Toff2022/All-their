const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const chalk = require("chalk")

router.get("/", async (req, res) => {
    try {
        const user = await User.find()
        res.send(user)
        // console.log(chalk.grey("user", user));
    } catch (e) {
        res.status(500).json({
            messge: "На сервере произошла ошибка при запросе User. Попробуйте позже!"
        })
    }
})

module.exports = router