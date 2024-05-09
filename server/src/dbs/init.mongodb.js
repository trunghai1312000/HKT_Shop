"use strict";
const mongoose = require("mongoose");
const {db: {host, name, port}} = require("../configs/config.mongodb");
const { countConnect } = require("../helpers/check.connect");

const connectString = `mongodb://${host}:${port}/${name}`;

class DB {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) =>
        console.log(
          "Connect Mongodb Success with number of connects: ",
          countConnect()
        )
      )
      .catch((err) => console.log(err));
  }

  static getInstance() {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }
}

const instanceMongoDB = DB.getInstance();

module.exports = instanceMongoDB;
