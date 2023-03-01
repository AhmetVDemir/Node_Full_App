
//#region Imports
import  {App}  from '../src/App';
import {DbConnection} from '../src/dataaccess/MongoSetting';
require('dotenv').config();

//#endregion


//#region Constructers

new DbConnection();

App.set("PORT",process.env.PORT)

//#endregion

//#region Middlewares and Routes


App.listen(App.get("PORT"),()=>{console.log("The server started , Port is : " + App.get("PORT") );});

//#endregion