require('dotenv').config();
const mongoose = require('mongoose');

class DbConnection {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.CONNECTION_STRING)
            .then(() => {
                console.log("Veritabanı bağlantısı sağlandı !");
            })
            .catch((error:any) => {
                console.error("Veritabanı bağlantı hatası !");
                console.log(error);
            });
    }
}





export{ DbConnection};