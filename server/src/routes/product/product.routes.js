'use strict'

const express = require('express')
const productController = require('../../controllers/product.controller')
const router = express.Router()

router.get('/product/', productController.getAllProduct)
router.get('/product/:id', productController.getOneProduct)
router.post('/product', productController.createProduct)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)

module.exports = router