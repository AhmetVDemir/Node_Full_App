
import express, { Router } from "express";
import ArticleController from "../api/ArticleController";


const ArticleRouter: Router = express.Router();



ArticleRouter.get("/GetAllArticles",ArticleController.GetAllArticles);
ArticleRouter.post("/AddArticle", ArticleController.AddArticle);



export { ArticleRouter } 