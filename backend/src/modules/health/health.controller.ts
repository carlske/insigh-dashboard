import { Request, Response } from 'express';
export const HealthController = {
  ping(req: Request, res: Response) {
    res.json({ uptime: process.uptime(), message: 'OK' });
  }
};
