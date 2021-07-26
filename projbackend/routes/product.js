const express = require("express")
const router = express.Router()

const { getProductById, createProduct, getPhoto } = require("../controllers/product")
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")
const { getUserById } = require("../controllers/user")

router.param("productId", getProductById)
router.param("userId", getUserById)

router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct)
router.get("/product/:productId", getProduct)
router.get("/product/photo/:productId", getPhoto)

module.exports = router