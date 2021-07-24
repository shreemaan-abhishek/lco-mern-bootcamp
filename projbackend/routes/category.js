const express = require("express")
const router = express.Router()

const { getCategoryById } = require("../controllers/category")
const { getUserById } = require("../controllers/user")
const {} = require("../controllers/auth")

router.param("userId", getUserById)
router.param("categoryId", getCategoryById)

module.exports = router