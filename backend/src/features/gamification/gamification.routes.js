import express from "express";
import { protect } from "../../shared/middlewares/authMiddleware.js";
import { getGamification } from "./gamification.controller.js";

const router = express.Router();
router.use(protect);
router.get("/summary", getGamification);
export default router;
