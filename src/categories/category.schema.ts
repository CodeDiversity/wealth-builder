import * as mongoose from 'mongoose';
import { ObjectId } from 'typeorm';

export const CategorySchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  budgetLimit: { type: Number, required: true },
  // ... any other fields you need
});

export interface Category extends mongoose.Document {
  userId: ObjectId;
  name: string;
  budgetLimit: number;
  description?: string;
  // ... any other fields you need
}
