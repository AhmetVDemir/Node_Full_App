import  Express, {Application, Request, Response}  from "express"; 
const App : Application = Express();
const ArticleRouter = require('../src/routes/Routes');





App.use("/api/Test",(req : Request,res:Response)=>{res.send("<h1>Test</h1>")});
App.use("/api/articles",ArticleRouter);

module.exports = App;