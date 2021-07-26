const Product = require("../models/product")
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs")

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

exports.createProduct = (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtentions = true

    form.parse(req, (err,fields, file) => {
        if(err){
            return res.status(400).json({
                error: "Unexpected error occured"
            })
        }

        const { name, description, price, category, stock} = fields
        if(!name || !description || !price || !category || !stock){
            return res.status(400).json({
                error: "Please include all fields"
            })
        }
        let product = new Product(fields)

        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size too big"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.contentType
        }

        product.save((err, product) => {
            if(err){
                res.status(400).json({
                    error: "Failed to save tshirt in DB"
                })
            }
            res.json(product)
        })
    })
}

exports.getProduct = (req, res) => {
    req.product.photo = undefined // this saves us time because media files are big
    return res.json(req.product)
}

exports.getPhoto = (req, res, next) => {
    if(req.product.photo.data){
        res.set("Content-Type", req.product.photo.contentType)
        return res.send(req.produt.photo.data)
    }
    next()
}