

import  {App}  from '../src/App';
import {DbConnection} from '../src/dataaccess/MongoSetting';
require('dotenv').config();




new DbConnection();

App.set("PORT",process.env.PORT)


App.listen(App.get("PORT"),()=>{console.log("The server started , Port is : " + App.get("PORT") );});
