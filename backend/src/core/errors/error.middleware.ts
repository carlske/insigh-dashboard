import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

export const errorHandler = (err: unknown, req: Request, res: Response, _next: NextFunction) => {
  const isApp = err instanceof AppError;
  const status = isApp ? err.statusCode : 500;
  const message = isApp ? err.message : 'Internal Server Error';
  console.error(err);
  res.status(status).json({ success: false, message });
};
