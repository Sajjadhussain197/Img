import { model ,models, Schema } from "mongoose";
import { transform } from "next/dist/build/swc";


export interface Image extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: string;
        firstName: string;
        lastName: string;
    }; 
    createdAt?: Date;
    updatedAt?: Date;
}




const imageSchema = new Schema({
    title: {type: String, required: true},
    transformationType:{type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: URL, required: true},
    width: {type: Number},
    height: { type: Number},
    config: {type: Object},
    transformationUrl:{type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type:String},
    author:{type: Schema.Types.ObjectId, ref:'User'},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}


})
const Image= models?.Image || model('image',imageSchema);

export default Image;


const userSchema = new Schema({
    clerkId: {type: String, 
        required: true,
    unique:true},
    email: {type: String,
         required: true,
         unique:true},
    username: {type: String, rerquired: true,
        unique:true},
    photo: {type: String},
    firstname: {type: String},
    lastname:{type:String},
    planId:{type: Number,default:1},
    creditBalance:{type:Number, default:10,},

})