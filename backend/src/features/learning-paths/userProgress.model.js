import mongoose from "mongoose";
const schema=new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true},
 learningPathId:{type:mongoose.Schema.Types.ObjectId,ref:"LearningPath",required:true,index:true},
 completedTopics:[{type:mongoose.Schema.Types.ObjectId}], completedProblems:[{type:mongoose.Schema.Types.ObjectId}],
 progress:{type:Number,default:0}
},{timestamps:true});
schema.index({userId:1,learningPathId:1},{unique:true});
export default mongoose.model("UserProgress",schema);
