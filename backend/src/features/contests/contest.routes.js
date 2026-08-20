import express from "express"; import {optionalProtect,protect,authorizeRoles} from "../../shared/middlewares/authMiddleware.js"; import * as c from "./contest.controller.js";
const router=express.Router(); router.get("/",optionalProtect,c.list);router.get("/:id",optionalProtect,c.detail);router.get("/:id/leaderboard",optionalProtect,c.board);router.post("/:id/register",protect,c.register);
export const adminContestRouter=express.Router();adminContestRouter.use(protect,authorizeRoles("admin","moderator"));adminContestRouter.get("/",c.adminList);adminContestRouter.get("/:id",c.adminDetail);adminContestRouter.post("/",c.adminSave);adminContestRouter.put("/:id",c.adminSave);adminContestRouter.delete("/:id",c.adminDelete);
export default router;
