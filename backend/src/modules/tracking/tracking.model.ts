import { Schema, model, Document } from "mongoose";

export interface ITracking extends Document {
  component: string;
  variant: string;
  action: string;
  timestamp: Date;
}

const TrackingSchema = new Schema<ITracking>({
  component: { type: String, required: true },
  variant: { type: String, required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Tracking = model<ITracking>("Tracking", TrackingSchema);
