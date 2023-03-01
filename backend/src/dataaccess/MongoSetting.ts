
//#region Imports

require('dotenv').config();
import mongoose from 'mongoose';

//#endregion


//#region App

const ConnectionString : string = process.env.CONNECTION_STRING?.toString() || "";

class DbConnection {
    constructor() {
        this.Connect();
    }
    Connect() {
        mongoose.set('strictQuery', true)
        mongoose.connect(ConnectionString)
            .then(() => {
                console.log("Database connection is Successful !");
            })
            .catch((Error:any) => {
                console.error("Connection Error ! error : \n" + Error +"\n");
            });
    }
}

//#endregion









export{ DbConnection};