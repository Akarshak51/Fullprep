import crypto from "crypto";
import User from "../users/user.model.js";
import { baseUsername } from "../../shared/utils/usernameGenerator.js";

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password, stored) {
  if (!stored) return false;
  const [salt, expected] = stored.split(":");
  const actual = crypto.scryptSync(password, salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(actual, "hex"), Buffer.from(expected, "hex"));
}

export async function uniqueUsername(name, email) {
  const base = baseUsername(name, email);
  let username = base;
  let n = 1;
  while (await User.exists({ username })) username = `${base}_${n++}`;
  return username;
}
