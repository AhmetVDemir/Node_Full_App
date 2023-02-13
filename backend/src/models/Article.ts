import mongoose, { Document, Schema } from "mongoose";

export interface IArticle {
    
    Header: string
}

export interface IArticleModel extends IArticle, Document {

}

const ArticleSchema: Schema = new Schema({
    Header: { type: String}
},
    { versionKey: false });

export default mongoose.model<IArticleModel>('Articles',ArticleSchema);