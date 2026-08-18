import { createClient } from "redis";
import { env } from "./env.js";

export const redisClient = createClient({
  url: env.redisUrl,

  socket: {
    reconnectStrategy: false,
  },
});

redisClient.on("error", (error) => {
  console.error("Redis error:", error.message);
});

export async function connectRedis() {
  try {
    if (redisClient.isOpen) {
      return true;
    }

    await redisClient.connect();

    console.log("Redis Connected Successfully");
    return true;
  } catch (error) {
    console.warn(
      "Redis unavailable - using memory session fallback:",
      error.message,
    );

    return false;
  }
}

export async function disconnectRedis() {
  if (!redisClient.isOpen) {
    return;
  }

  try {
    await redisClient.quit();
    console.log("Redis disconnected");
  } catch (error) {
    console.error("Redis shutdown error:", error.message);
  }
}
