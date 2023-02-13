import { Application } from "express";
require('dotenv').config();

const {DbConnection} = require('./dataaccess/MongoSetting');
const App : Application = require("../src/app");


const db = new DbConnection();
App.set("PORT",process.env.PORT);

App.listen(App.get("PORT"),()=>{console.log("Çalışmaya başladı : " + App.get("PORT") );});