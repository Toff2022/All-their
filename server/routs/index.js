const express = require("express")
const router = express.Router({ mergeParams: true })
// const path = require("path")

router.use("/auth", require("./auth.routes"))
// router.use("/coment", require("./auth.routes"))
router.use("/genus", require("./auth.routes"))
router.use("/profession", require("./auth.routes"))
router.use("/user", require("./auth.routes"))

module.exports = router