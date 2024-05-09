'use-strict'

const express = require('express')
const router = express.Router()

router.use('/v1/api', require('./product/product.routes'))
router.use('/v1/api', require('./team/team.routes'))

module.exports = router