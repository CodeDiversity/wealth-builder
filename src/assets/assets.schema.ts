import * as mongoose from 'mongoose';

export const AssetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  value: { type: Number, required: true },
  type: { type: String, required: true }, // e.g., 'Real Estate', 'Stock', 'Vehicle'
  acquisitionDate: { type: Date, required: false },
  acquisitionPrice: { type: Number, required: false },
  description: { type: String, required: false }, // Additional details about the asset
});

export interface Asset extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  name: string;
  value: number;
  type: string;
  acquisitionDate?: Date;
  acquisitionPrice?: number;
  description?: string;
}
