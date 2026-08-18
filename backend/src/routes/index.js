import express from "express";
import authRoutes from "../features/auth/auth.routes.js";
import userRoutes from "../features/users/user.routes.js";
import settingsRoutes from "../features/settings/settings.routes.js";
import problemRoutes from "../features/problems/problem.routes.js";
import submissionRoutes from "../features/submissions/submission.routes.js";
import aiRoutes from "../features/ai/ai.routes.js";
import adminRoutes from "./adminRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/settings", settingsRoutes);
router.use("/problems", problemRoutes);
router.use("/submissions", submissionRoutes);
router.use("/ai", aiRoutes);
router.use("/admin", adminRoutes);

router.get("/health", (_, res) =>
  res.json({ success: true, data: { status: "ok" } })
);

export default router;
