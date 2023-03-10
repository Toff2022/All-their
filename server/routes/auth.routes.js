const express = require("express")
const bcrypt = require("bcryptjs")
const tokenService = require("../services/token.service")
const { generateUserData } = require("../utils/helpers")
const User = require("../models/User")
const router = express.Router({ mergeParams: true })
// 1. get data from req(email,password...)
// 2. check if users alredy exists
// 3. hash password
// 4. create user
// 5. generate tokens

router.post("/signUp", async (req, res) => {
    try {
        const { email, password } = req.body

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({
                error: {
                    message: "EMAIL_EXISTS",
                    code: 400
                }
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12) // 12- salt

        const newUser = await User.create({
            ...generateUserData(),
            ...req.body,
            password: hashedPassword
        })

        const tokens = tokenService.generate({ _id: newUser._id })
        await tokenService.save(newUser._id, tokens.refreshToken)

        res.status(201).send({ ...tokens, userId: newUser._id })

    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла. Попробуйте позже!"
        })
    }
})
router.post("/signInWithPassword", async (req, res) => {

})
router.post("/token", async (req, res) => {

})
module.exports = router