import User from "../users/user.model.js";
import { ApiError } from "../../shared/errors/ApiError.js";
import { successResponse } from "../../shared/utils/apiResponse.js";
import { toPublicUser } from "../../shared/utils/userProfile.js";
import { hashPassword, verifyPassword, uniqueUsername } from "./auth.service.js";
import { issueSession, validateRefresh, revokeSession } from "./session.service.js";
import { verifyGoogleToken } from "./googleOAuth.service.js";
import { env } from "../../config/env.js";

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: env.cookieSecure,
  path: "/",
};

function setCookies(res, tokens) {
  res.cookie(env.accessCookieName, tokens.accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
  res.cookie(env.refreshCookieName, tokens.refreshToken, { ...cookieOptions, maxAge: 7 * 86400 * 1000 });
}

function clearCookies(res) {
  res.clearCookie(env.accessCookieName, cookieOptions);
  res.clearCookie(env.refreshCookieName, cookieOptions);
}

async function finish(res, user, message) {
  const tokens = await issueSession(user);
  setCookies(res, tokens);
  return successResponse(res, { user: toPublicUser(user) }, message);
}

export async function signup(req, res) {
  const { name, username, email, password } = req.body || {};
  if (!name || !email || !password) throw new ApiError(400, "name, email and password are required");
  if (password.length < 8) throw new ApiError(400, "Password must contain at least 8 characters");

  const normalizedEmail = email.toLowerCase();
  if (await User.exists({ email: normalizedEmail })) throw new ApiError(409, "Email already registered");

  const finalUsername = username?.trim().toLowerCase() || await uniqueUsername(name, email);
  if (await User.exists({ username: finalUsername })) throw new ApiError(409, "Username already taken");

  const user = await User.create({
    name,
    username: finalUsername,
    email: normalizedEmail,
    passwordHash: hashPassword(password),
  });

  return finish(res, user, "Account created");
}

export async function login(req, res) {
  const { email, password } = req.body || {};
  const user = await User.findOne({ email: email?.toLowerCase() }).select("+passwordHash");

  if (!user || !verifyPassword(password || "", user.passwordHash)) {
    throw new ApiError(401, "Invalid email or password");
  }
  if (user.status !== "active") throw new ApiError(403, "Account is suspended");

  return finish(res, user, "Login successful");
}

export async function googleLogin(req, res) {
  const { credential } = req.body || {};
  if (!credential) throw new ApiError(400, "Google credential is required");

  const payload = await verifyGoogleToken(credential);
  if (!payload.email) throw new ApiError(400, "Google account has no email");

  const email = payload.email.toLowerCase();
  let user = await User.findOne({ $or: [{ googleId: payload.sub }, { email }] });

  if (!user) {
    user = await User.create({
      googleId: payload.sub,
      email,
      name: payload.name || "Student",
      username: await uniqueUsername(payload.name, email),
      avatar: payload.picture || "",
    });
  } else if (!user.googleId) {
    user.googleId = payload.sub;
    await user.save();
  }

  return finish(res, user, "Google login successful");
}

export async function getMe(req, res) {
  return successResponse(res, { user: toPublicUser(req.user) });
}

export async function refresh(req, res) {
  const token = req.cookies?.[env.refreshCookieName] || req.body?.refreshToken;
  if (!token) throw new ApiError(401, "Refresh token required");

  const decoded = await validateRefresh(token);
  const user = await User.findById(decoded.sub);

  if (!user || user.status !== "active") throw new ApiError(401, "Session invalid");

  await revokeSession(token);
  return finish(res, user, "Session refreshed");
}

export async function logout(req, res) {
  await revokeSession(req.cookies?.[env.refreshCookieName]);
  clearCookies(res);
  return successResponse(res, null, "Logged out successfully");
}
