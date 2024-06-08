import {Schema, model, models } from "mongoose";


const TransactionShema= new Schema({
createdAt:{ type: Date,
    default: Date.now,
},
stripeId:{
    type: String,
    required: true,
    unique:true,
},
amount:{ type: Number,
    reqruired: true,
},
plan:{
    type:String,
},
credits:{
    type:Number,
    
},
buyre:{
    type: String,
    ref:"User",
}

});

const Transaction= models?.Transaction || model("Transaction", TransactionShema);

export default Transaction;

