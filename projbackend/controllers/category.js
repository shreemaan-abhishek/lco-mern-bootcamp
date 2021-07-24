const Category = require("../models/category")

exports.getCategoryById = (req, res, next, id) => {

    Category.findById(id).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "Category not found"
            })
        }
        req.category = category
        next()
    })
}

exports.createCategory = (req, res) => {
    let category = new Category(req.body)
    category.save( (error, category) => {
        if(error){
            return res.status(400).json({
                error: "Unable to save category"
            })
        }

        res.json({ category })
    })
}

exports.getCategory = (req, res) => {
    return res.json(req.category)
}

exports.getAllCategories = (req, res) => {
    Category.find().exec((error, categories) => {
        if (err) {
            return res.status(400).json({
                error: "No categories find"
            })
        }

        res.json(categories)
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category
    category.name = req.body.name

    category.save((err, updatedCategory) => {
        if(err){
            return res.status(400).json({
                error: "failed to update category"
            })
        }
        res.json(updatedCategory)
    })
}