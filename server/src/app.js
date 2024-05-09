const express = require("express")
const morgan=require('morgan')
require("dotenv").config()
const app = express()

//init middleware
app.use(morgan("dev"))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// init db
require("./dbs/init.mongodb");

// handling error
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
      status: "error",
      code: statusCode,
      message: error.message || "Internal Server Error",
    });
  });

module.exports = app;