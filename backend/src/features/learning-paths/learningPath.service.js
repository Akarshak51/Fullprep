import LearningPath from "./learningPath.model.js";
import UserProgress from "./userProgress.model.js";
import { slugify } from "../../shared/utils/slugify.js";
export async function listLearningPaths(userId){
 const paths=await LearningPath.find({status:"published"}).sort({createdAt:1}).lean();
 const progress=userId?await UserProgress.find({userId}).lean():[];
 const map=new Map(progress.map(x=>[String(x.learningPathId),x]));
 return paths.map(p=>({...p,id:p._id,topicsCount:p.topics?.length||0,problemsCount:(p.topics||[]).reduce((n,t)=>n+(t.problemsCount||t.problemIds?.length||0),0),progress:map.get(String(p._id))?.progress||0,enrolledCount:p.enrolledCount||0,topics:(p.topics||[]).map(t=>({...t,id:t._id,completed:map.get(String(p._id))?.completedTopics?.map(String).includes(String(t._id))?1:0}))}));
}
export async function getLearningPathBySlug(slug,userId){
 const p=await LearningPath.findOne({slug,status:"published"}).lean(); if(!p)return null;
 const prog=userId?await UserProgress.findOne({userId,learningPathId:p._id}).lean():null;
 return {...p,id:p._id,topicsCount:p.topics?.length||0,problemsCount:(p.topics||[]).reduce((n,t)=>n+(t.problemsCount||t.problemIds?.length||0),0),progress:prog?.progress||0,topics:(p.topics||[]).map(t=>({...t,id:t._id,completed:prog?.completedTopics?.map(String).includes(String(t._id))?1:0}))};
}
export async function upsertLearningPath(id,body){
 const payload={...body,slug:body.slug||slugify(body.title||"learning-path")};
 return id?LearningPath.findByIdAndUpdate(id,payload,{new:true,runValidators:true}):LearningPath.create(payload);
}
export async function updateProgress(userId,id,body){
 const p=await LearningPath.findById(id); if(!p)return null;
 const topicId=body.topicId?String(body.topicId):null;
 let prog=await UserProgress.findOne({userId,learningPathId:id});
 if(!prog)prog=new UserProgress({userId,learningPathId:id});
 if(topicId&&!prog.completedTopics.map(String).includes(topicId))prog.completedTopics.push(topicId);
 const total=p.topics.length||1; prog.progress=Math.min(100,Math.round((prog.completedTopics.length/total)*100)); await prog.save();
 return prog.toObject();
}
export async function deleteLearningPath(id){return LearningPath.findByIdAndDelete(id)}
