import dotenv from "dotenv";

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",

  port: Number(process.env.PORT || 5000),

  mongoUri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/fullprep",

  redisUrl: process.env.REDIS_URL || "redis://127.0.0.1:6379",

  accessSecret:
    process.env.ACCESS_SECRET ||
    process.env.JWT_SECRET ||
    "development-access-secret-change-me",

  refreshSecret:
    process.env.REFRESH_SECRET ||
    process.env.SESSION_SECRET ||
    "development-refresh-secret-change-me",

  googleClientId: process.env.GOOGLE_CLIENT_ID || "",

  geminiApiKey: process.env.GEMINI_API_KEY || "",

  judge0Url: (process.env.JUDGE0_URL || "https://judge0-ce.p.rapidapi.com").replace(/\/$/, ""),
  judge0ApiKey: process.env.JUDGE0_API_KEY || "",
  judge0ApiHost: process.env.JUDGE0_API_HOST || "judge0-ce.p.rapidapi.com",
  judge0TimeoutMs: Number(process.env.JUDGE0_TIMEOUT_MS || 15000),
  judge0PollIntervalMs: Number(process.env.JUDGE0_POLL_INTERVAL_MS || 1000),
  judge0MaxPolls: Number(process.env.JUDGE0_MAX_POLLS || 60),

  accessCookieName: process.env.ACCESS_COOKIE_NAME || "fp_access",

  refreshCookieName: process.env.REFRESH_COOKIE_NAME || "fp_refresh",

  cookieSecure: process.env.NODE_ENV === "production",

  allowedOrigins:
    process.env.ALLOWED_ORIGINS ||
    process.env.FRONTEND_URL ||
    "http://localhost:5173",
};
