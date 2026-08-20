import { getGamificationSummary } from "./gamification.service.js";

export async function getGamification(req, res, next) {
  try {
    const data = await getGamificationSummary(req.user._id);
    return res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
}
