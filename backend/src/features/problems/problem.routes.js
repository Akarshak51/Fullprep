import express from "express";
import { getProblems, getTags, getProblemBySlugController } from "./problem.controller.js";
import { optionalProtect } from "../../shared/middlewares/authMiddleware.js";

const router = express.Router();

router.get("/tags", optionalProtect, getTags);
router.get("/", optionalProtect, getProblems);
router.get("/:slug", optionalProtect, getProblemBySlugController);

export default router;
