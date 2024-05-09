"use strict";

const teamModel = require("../models/team.model");
const { getInfoData } = require("../utils/index");
const { BadRequestError, ConflictRequestError, NotFoundError } = require("../core/error.response");

class TeamService {
    static getAllTeam = async () => {
        const data = await teamModel.find();
        if (!data) {
            throw new NotFoundError("Team not found");
        }
        return getInfoData({
            field: ["_id", "name", "type"],
            object: data
        })
    }

    static getOneTeam = async (id) => {
        const data = await teamModel.findById(id);
        if (!data) {
            throw new NotFoundError("Team not found");
        }
        return getInfoData({
            field: ["_id", "name", "type"],
            object: data
        })
    }

    static createTeam = async (data) => {
        const exist = await teamModel.findOne({ name: data.name }).lean();
        if (exist) {
            throw new ConflictRequestError("Team already exists");
        }
        const result = await teamModel.create(data);
        return getInfoData({
            field: ["_id", "name", "type"],
            object: result
        })
    }

    static updateTeam = async (id, data) => {
        const result = await teamModel.findByIdAndUpdate(id, data, { new: true });
        if (!result) {
            throw new NotFoundError("Team not found");
        }
        return getInfoData({
            field: ["_id", "name", "type"],
            object: result
        })
    }

    static deleteTeam = async (id) => {
        const result = await teamModel.findByIdAndDelete(id);
        if (!result) {
            throw new NotFoundError("Team not found");
        }
        return getInfoData({
            field: ["_id", "name", "type"],
            object: result
        })
    }   
}

module.exports = TeamService;