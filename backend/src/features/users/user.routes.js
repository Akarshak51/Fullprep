import express from "express";
import { protect } from "../../shared/middlewares/authMiddleware.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { getMe, profile, updateMe } from "./user.controller.js";

const router = express.Router();

router.get("/me", protect, asyncHandler(getMe));

router.patch("/me", protect, asyncHandler(updateMe));

router.get("/:username", protect, asyncHandler(profile));

export default router;
