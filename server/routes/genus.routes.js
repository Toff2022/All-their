const express = require("express")
const Genus = require("../models/Genus")
const router = express.Router({ mergeParams: true })

router.get("/", async (req, res) => {
    try {
        const genus = await Genus.find()
        res.status(200).send(genus)
        // const list = await Profession.find()
        // res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла. Попробуйте позже!"
        })
    }
})


module.exports = router