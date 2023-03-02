//#region Imports

import { CallbackError } from 'mongoose';
import Users, { IUserModel, IUser } from '../models/User'

//#endregion

//#region  Bussiness Service

class UserService{

    public static AddUser(UserModel:IUser,cb:Function){
        new Users(UserModel).save(function(error:CallbackError,res:IUserModel){
            if(error){
                return cb({result: false, message: 'Kullanıcı kayıt edilirken hata oluştu' })
            }
            else{
                return cb({result: true, message: 'kullanıcı kayıt edildi',data:res });
            }
        });
    }


}

//#endregion

export default UserService;