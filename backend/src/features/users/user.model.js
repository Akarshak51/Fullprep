import mongoose from "mongoose";

const privacy = new mongoose.Schema({
  publicProfile: { type: Boolean, default: true },
  showOnLeaderboard: { type: Boolean, default: true },
  showSolvedProblems: { type: Boolean, default: true },
}, { _id: false });

const notifications = new mongoose.Schema({
  contestReminders: { type: Boolean, default: true },
  achievementAlerts: { type: Boolean, default: true },
  productUpdates: { type: Boolean, default: false },
  weeklyDigest: { type: Boolean, default: true },
}, { _id: false });

const settings = new mongoose.Schema({
  theme: { type: String, enum: ["light", "dark"], default: "dark" },
  privacy: { type: privacy, default: () => ({}) },
  notifications: { type: notifications, default: () => ({}) },
}, { _id: false });

const schema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true },
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true, index: true, lowercase: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  passwordHash: { type: String, select: false },
  avatar: String,
  bio: { type: String, default: "" },
  role: { type: String, enum: ["student", "moderator", "admin", "super_admin"], default: "student" },
  status: { type: String, enum: ["active", "suspended"], default: "active" },
  xp: { type: Number, default: 0, index: true },
  level: { type: Number, default: 1 },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  lastActivityDate: Date,
  rating: { type: Number, default: 1200 },
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
  badges: [{ badgeId: String, earnedAt: { type: Date, default: Date.now } }],
  achievements: [{ key: String, title: String, earnedAt: { type: Date, default: Date.now } }],
  settings: { type: settings, default: () => ({}) },
  aiUsage: { day: { type: String, default: "" }, count: { type: Number, default: 0 } },
}, { timestamps: true });

export default mongoose.model("User", schema);
