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