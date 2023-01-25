import  Express, {Application, Request, Response}  from "express"; 
const app : Application = Express();


app.use("/Test",(req : Request,res:Response)=>{res.send("<h1>Test</h1>")});

module.exports = app;