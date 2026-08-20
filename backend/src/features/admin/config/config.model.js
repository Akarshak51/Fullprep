import mongoose from "mongoose";
const schema=new mongoose.Schema({key:{type:String,unique:true,default:"platform"},value:{type:mongoose.Schema.Types.Mixed,default:{}}},{timestamps:true});
export default mongoose.model("PlatformConfig",schema);
