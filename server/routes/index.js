const express = require("express")
const router = express.Router({ mergeParams: true })
// const path = require("path")

router.use("/auth", require("./auth.routes"))
router.use("/blog", require("./blog.routers"))
router.use("/genus", require("./genus.routes"))
router.use("/profession", require("./profession.routes"))
router.use("/user", require("./user.routes"))

module.exports = router