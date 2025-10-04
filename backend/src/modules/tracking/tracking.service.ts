import { Tracking } from "./tracking.model";

export const TrackingService = {
  async register(data: { component: string; variant: string; action: string }) {
    const rec = await Tracking.create(data);
    return rec;
  },

  async stats() {
    const total = await Tracking.countDocuments();
    const byComponent = await Tracking.aggregate([
      { $group: { _id: "$component", count: { $sum: 1 } } },
    ]);
    return { total, byComponent };
  },

  async listAll() {
    return Tracking.find().sort({ timestamp: -1 }).lean();
  },
};
