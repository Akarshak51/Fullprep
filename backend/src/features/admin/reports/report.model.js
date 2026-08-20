import mongoose from "mongoose";
const schema=new mongoose.Schema({
 type:{type:String,required:true}, target:{type:String,default:""}, reporter:{type:String,default:""}, reporterId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
 status:{type:String,enum:["open","investigating","resolved"],default:"open"}, description:{type:String,default:""},
 createdAt:{type:Date,default:Date.now}, resolvedAt:Date, resolvedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{timestamps:true});
export default mongoose.model("Report",schema);
