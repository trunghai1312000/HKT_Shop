const express = require("express")
const morgan=require('morgan')
require("dotenv").config()
const app = express()
app.use(morgan("dev"))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 7777

app.listen(5000, () => console.log("Server ready on PORT: " + PORT))