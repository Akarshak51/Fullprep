import User from "../users/user.model.js";
import Submission from "../submissions/submission.model.js";
import { calculateLevel, calculateSubmissionXp } from "./xpCalculator.service.js";
import { updateStreak } from "./streak.service.js";

const BADGES = [
  { key: "first-solve", title: "First Solve", description: "Solve your first problem.", icon: "🎯" },
  { key: "ten-solved", title: "Getting Started", description: "Solve 10 problems.", icon: "🔥", solved: 10 },
  { key: "fifty-solved", title: "Problem Grinder", description: "Solve 50 problems.", icon: "⚡", solved: 50 },
  { key: "hundred-solved", title: "Century Club", description: "Solve 100 problems.", icon: "💯", solved: 100 },
  { key: "seven-streak", title: "Week Warrior", description: "Maintain a 7-day streak.", icon: "🔥", streak: 7 },
  { key: "thirty-streak", title: "Streak Master", description: "Maintain a 30-day streak.", icon: "🏆", streak: 30 },
  { key: "thousand-xp", title: "XP Hunter", description: "Earn 1,000 XP.", icon: "✨", xp: 1000 },
];

export async function recordActivity(userId) {
  return updateStreak(userId);
}

export async function awardAcceptedSubmission({ userId, problemId, difficulty, submissionId }) {
  const priorAccepted = await Submission.exists({
    userId,
    problemId,
    status: "Accepted",
    _id: { $ne: submissionId },
  });
  if (priorAccepted) return 0;

  const xp = calculateSubmissionXp(difficulty);
  const user = await User.findById(userId);
  if (!user) return 0;

  user.xp = (user.xp || 0) + xp;
  user.level = calculateLevel(user.xp);
  await user.save();
  await refreshBadges(userId);
  return xp;
}

export async function refreshBadges(userId) {
  const [user, solvedCount] = await Promise.all([
    User.findById(userId),
    Submission.countDocuments({ userId, status: "Accepted" }).then(async (count) => {
      const unique = await Submission.distinct("problemId", { userId, status: "Accepted" });
      return Math.max(count ? 1 : 0, unique.length);
    }),
  ]);
  if (!user) return null;

  const earned = new Set((user.badges || []).map((badge) => badge.badgeId));
  const newlyEarned = [];
  for (const badge of BADGES) {
    const qualifies =
      (badge.solved && solvedCount >= badge.solved) ||
      (badge.streak && (user.currentStreak || 0) >= badge.streak) ||
      (badge.xp && (user.xp || 0) >= badge.xp) ||
      (badge.key === "first-solve" && solvedCount >= 1);
    if (qualifies && !earned.has(badge.key)) {
      user.badges.push({ badgeId: badge.key, earnedAt: new Date() });
      newlyEarned.push(badge);
    }
  }
  if (newlyEarned.length) await user.save();
  return newlyEarned;
}

export async function getGamificationSummary(userId) {
  const [user, solvedProblems, submissionCount] = await Promise.all([
    User.findById(userId).lean(),
    Submission.distinct("problemId", { userId, status: "Accepted" }),
    Submission.countDocuments({ userId }),
  ]);
  if (!user) return null;
  return {
    xp: user.xp || 0,
    level: user.level || 1,
    currentStreak: user.currentStreak || 0,
    longestStreak: user.longestStreak || 0,
    solvedCount: solvedProblems.length,
    submissionCount,
    badges: user.badges || [],
    achievements: user.achievements || [],
  };
}
