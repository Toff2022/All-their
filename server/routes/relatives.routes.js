const express = require("express")
const router = express.Router({ mergeParams: true })
const chalk = require("chalk")
const Relatives = require("../models/Relatives")

router.get("/", async (req, res) => {
    try {
        const relatives = await Relatives.find()
        res.send(relatives)
        console.log(chalk.grey("user", relatives));
    } catch (e) {
        res.status(500).json({
            messge: "На сервере произошла ошибка при запросе Relatives. Попробуйте позже!"
        })
    }
})

module.exports = router