'use strict'

const express = require('express')
const productController = require('../../controllers/product.controller')
const router = express.Router()

router.get('/product/', productController.getAllProduct)
router.get('/product/:id', productController.getOneProduct)
router.post('/product/create', productController.createProduct)
router.put('/product/update/:id', productController.updateProduct)
router.delete('/product/delete/:id', productController.deleteProduct)

module.exports = router