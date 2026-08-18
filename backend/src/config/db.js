import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDB() {
  if (!env.mongoUri) {
    throw new Error("MONGO_URI is not configured");
  }

  try {
    await mongoose.connect(env.mongoUri);

    console.log("MongoDB Connected Successfully");

    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
}

export async function disconnectDB() {
  await mongoose.disconnect();
  console.log("MongoDB disconnected");
}
