'use-strict'
const {model, Schema} = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const DOCUMENT_NAME='Team'
const COLLECTION_NAME = 'Teams'

const teamSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
        enum: ['Club', 'National Team', 'Other'],
        default: 'Club'
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, teamSchema)