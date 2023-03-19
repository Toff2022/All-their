const express = require("express")
const bcrypt = require("bcryptjs")
const tokenService = require("../services/token.service")
const { generateUserData } = require("../utils/helpers")
const User = require("../models/User")
const router = express.Router({ mergeParams: true })
const { check, validationResult } = require("express-validator")
const chalk = require("chalk")
const Token = require("../models/Token")
// 1. get data from req(email,password,...)
// 2. check if users alredy exists
// 3. hash password
// 4. create user
// 5. generate tokens

router.post("/signUp", [
    check("email", "Uncorrect email, Некорректный email").isEmail(),
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
                message: "На сервере(signUp) произошла ошибка. Попробуйте позже!"
            })
        }
    }])

//1. validate
//2. find user
//3. compare hashed password
//4. generate tokens
//5. return data
router.post("/signInWithPassword", [
    check("email", "Email invalid!(Email некорректный!)").normalizeEmail().isEmail(),
    check("password", "Password can't be empty!(Пароль не может быть пустым!)").exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "INVALID_DATA",
                        code: 400
                    }
                })
            }
            const { email, password } = req.body

            const existingUser = await User.findOne({ email })
            if (!existingUser) {
                return res.status(400).send({
                    error: {
                        message: "EMAIL_NOT_FOUND",
                        code: 400
                    }
                })
            }

            const isPasswordEqual = await bcrypt.compare(password, existingUser.password)
            if (!isPasswordEqual) {
                return res.status(400).json({
                    error: {
                        message: "INVALID_PASSWORD",
                        code: 400
                    }
                })
            }

            const tokens = tokenService.generate({ _id: existingUser._id })
            await tokenService.save(existingUser._id, tokens.refreshToken)

            res.status(200).send({ ...tokens, userId: existingUser._id })

        } catch (e) {
            res.status(500).json({
                message: "На сервере(signInWithPassword) произошла ошибка. Попробуйте позже!"
            })
        }
    }])
function isTokenInvalid (data, dbToken) {
    return !data || !dbToken || data._id !== dbToken?.user?.toString()
}
router.post("/token", async (req, res) => {
    try {
        const { refresh_token: refreshToken } = req.body
        const data = tokenService.validateRefresh(refreshToken)
        // console.log("data", data)

        const dbToken = await tokenService.findToken(refreshToken)
        // console.log("dbToken", dbToken)

        if (isTokenInvalid(data, dbToken)) {
            return res.status(401).json({ message: "Unautorized" })
        }

        const tokens = await tokenService.generate({
            _id: data._id
        })
        await tokenService.save(data._id, tokens.refreshToken)
        res.status(200).send({ ...tokens, userId: data._id })
        // res.status(200).send({ data })

    } catch (e) {
        res.status(500).json({
            message: "На сервере(token) произошла ошибка. Попробуйте позже!"
        })
    }
})
module.exports = router