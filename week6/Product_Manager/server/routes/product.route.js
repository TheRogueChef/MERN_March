const ProductController = require('../controllers/product.controller')


module.exports = app => {
    app.get('/api/allProducts', ProductController.allProducts);
    app.post('/api/newProduct', ProductController.createProduct);
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}