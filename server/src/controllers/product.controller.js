"use strict";

const  ProductService = require("../services/product.service");
const { OK, CREATED } = require("../core/success.response");


class ProductController {
    async getAllProduct(req, res) {
        const data = await ProductService.getAllproduct();
        
        new OK({
            message: "Get all product successfully",
            metadata: data
        }).send(res);
    }

    async getOneProduct(req, res) {
        const data = await ProductService.getOneProduct(req.params.id);
        
        new OK({
            message: "Get one product successfully",
            metadata: data
        }).send(res);
    }

    async createProduct(req, res) {
        const data = await ProductService.createProduct(req.body);
        
        new CREATED({
            message: "Create product successfully",
            metadata: data
        }).send(res);
    }

    async updateProduct(req, res) {
        const data = await ProductService.updateProduct(req.params.id, req.body);
        
        new OK({
            message: "Update product successfully",
            metadata: data
        }).send(res);
    }

    async deleteProduct(req, res) {
        const data = await ProductService.deleteProduct(req.params.id);
        
        new OK({
            message: "Delete product successfully",
            metadata: data
        }).send(res);
    }   
}

module.exports = new ProductController()