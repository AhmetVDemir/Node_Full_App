//#region Imports

import Express, { Application, Request, Response, Router } from "express";
import BodyParser from 'body-parser';

import { ArticleRouter } from './routes/ArticleRoutes';
import { UserRouter } from "./routes/UserRoutes";

//#endregion


//#region Constructers

const App: Application = Express();

//#endregion


//#region Middlewares and Routes

App.use(BodyParser.json());


App.use("/api/Test", (req: Request, res: Response) => { res.send("<h1>Api Çalışmakta</h1>") });

App.use("/api/articles", ArticleRouter);
App.use("/api/users",UserRouter);

//#endregion


export { App };