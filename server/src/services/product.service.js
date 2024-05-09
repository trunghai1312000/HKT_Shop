"use strict";

const productModel = require("../models/product.model");
const { getInfoData } = require("../utils/index");
const { BadRequestError } = require("../core/error.response");

class ProductService {
    static getAllproduct = async () => {
        const data = await productModel.find();
        return getInfoData({
            field: ["_id", "name", "description", "price", "images", "quantity", "team"],
            object: data
        })
    }

    static getOneProduct = async (id) => {
        const data = await productModel.findById(id);
        if (!data) {
            throw new BadRequestError("Product not found");
        }
        return getInfoData({
            field: ["_id", "name", "description", "price", "images", "quantity", "team"],
            object: data
        })
    }

    static createProduct = async (data) => {
        const result = await productModel.create(data);
        return getInfoData({
            field: ["_id", "name", "description", "price", "images", "quantity", "team"],
            object: result
        })
    }

    static updateProduct = async (id, data) => {
        const result = await productModel.findByIdAndUpdate(id, data, { new: true });
        if (!result) {
            throw new BadRequestError("Product not found");
        }
        return getInfoData({
            field: ["_id", "name", "description", "price", "images", "quantity", "team"],
            object: result
        })
    }

    static deleteProduct = async (id) => {
        const result = await productModel.findByIdAndDelete(id);
        if (!result) {
            throw new BadRequestError("Product not found");
        }
        return getInfoData({
            field: ["_id", "name", "description", "price", "images", "quantity", "team"],
            object: result
        })
    }
}

module.exports = new ProductService();