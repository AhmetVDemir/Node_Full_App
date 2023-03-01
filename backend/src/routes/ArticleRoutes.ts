import express, { Router } from "express";
import ArticleController from "../api/ArticleController";

export const ArticleRouter : Router = express.Router();

ArticleRouter.post("/AddArticle",ArticleController.AddArticle);

module.exports = ArticleRouter;