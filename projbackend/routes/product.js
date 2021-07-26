const express = require("express")
const router = express.Router()

const { getProductById } = require("../controllers/product")
const { getUserById } = require("../controllers/user")

router.param("productId", getProductById)
router.param("userId", getUserById)

router.get("/:productId", )

module.exports = router