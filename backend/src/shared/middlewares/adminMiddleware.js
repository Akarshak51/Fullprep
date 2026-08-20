import {authorizeRoles} from "./authMiddleware.js";export const admin=authorizeRoles("admin","super_admin");export const staff=authorizeRoles("admin","super_admin","moderator");
