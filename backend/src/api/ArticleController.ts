import { NextFunction,Request,Response } from "express";
import mongoose, { mongo } from "mongoose";
import Article from "../models/Article";

const createArticle =  (req : Request, res: Response) => {
    const Header = req.body;
    console.log(req.body);

    const yazi = new Article({
        _id: new mongoose.Types.ObjectId(),
        Header
    })

    return yazi.save().then(yazi => res.json(yazi)).catch(error => console.log(error));
}

export default {createArticle};