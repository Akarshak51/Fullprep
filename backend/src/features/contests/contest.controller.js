import * as s from "./contest.service.js";
export async function list(req,res,next){try{res.json({success:true,data:await s.listContests(req.user?._id)})}catch(e){next(e)}}
export async function detail(req,res,next){try{const x=await s.getContest(req.params.id,req.user?._id);if(!x)return res.status(404).json({success:false,message:"Contest not found"});res.json({success:true,data:x})}catch(e){next(e)}}
export async function board(req,res,next){try{const x=await s.leaderboard(req.params.id);if(!x)return res.status(404).json({success:false,message:"Contest not found"});res.json({success:true,data:x})}catch(e){next(e)}}
export async function register(req,res,next){try{const x=await s.registerContest(req.user._id,req.params.id);if(!x)return res.status(404).json({success:false,message:"Contest not found"});res.json({success:true,data:x})}catch(e){next(e)}}
export async function adminList(req,res,next){try{const docs=await (await import("./contest.model.js")).default.find().sort({startsAt:-1}).lean();res.json({success:true,data:docs.map(x=>({...x,id:x._id,registered:x.registeredCount||0}))})}catch(e){next(e)}}
export async function adminDetail(req,res,next){try{const x=await s.getContest(req.params.id);if(!x)return res.status(404).json({success:false,message:"Contest not found"});res.json({success:true,data:x})}catch(e){next(e)}}
export async function adminSave(req,res,next){try{const x=await s.saveContest(req.params.id,req.body);res.status(req.params.id?200:201).json({success:true,data:{...x.toObject(),id:x._id}})}catch(e){next(e)}}
export async function adminDelete(req,res,next){try{const x=await s.deleteContest(req.params.id);if(!x)return res.status(404).json({success:false,message:"Contest not found"});res.json({success:true,data:{id:x._id}})}catch(e){next(e)}}
