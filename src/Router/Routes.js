const Route=require("express").Router()
const cors=require("cors")
const morgan=require("morgan")
const multer=require("multer")


const { login } = require("../Controller/login.controller.js")
const { registerUser } = require("../Controller/register.controller.js")


const upload=multer()
Route.use(cors())
Route.use(morgan('dev'))




Route.post("/login",login)
Route.post("/register",registerUser)


module.exports=Route;