import { NextFunction,Request,Response } from "express";
import mongoose, { mongo } from "mongoose";
import Article from "../models/Article";

import ArticleService from "../services/ArticlesService";


const AddArticle = (req:Request,res:Response) => {
    ArticleService.AddArticle(req.body,(item:any)=>{
        if(!item.result){
            console.log(item.result);
        }
        return res.json(item);
    });
}



export default {AddArticle};