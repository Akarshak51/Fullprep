import express from "express";
import { runCode, submitCode, submissionHistory, submissionDetails } from "./submission.controller.js";
import { protect } from "../../shared/middlewares/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/run", runCode);
router.post("/submit", submitCode);
router.get("/history", submissionHistory);
router.get("/:id", submissionDetails);

export default router;
