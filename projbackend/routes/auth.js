var express = require("express")
var router = express.Router()
const {check} = require("express-validator")
const {signout, signup, signin} = require("../controllers/auth")

router.post("/signup",
check("name", "Name should be longer then 3 characters").isLength({ min: 3}),
check("email", "Not an email").isEmail(),
check("password", "Password is required").isLength({min: 1}),
check("password", "Password must be longer than 8 characters").isLength({min: 8}),
signup)

router.post("/signin",
check("email", "email is required").not().isEmpty(),
check("password", "password is required").not().isEmpty(),
signin)

router.get("/signout", signout)

module.exports = router