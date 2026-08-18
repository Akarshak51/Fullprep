import { successResponse } from "../../shared/utils/apiResponse.js";

export async function getSettings(req, res) {
  return successResponse(res, req.user.settings);
}

export async function updateSettings(req, res) {
  const { theme, privacy, notifications } = req.body || {};

  if (theme) req.user.settings.theme = theme;
  if (privacy) Object.assign(req.user.settings.privacy, privacy);
  if (notifications) Object.assign(req.user.settings.notifications, notifications);

  await req.user.save();
  return successResponse(res, req.user.settings, "Settings updated");
}

export async function deleteAccount(req, res) {
  req.user.status = "suspended";
  await req.user.save();
  return successResponse(res, null, "Account deactivated");
}
