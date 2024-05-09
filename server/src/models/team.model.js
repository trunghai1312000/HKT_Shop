'use-strict'
const {model, Schema} = require('mongoose')

const DOCUMENT_NAME='Team'
const COLLECTION_NAME = 'Teams'

const teamSchema = new Schema({
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