const express = require("express")
const Profession = require("../models/Profession")
const router = express.Router({ mergeParams: true })

router.get("/", async (req, res) => {
    try {
        const profession = await Profession.find()
        res.status(200).send(profession)
        // const list = await Profession.find()
        // res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла. Попробуйте позже!"
        })
    }
})

module.exports = router