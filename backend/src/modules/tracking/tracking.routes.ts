import { Router } from "express";
import { TrackingController } from "./tracking.controller";
import { jwtMiddleware } from "../../core/middleware/auth.middleware";

const router = Router();
router.post("/track", TrackingController.track);
router.get("/stats", TrackingController.stats);
router.get("/export", jwtMiddleware, TrackingController.exportData);

export default router;
