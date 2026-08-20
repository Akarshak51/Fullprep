import express from "express";
import {protect,optionalProtect,authorizeRoles} from "../../shared/middlewares/authMiddleware.js";
import * as c from "./learningPath.controller.js";
const router=express.Router();
router.get("/",optionalProtect,c.list); router.get("/:slug",optionalProtect,c.detail); router.patch("/:id/progress",protect,c.progress);
export const adminLearningPathRouter=express.Router();
adminLearningPathRouter.use(protect,authorizeRoles("admin","moderator"));
adminLearningPathRouter.get("/",c.adminList); adminLearningPathRouter.get("/:id",c.adminDetail); adminLearningPathRouter.post("/",c.adminSave); adminLearningPathRouter.put("/:id",c.adminSave); adminLearningPathRouter.delete("/:id",c.adminDelete);
export default router;
