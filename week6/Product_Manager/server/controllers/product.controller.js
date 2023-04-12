const Product = require('../models/product.model');


module.exports={

allProducts: (req, res) => {
    Product.find({})
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneProduct: (req, res) => {
    Product.findOne({_id: req.params.id})
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createProduct: (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {res.json(newProduct)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
updateProduct: (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedProduct) => {res.json(updatedProduct)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
deleteProduct: (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},


}