//#region Imports
import { NextFunction, Request, Response } from "express";
import ArticleService from "../services/ArticlesService";
//#endregion


//#region Controller
const AddArticle = (req: Request, res: Response) => {
    ArticleService.AddArticle(req.body, (item: any) => {
        if (!item.result) {
            console.log(item.result);
        }
        return res.json(item);
    });
}

const GetAllArticles = (req: Request, res: Response) => {
    ArticleService.GetAllArticles((item:any)=>{
        if (!item.result) {
            console.log(item.result);
        }
        return res.json(item);
    });
}
//#endregion






export default { AddArticle , GetAllArticles};