import mongoose from "mongoose";
const topicSchema = new mongoose.Schema({
  title:{type:String,required:true}, order:{type:Number,default:1}, problemsCount:{type:Number,default:0},
  videoUrl:{type:String,default:""}, theory:{type:String,default:""}, notes:{type:String,default:""},
  problemIds:[{type:mongoose.Schema.Types.ObjectId,ref:"Problem"}],
},{_id:true});
const schema = new mongoose.Schema({
  title:{type:String,required:true,trim:true}, slug:{type:String,required:true,unique:true,index:true},
  level:{type:String,default:"Beginner"}, description:{type:String,default:""}, status:{type:String,enum:["draft","published"],default:"published"},
  topics:{type:[topicSchema],default:[]}, enrolledCount:{type:Number,default:0},
},{timestamps:true});
schema.virtual("topicsCount").get(function(){return this.topics.length});
export default mongoose.model("LearningPath",schema);
