import Notification from "./notification.model.js";
export async function listNotifications(userId){return (await Notification.find({userId}).sort({createdAt:-1}).limit(100).lean()).map(x=>({...x,id:x._id}))}
export async function markRead(userId,id){return Notification.findOneAndUpdate({_id:id,userId},{read:true},{new:true}).lean()}
export async function markAllRead(userId){await Notification.updateMany({userId,read:false},{$set:{read:true}});return {success:true}}
