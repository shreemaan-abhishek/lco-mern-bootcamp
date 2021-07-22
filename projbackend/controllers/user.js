const User = require("../models/user")
const Order = require("../models/order")

exports.getUserById = (req, res, next , id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user
        next()
    })
}

exports.getUser = (req, res) => {
// TODO: GET BACK HERE FOR PASSWORD
    req.profile.salt = undefined
    req.profile.encry_password = undefined
    req.profile.createdAt = undefined
    req.profile.updatedAt = undefined
    return res.json(req.profile)
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        {_id: req.profile._id},
        {$set: req.body},
        {new: true, useFindAndModify: false},
        (err, user) => {
            if(err){
                return res.status(400).json({
                    error: "Not authorized"
                })
            }
            user.salt = undefined
            user.encry_password = undefined
            user.createdAt = undefined
            user.updatedAt = undefined
            res.json(user)
        }
    )
}

exports.userPurchaseList = (req, res) => {
    Order.find({User: req.profile._id})
    .populate("user", "_id name")
    .exec((err, order) => {
        if(err){
            return res.status(400).json({
                error: "No orders found"
            })
        }
        return res.json(order)
    })
}