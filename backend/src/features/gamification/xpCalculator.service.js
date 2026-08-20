import { XP_RULES, XP_PER_LEVEL } from "../../shared/constants/xpRules.js";

export function calculateSubmissionXp(difficulty) {
  return XP_RULES[difficulty] || 0;
}

export function calculateLevel(xp) {
  return Math.max(1, Math.floor(Number(xp || 0) / XP_PER_LEVEL) + 1);
}
