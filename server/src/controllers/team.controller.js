"use strict";

const  ProductService = require("../services/product.service");
const { OK, CREATED } = require("../core/success.response");

class TeamController {
    async getAllTeam(req, res) {
        const data = await ProductService.getAllTeam();
        
        new OK({
            message: "Get all team successfully",
            metadata: data
        }).send(res);
    }

    async getOneTeam(req, res) {
        const data = await ProductService.getOneTeam(req.params.id);
        
        new OK({
            message: "Get one team successfully",
            metadata: data
        }).send(res);
    }

    async createTeam(req, res) {
        const data = await ProductService.createTeam(req.body);
        
        new CREATED({
            message: "Create team successfully",
            metadata: data
        }).send(res);
    }

    async updateTeam(req, res) {
        const data = await ProductService.updateTeam(req.params.id, req.body);
        
        new OK({
            message: "Update team successfully",
            metadata: data
        }).send(res);
    }

    async deleteTeam(req, res) {
        const data = await ProductService.deleteTeam(req.params.id);
        
        new OK({
            message: "Delete team successfully",
            metadata: data
        }).send(res);
    }
}

module.exports = new TeamController()