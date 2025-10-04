import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./config/db";
import authRoutes from "./modules/auth/auth.routes";
import trackingRoutes from "./modules/tracking/tracking.routes";
import healthRoutes from "./modules/health/health.routes";
import { errorHandler } from "./core/errors/error.middleware";
import { swaggerSpec } from "./config/swagger";
import { env } from "process";

export const createApp = async () => {
  await connectDB();
  const app = express();

  app.use(
    cors({
      origin: env.CORS_ORIGINS ? env.CORS_ORIGINS.split(",") : "*",
      credentials: true,
    })
  );

  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan("dev"));

  app.use("/api/auth", authRoutes);
  app.use("/api/components", trackingRoutes);
  app.use("/", healthRoutes);

  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use(errorHandler);
  return app;
};
