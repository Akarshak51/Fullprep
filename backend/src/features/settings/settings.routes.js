import express from "express";
import { protect } from "../../shared/middlewares/authMiddleware.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { getSettings, updateSettings, deleteAccount } from "./settings.controller.js";

const router = express.Router();
router.use(protect);
router.get("/", asyncHandler(getSettings));
router.patch("/", asyncHandler(updateSettings));
router.delete("/", asyncHandler(deleteAccount));

export default router;
