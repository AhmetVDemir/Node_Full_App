//#region Imports

import { CallbackError } from 'mongoose';
import Articles, { IArticleModel, IArticle } from '../models/Article'
import { Cryptography } from '../utilities/crypt/CryptHelper';

//#endregion


//#region  Bussiness Service

class ArticleService {

    public static AddArticle(ArticleModel: IArticle, cb: Function) {
        new Articles(ArticleModel).save(function (error: CallbackError, res: IArticleModel) {
            if (error) {
                return cb({ result: false, message: 'Makale kayıt edilirken hata oluştu' })
            }
            else {
                return cb({ result: true, message: 'Makale kayıt edildi', data: res });
            }
        });
    }

    public static GetAllArticles(cb: Function) {
        console.log("Girdi")
        Articles.find(function (err: CallbackError, item: any) {
            if(err)
                cb({ result: false, message: 'Veri aranırken hata oluştu' });
            else if (item)
                cb({ result: true, message: 'Veri bulundu', data: item });
            else
                cb({ result: false, message: 'Hiççbir Veri bulunamadı' });
        })
    }


}

//#endregion

export default ArticleService;