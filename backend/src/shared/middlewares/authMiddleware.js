import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import User from "../../features/users/user.model.js";
import { errorResponse } from "../utils/apiResponse.js";

function cookie(req, name) {
  const raw = req.headers.cookie || "";
  const found = raw.split(";").map(x => x.trim()).find(x => x.startsWith(`${name}=`));
  return found ? decodeURIComponent(found.slice(name.length + 1)) : null;
}

export async function protect(req, res, next) {
  try {
    const token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : cookie(req, env.accessCookieName);

    if (!token) return errorResponse(res, "Authentication required", 401);

    const decoded = jwt.verify(token, env.accessSecret);
    const user = await User.findById(decoded.sub);

    if (!user || user.status !== "active") {
      return errorResponse(res, "User is not authorized", 401);
    }

    req.user = user;
    req.auth = decoded;
    next();
  } catch {
    return errorResponse(res, "Invalid or expired access token", 401);
  }
}

export async function optionalProtect(req, res, next) {
  try {
    const token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : cookie(req, env.accessCookieName);

    if (!token) return next();

    const decoded = jwt.verify(token, env.accessSecret);
    const user = await User.findById(decoded.sub);
    if (user && user.status === "active") {
      req.user = user;
      req.auth = decoded;
    }
  } catch {
    // Optional authentication must never turn a public read endpoint into a 401.
  }
  next();
}

export function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!req.user) return errorResponse(res, "Authentication required", 401);
    if (!roles.includes(req.user.role)) {
      return errorResponse(res, "Insufficient permissions", 403);
    }
    next();
  };
}
