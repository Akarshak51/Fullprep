import crypto from "crypto";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import { redisClient } from "../../config/redis.js";

const memory = new Map();

async function put(key, value, ttl) {
  if (redisClient.isReady) await redisClient.set(key, JSON.stringify(value), { EX: ttl });
  else memory.set(key, { value, expiresAt: Date.now() + ttl * 1000 });
}
async function get(key) {
  if (redisClient.isReady) {
    const value = await redisClient.get(key);
    return value ? JSON.parse(value) : null;
  }
  const item = memory.get(key);
  if (!item || item.expiresAt < Date.now()) {
    memory.delete(key);
    return null;
  }
  return item.value;
}
async function remove(key) {
  if (redisClient.isReady) await redisClient.del(key);
  memory.delete(key);
}

export async function issueSession(user) {
  const sid = crypto.randomUUID();
  const accessToken = jwt.sign(
    { sub: user._id.toString(), role: user.role, sid },
    env.accessSecret,
    { expiresIn: "15m" },
  );
  const refreshToken = jwt.sign(
    { sub: user._id.toString(), sid },
    env.refreshSecret,
    { expiresIn: "7d" },
  );
  await put(`session:${sid}`, { userId: user._id.toString() }, 7 * 86400);
  return { accessToken, refreshToken };
}

export async function validateRefresh(token) {
  const decoded = jwt.verify(token, env.refreshSecret);
  const session = await get(`session:${decoded.sid}`);
  if (!session || session.userId !== decoded.sub) throw new Error("Session revoked");
  return decoded;
}

export async function revokeSession(token) {
  try {
    const decoded = jwt.verify(token, env.refreshSecret);
    if (decoded.sid) await remove(`session:${decoded.sid}`);
  } catch {}
}
