
//#region Imports

import mongoose, { Date, Document, Schema } from "mongoose";
import { Claims, UserStatus } from "./Enums";

//#endregion


//#region Model

export interface IUser {
    Name: string
    Surname: string,
    Email: string,
    UserStatus: number
    Claim: number
    Password: string,
    MembershipDate: Date

}

export interface IUserModel extends IUser, Document {

}

//#endregion

//#region Schema

const UserSchema: Schema = new Schema({
    Name: { type: String, required: true },
    Surname: { type: String, required: true },
    Email: { type: String, required: true },
    UserStatus: { type: Number, default: UserStatus.Unapproved },
    Claim: { type: Number, default: Claims.Member },
    Password: { type: String, required: true },
    MembershipDate: { type: Date }

}, { versionKey: false });

//#endregion

export default mongoose.model<IUserModel>('Users', UserSchema);