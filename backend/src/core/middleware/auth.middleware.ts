import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { AppError } from "../errors/AppError";

export interface AuthRequest extends Request {
  user?: { email: string };
}

export const jwtMiddleware = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.jwt;
  console.log("JWT Middleware - Token:", req); // Debugging line
  if (!token) return next(new AppError("Not authenticated", 401));

  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as { email: string };
    req.user = { email: payload.email };
    next();
  } catch {
    next(new AppError("Invalid or expired token", 401));
  }
};
