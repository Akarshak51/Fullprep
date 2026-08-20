import mongoose from "mongoose";

const badgeSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    icon: { type: String, default: "🏅" },
    xpThreshold: { type: Number, default: 0 },
    solvedThreshold: { type: Number, default: 0 },
    streakThreshold: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("Badge", badgeSchema);
