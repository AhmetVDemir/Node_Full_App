
import mongoose, { Date, Document, Schema } from "mongoose";
import { ArticleStatus } from "./Enums";


export interface IArticle {
    Header: string,
    Context: string,
    Date: Date,
    Status: number
}

export interface IArticleModel extends IArticle, Document {

}



const ArticlesSchema: Schema = new Schema({
    Header: { type: String },
    Context: { type: String },
    Date: { type: Date },
    Status: { type: Number, default: ArticleStatus.Unapproved }
},
{ versionKey: false });



export default mongoose.model<IArticleModel>('Articles', ArticlesSchema);