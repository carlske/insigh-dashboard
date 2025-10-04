import { Request, Response, NextFunction } from "express";
import { TrackingService } from "./tracking.service";

export const TrackingController = {
  async track(req: Request, res: Response, next: NextFunction) {
    try {
      const { component, variant, action } = req.body;
      const rec = await TrackingService.register({
        component,
        variant,
        action,
      });
      res.status(201).json({ success: true, rec });
    } catch (err) {
      next(err);
    }
  },

  async stats(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await TrackingService.stats();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  async exportData(req: Request, res: Response, next: NextFunction) {
    try {
      const format = (req.query.format as string) || "csv";
      const rows = await TrackingService.listAll();
      if (format === "json") {
        return res.json(rows);
      }
      const stringify = (await import("csv-stringify")).stringify;
      const columns = ["component", "variant", "action", "timestamp"];
      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="tracking.csv"'
      );
      const data = rows.map((r) => [
        r.component,
        r.variant,
        r.action,
        r.timestamp.toISOString(),
      ]);
      stringify(data, { header: true, columns }, (err, output) => {
        if (err) return next(err);
        res.send(output);
      });
    } catch (err) {
      next(err);
    }
  },
};
