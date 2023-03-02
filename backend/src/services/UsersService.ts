//#region Imports

import { CallbackError } from 'mongoose';
import Users, { IUserModel, IUser } from '../models/User'

//#endregion

//#region  Bussiness Service

class UserService{

    //Register
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

    public static GetUserByEmail(UserEmail:string,cb:Function){}

    public static GetAllUser(cb:Function){}

    public static UpdateUser(UserModel:IUser,cb:Function){}

    public static DeleteUser(UserModel:IUser,cb:Function){}

    public static Login(cb:Function){}

    //Yetki ve Oturum kontrolü
    public static Verify(){}

    public static ForgatPassword(UserEmail:string,cb:Function){}

    public static EmailApprove(UserEmail:string,cb:Function){}



}

//#endregion

export default UserService;