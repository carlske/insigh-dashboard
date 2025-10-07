import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { AppError } from "../../core/errors/AppError";
import { User } from "./auth.model";

export const AuthService = {
  async register(data: { email: string; password: string }) {
    const exists = await User.findOne({ email: data.email });
    if (exists) throw new AppError("User already exists", 400);

    const hashed = await bcrypt.hash(data.password, 10);
    const newUser = await User.create({ email: data.email, password: hashed });
    return { email: newUser.email };
  },

  async login(data: { email: string; password: string }) {
    const user = await User.findOne({ email: data.email });
    if (!user) throw new AppError("Invalid credentials", 401);

    const match = await bcrypt.compare(data.password, user.password);
    if (!match) throw new AppError("Invalid credentials", 401);

    const token = jwt.sign({ email: user.email }, env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token, email: user.email };
  },

  async verifyToken(token: string) {
    try {
      return jwt.verify(token, env.JWT_SECRET);
    } catch {
      throw new AppError("Invalid or expired token", 401);
    }
  },
};
