import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";

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
      const data = await AuthService.login(req.body);
      res.json({ success: true, ...data });
    } catch (err) {
      next(err);
    }
  },

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const auth = req.headers.authorization;
      const token = auth?.split(" ")[1];
      const result = await AuthService.logout(token || "");
      res.json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  },
};
