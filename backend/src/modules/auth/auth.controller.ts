import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";
import { env } from "../../config/env";

export const AuthController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json({ success: true, user });
    } catch (err) {
      next(err);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, email } = await AuthService.login(req.body);

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: env.COOKIE_MAX_AGE ? parseInt(env.COOKIE_MAX_AGE) : 3600000, // 1 hour
      });

      res.json({ success: true, message: "Login successful", user: { email } });
    } catch (err) {
      next(err);
    }
  },

  async verify(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies?.jwt;
      if (!token) {
        return res
          .status(401)
          .json({ success: false, message: "No token provided" });
      }
      await AuthService.verifyToken(token);
      res.json({ success: true, message: "Token is valid" });
    } catch (err) {
      next(err);
    }
  },

  async logout(_req: Request, res: Response, next: NextFunction) {
    try {
      res.cookie("jwt", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0,
      });

      res.json({ success: true, message: "Logged out successfully" });
    } catch (err) {
      next(err);
    }
  },
};
