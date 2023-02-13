import  Express, {Application, Request, Response}  from "express"; 
const App : Application = Express();



App.use("/Test",(req : Request,res:Response)=>{res.send("<h1>Test</h1>")});

module.exports = App;