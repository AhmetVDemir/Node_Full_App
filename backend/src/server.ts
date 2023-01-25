const app = require("../src/app");

app.set("PORT",5003);

app.listen(app.get("PORT"),()=>{console.log("Çalışmaya başladı");});