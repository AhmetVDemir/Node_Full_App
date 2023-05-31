import Express, { Application, Request, Response, Router } from "express";
import BodyParser from 'body-parser';

import { ArticleRouter } from './routes/ArticleRoutes';
import { UserRouter } from "./routes/UserRoutes";


const App: Application = Express();



App.use(BodyParser.json());


App.use("/api/Test", (req: Request, res: Response) => { res.send("<h1>Api Çalışmakta</h1>") });

App.use("/api/articles", ArticleRouter);
App.use("/api/users",UserRouter);




export { App };