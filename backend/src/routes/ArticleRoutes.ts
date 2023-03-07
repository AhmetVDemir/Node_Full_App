//#region Imports

import express, { Router } from "express";
import ArticleController from "../api/ArticleController";

//#endregion

//#region Constructers

const ArticleRouter: Router = express.Router();

//#endregion

//#region Routes

ArticleRouter.get("/GetAllArticles",ArticleController.GetAllArticles);
ArticleRouter.post("/AddArticle", ArticleController.AddArticle);

//#endregion

export { ArticleRouter } 