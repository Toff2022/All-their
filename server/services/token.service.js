const jwt = require("jsonwebtoken")
const config = require("config")
const Token = require("../models/Token")

class TokenService {
    //return accessToken, refreshToken, expiresIn
    // payload - объект, к-й мы передаём в genrate из fronta(в нем _id = _id вновь созданного польз-ля) 
    generate (payload) {
        const accessToken = jwt.sign(payload, config.get("accessSecret"), {
            expiresIn: "1h"
        })
        const refreshToken = jwt.sign(payload, config.get("refreshSecret"))
        return { accessToken, refreshToken, expiresIn: 3600 }
    }

    async save (userId, refreshToken) {
        const data = await Token.findOne({ user: userId })
        if (data) {
            data.refreshToken = refreshToken
            return data.save()
        }
        const token = await Token.create({ user: userId, refreshToken })
        return token
    }
}

module.exports = new TokenService()