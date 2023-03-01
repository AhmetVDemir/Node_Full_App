//#region Imports

import { CallbackError } from 'mongoose';
import Articles, { IArticleModel } from '../models/Article'

//#endregion

import { IArticle } from "../models/Article";

//#region  Bussiness Service

class ArticleService{

    public static AddArticle(ArticleModel:IArticle,cb:Function){
        new Articles(ArticleModel).save(function(error:CallbackError,res:IArticleModel){
            if(error){
                return cb({result: false, message: 'Makale kayıt edilirken hata oluştu' })
            }
            else{
                return cb({result: true, message: 'Makale kayıt edildi',data:res });
            }
        });
    }


}

//#endregion

export default ArticleService;