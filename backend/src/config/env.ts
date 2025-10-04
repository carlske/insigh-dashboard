import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT ?? "4000",
  MONGO_URI: process.env.MONGO_URI ?? "",
  JWT_SECRET: process.env.JWT_SECRET ?? "wiwiwi",
  COOKIE_MAX_AGE: process.env.COOKIE_MAX_AGE ?? "3600000",
  CORS_ORIGINS: process.env.CORS_ORIGINS ?? "",
} as const;
