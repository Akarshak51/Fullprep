import express from "express";
import { signup, login, googleLogin, getMe, refresh, logout } from "./auth.controller.js";
import { protect } from "../../shared/middlewares/authMiddleware.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";

const router = express.Router();

router.post("/signup", asyncHandler(signup));
router.post("/login", asyncHandler(login));
router.post("/google", asyncHandler(googleLogin));
router.get("/me", protect, asyncHandler(getMe));
router.post("/refresh", asyncHandler(refresh));
router.post("/logout", asyncHandler(logout));

export default router;
