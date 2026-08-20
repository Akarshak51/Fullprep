import User from "../users/user.model.js";
export async function getSettings(userId){const u=await User.findById(userId).lean();return u?.settings||{}}
export async function updateSettings(userId,partial){const allowed={};if(partial.notifications)allowed["settings.notifications"]=partial.notifications;if(partial.privacy)allowed["settings.privacy"]=partial.privacy;if(partial.theme)allowed["settings.theme"]=partial.theme;const u=await User.findByIdAndUpdate(userId,{$set:allowed},{new:true});return u.settings}
export async function deleteAccount(userId){await User.findByIdAndUpdate(userId,{status:"suspended",email:`deleted_${userId}@deleted.local`});return {success:true}}
