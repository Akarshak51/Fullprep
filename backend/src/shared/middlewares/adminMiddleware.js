import { authorizeRoles } from "./authMiddleware.js";
export const admin = authorizeRoles("admin");
export const staff = authorizeRoles("admin", "moderator");
