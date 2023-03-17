const express = require("express")
const bcrypt = require("bcryptjs")
const tokenService = require("../services/token.service")
const { generateUserData } = require("../utils/helpers")
const User = require("../models/User")
const router = express.Router({ mergeParams: true })
const { check, validationResult } = require("express-validator")
const chalk = require("chalk")
// 1. get data from req(email,password,...)
// 2. check if users alredy exists
// 3. hash password
// 4. create user
// 5. generate tokens

router.post("/signUp", [
    check("email", "Uncorrect email").isEmail(),
    check("password", "Min length of password is 8 symbols!(Минимальная длинна пароля 8 символов!)").isLength({ min: 8 }),
    async (req, res) => {

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "INVALID_DATA",
                        code: 400,
                        errors: errors.array()
                    }
                })
            }
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
            // console.log(chalk.bgGrey('hashedPassword', hashedPassword))

            const newUser = await User.create({
                ...generateUserData(),
                ...req.body,
                password: hashedPassword
            })
            // console.log(chalk.grey("newUser", newUser));

            const tokens = tokenService.generate({ _id: newUser._id })
            await tokenService.save(newUser._id, tokens.refreshToken)
            // console.log(chalk.grey('tokens', tokens))

            res.status(201).send({ ...tokens, userId: newUser._id })

        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла. Попробуйте позже!"
            })
        }
    }])
router.post("/signInWithPassword", async (req, res) => {

})
router.post("/token", async (req, res) => {

})
module.exports = router