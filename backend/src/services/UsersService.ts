//#region Imports

import { CallbackError } from 'mongoose';
import Users, { IUserModel, IUser } from '../models/User'

//#endregion

//#region  Bussiness Service

class UserService {

    //Register
    public static AddUser(UserModel: IUser, cb: Function) {

        Users.find({ Email: UserModel.Email }).then((item) => {
            if(item != null){
                console.log("Malesef email adresi kayıtlı başka bir email adresi al");
            }else {console.log("Bu email boştur kaydet")}
        }).catch((err) => {
            return cb({ result: false, message: 'Email kontrol edilirken hata oluştu', error: err });
        })
        /*

        new Users(UserModel).save(function (error: CallbackError, res: IUserModel) {
            if (error) {
                return cb({ result: false, message: 'Kullanıcı kayıt edilirken hata oluştu' })
            }
            else {
                return cb({ result: true, message: 'Kullanıcı kayıt edildi', data: res });
            }
        });
        */
    }

    public static GetAllUser(cb: Function) {
        Users.find({}, (error: CallbackError, res: Array<IUserModel>) => {
            if (error) {
                return cb({ result: false, message: 'Kullanıcı kayıtları getirilirken hata oluştu' })
            } else {
                return cb({ result: true, message: 'Kullanıcı kayıtları getirildi', data: res });
            }
        });
    }

    public static GetUserByEmail(UserEmail: string, cb: Function) { }

    public static UpdateUser(UserModel: IUser, cb: Function) { }

    public static DeleteUser(UserModel: IUser, cb: Function) { }

    public static Login(cb: Function) { }

    //Yetki ve Oturum kontrolü
    public static Verify() { }

    public static ForgatPassword(UserEmail: string, cb: Function) { }

    public static EmailApprove(UserEmail: string, cb: Function) { }



}

//#endregion

export default UserService;