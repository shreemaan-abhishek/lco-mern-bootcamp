const express = require("express")
const router = express.Router()

const { getCategoryById, createCategory, getCategory, getAllCategories } = require("../controllers/category")
const { getUserById } = require("../controllers/user")
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")

router.param("userId", getUserById)
router.param("categoryId", getCategoryById)

router.post(
    "/category/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createCategory
)

router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategories)

module.exports = router