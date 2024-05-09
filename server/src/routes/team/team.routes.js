'use strict'

const express = require('express')
const teamController = require('../../controllers/team.controller')
const router = express.Router()
const { asyncHandler } = require('../../middleware/error.middleware')

router.get('/team/', asyncHandler(teamController.getAllTeam))
router.get('/team/:id', asyncHandler(teamController.getOneTeam))
router.post('/team/create', asyncHandler(teamController.createTeam))
router.put('/team/update/:id', asyncHandler(teamController.updateTeam))
router.delete('/team/delete/:id', asyncHandler(teamController.deleteTeam))

module.exports = router