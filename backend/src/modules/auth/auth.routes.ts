import { Router } from "express";
import { AuthController } from "./auth.controller";
import { jwtMiddleware } from "../../core/middleware/auth.middleware";

const router = Router();
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", jwtMiddleware, AuthController.logout);

export default router;
