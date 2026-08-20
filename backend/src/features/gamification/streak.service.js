import User from "../users/user.model.js";

function dayKey(date) {
  return new Date(date).toISOString().slice(0, 10);
}

export async function updateStreak(userId, now = new Date()) {
  const user = await User.findById(userId);
  if (!user) return null;

  const today = dayKey(now);
  const last = user.lastActivityDate ? dayKey(user.lastActivityDate) : null;

  if (last === today) return user;

  const yesterday = new Date(now);
  yesterday.setUTCDate(yesterday.getUTCDate() - 1);
  const nextStreak = last === dayKey(yesterday) ? (user.currentStreak || 0) + 1 : 1;

  user.currentStreak = nextStreak;
  user.longestStreak = Math.max(user.longestStreak || 0, nextStreak);
  user.lastActivityDate = now;
  await user.save();
  return user;
}
