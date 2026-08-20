import Contest from "./contest.model.js";
export async function listContests(userId){
 const docs=await Contest.find().sort({startsAt:1}).lean(); const now=Date.now();
 return docs.map(c=>({...c,id:c._id,status:c.status==="draft"?"draft":new Date(c.startsAt)>new Date()? "upcoming":new Date(c.startsAt.getTime()+c.durationMin*60000)>new Date()?"live":"ended",participants:c.registeredCount||0,myRegistered:userId?c.participants?.some(x=>String(x)===String(userId)):false}));
}
export async function getContest(id,userId){const c=await Contest.findById(id).lean();if(!c)return null;return {...c,id:c._id,participants:c.registeredCount||0,problems:(c.problems||[]).map(p=>({...p,id:p._id,solvedByMe:false}))}}
export async function leaderboard(id){const c=await Contest.findById(id).populate("participants","username name rating").lean();if(!c)return null;return (c.participants||[]).map((u,i)=>({rank:i+1,username:u.username,name:u.name,solved:0,penalty:0,ratingChange:0}))}
export async function saveContest(id,body){return id?Contest.findByIdAndUpdate(id,body,{new:true}):Contest.create(body)}
export async function deleteContest(id){return Contest.findByIdAndDelete(id)}
export async function registerContest(userId,id){return Contest.findOneAndUpdate({_id:id,participants:{$ne:userId}},{$addToSet:{participants:userId},$inc:{registeredCount:1}},{new:true})}
