import express from "express";
import controller from "../api/ArticleController";

const router = express.Router();

router.post("/addArticle",controller.createArticle);

module.exports = router;