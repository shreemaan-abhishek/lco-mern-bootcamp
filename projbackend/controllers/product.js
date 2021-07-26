const Product = require("../models/product")

exports.getProductById = (req, res, next, id) => {
    Product.findById(id)
    .populate("category")
    .exec((err, product) => {
        if(err || !product){
            return res.status(400).json({
                error: "Product not found"
            })
        }
        req.profile = product
        next()
    })
}