import mongoose from "mongoose";
import { ApiError } from "../errors/ApiError.js";

export function errorHandler(err, req, res, next) {
  console.error(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`,
    err,
  );

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.details !== null ? { details: err.details } : {}),
    });
  }

  if (err instanceof mongoose.Error.ValidationError) {
    const details = Object.values(err.errors).map((error) => ({
      field: error.path,
      message: error.message,
    }));

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      details,
    });
  }

  if (err?.code === 11000) {
    const fields = Object.keys(err.keyPattern || {});

    return res.status(409).json({
      success: false,
      message: `Duplicate value for: ${fields.join(", ") || "unique field"}`,
    });
  }

  if (err?.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid authentication token",
    });
  }

  if (err?.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Authentication token expired",
    });
  }

  if (err?.message === "CORS origin not allowed") {
    return res.status(403).json({
      success: false,
      message: "CORS origin not allowed",
    });
  }

  if (err?.statusCode) return res.status(err.statusCode).json({ success: false, message: err.message || "Request failed" });

  return res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err?.message || "Internal server error",
  });
}
