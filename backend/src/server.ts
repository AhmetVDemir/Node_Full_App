
require('dotenv').config();

const {DbConnection} = require('./dataaccess/MongoSetting');

import { App } from '../src/App.ts'; 


new DbConnection();
App.set("PORT",process.env.PORT);

App.listen(App.get("PORT"),()=>{console.log("Çalışmaya başladı : " + App.get("PORT") );});