//#region Imports

import Express, { Application, Request, Response, Router } from "express";
import BodyParser from 'body-parser';

import { ArticleRouter } from '../src/routes/ArticleRoutes';

//#endregion


//#region Constructers

export const App: Application = Express();

//#endregion


//#region Middlewares and Routes

App.use(BodyParser.json());


App.use("/api/Test", (req: Request, res: Response) => { res.send("<h1>Test Ettik</h1>") });
App.use("/api/articles", ArticleRouter);

//#endregion


module.exports = App;