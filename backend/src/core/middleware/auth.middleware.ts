import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env';
import { AppError } from '../errors/AppError';

export interface AuthRequest extends Request {
  user?: { email: string };
}

export const jwtMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;
  if (!auth) return next(new AppError('Missing authorization header', 401));
  const parts = auth.split(' ');
  if (parts.length !== 2) return next(new AppError('Invalid authorization header', 401));
  const token = parts[1];
  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as { email: string };
    req.user = { email: payload.email };
    next();
  } catch (err) {
    next(new AppError('Invalid token', 401));
  }
};
