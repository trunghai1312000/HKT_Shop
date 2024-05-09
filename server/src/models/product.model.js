'use-strict'

const {model, Schema, Types} = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const DOCUMENT_NAME='Product'
const COLLECTION_NAME = 'Products'

const productSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
    },
    quantity: {
        type: Number,
        required: true
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, productSchema)