import mongoose from "mongoose";
const contestProblem=new mongoose.Schema({problemId:{type:mongoose.Schema.Types.ObjectId,ref:"Problem"},title:String,difficulty:String,points:{type:Number,default:1}},{_id:true});
const schema=new mongoose.Schema({
 title:{type:String,required:true}, slug:{type:String,index:true}, description:{type:String,default:""},
 startsAt:{type:Date,required:true}, durationMin:{type:Number,default:90}, status:{type:String,enum:["scheduled","live","ended","draft"],default:"scheduled"},
 problems:{type:[contestProblem],default:[]}, prizes:{type:[String],default:[]}, registeredCount:{type:Number,default:0},
 participants:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
},{timestamps:true});
export default mongoose.model("Contest",schema);
