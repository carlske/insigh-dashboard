import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { AppError } from "../../core/errors/AppError";
import { User } from "./auth.model";

export const AuthService = {
  async register(data: { email: string; password: string }) {
    const exists = await User.findOne({ email: data.email });
    if (exists) throw new AppError("User already exists", 400);

    const hashed = await bcrypt.hash(data.password, 10);
    const user = await User.create({ email: data.email, password: hashed });

    return { email: user.email };
  },

  async login(data: { email: string; password: string }) {
    const user = await User.findOne({ email: data.email });
    if (!user) throw new AppError("Invalid credentials", 401);

    const match = await bcrypt.compare(data.password, user.password);
    if (!match) throw new AppError("Invalid credentials", 401);

    const token = jwt.sign({ email: user.email }, env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token };
  },

  async logout(token: string) {
    // En JWT stateless, el "logout" es simbólico.
    // Aquí podrías guardar el token en una "blacklist" si quisieras invalidarlo.
    console.log(
      `Token ${token} marked as logged out (client should discard it).`
    );
    return { message: "User logged out (token invalidated client-side)" };
  },
};
