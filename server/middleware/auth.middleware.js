const tokenService = require("../services/token.service")

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next()
    }

    try {
        // Bearer osdvhsivsivsdvsovsidvsdidAs...(token)
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({ message: "Unautorized!" })
        }

        const data = tokenService.validateAccess(token)
        console.log("decoded", data);
        if (!data) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        req.user = data
        next()
    } catch (e) {
        res.status(401).json({ message: "Unautorized!" })

    }
}