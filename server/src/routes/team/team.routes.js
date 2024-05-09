'use strict'

const express = require('express')
const teamController = require('../../controllers/team.controller')
const router = express.Router()

router.get('/team/', teamController.getAllTeam)
router.get('/team/:id', teamController.getOneTeam)
router.post('/team', teamController.createTeam)
router.put('/team/:id', teamController.updateTeam)
router.delete('/team/:id', teamController.deleteTeam)

module.exports = router