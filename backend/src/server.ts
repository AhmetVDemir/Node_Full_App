import { Application } from "express";
const App : Application = require("../src/app");

App.set("PORT",5003);

App.listen(App.get("PORT"),()=>{console.log("Çalışmaya başladı");});