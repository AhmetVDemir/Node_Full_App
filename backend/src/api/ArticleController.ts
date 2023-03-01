import { NextFunction,Request,Response } from "express";
import mongoose, { mongo } from "mongoose";
import Article from "../models/Article";

const AddArticle =  (req : Request, res: Response) => {

    const Header = req.body.Header;

    console.log(req.body);

    
    const yazi = new Article({
        _id: new mongoose.Types.ObjectId(),
        Header:String,
        Body:String
    
    })

    return yazi.save().then(yazi => res.json(yazi)).catch(error => console.log(error));
    
}

export default {AddArticle};