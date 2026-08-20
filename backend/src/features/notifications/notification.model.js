import mongoose from "mongoose";
const schema=new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true}, type:{type:String,default:"system"},
 title:{type:String,required:true}, message:{type:String,default:""}, read:{type:Boolean,default:false}, createdAt:{type:Date,default:Date.now}
},{timestamps:true});
export default mongoose.model("Notification",schema);
