const jwt = require("jsonwebtoken")
const config = require("config")
const Token = require("../models/Token")
const chalk = require("chalk")

class TokenService {
    //return accessToken, refreshToken, expiresIn
    // payload - объект, к-й мы передаём в genrate из fronta(в нем _id = _id вновь созданного польз-ля) 
    generate (payload) {
        // console.log(chalk.grey('payload', payload))

        const accessToken = jwt.sign(payload, config.get("accessSecret"), {
            expiresIn: "1h"
        })

        const refreshToken = jwt.sign(payload, config.get("refreshSecret"))
        return { accessToken, refreshToken, expiresIn: 3600, }
    }

    async save (user, refreshToken) {
        const data = await Token.findOne({ user })
        if (data) {
            data.refreshToken = refreshToken
            return data.save()
        }
        const token = await Token.create({ user, refreshToken })
        return token
    }
    validateRefresh (refreshToken) {
        try {
            return jwt.verify(refreshToken, config.get("refreshSecret"))
        } catch (e) {
            return null
        }
    }

    validateAccess (accessToken) {
        try {
            return jwt.verify(accessToken, config.get("accessSecret"))
        } catch (e) {
            return null
        }
    }

    async findToken (refreshToken) {
        try {
            return await Token.findOne({ refreshToken })
        } catch (e) {
            return null
        }
    }

}

module.exports = new TokenService()