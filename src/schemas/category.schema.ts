import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  budgetLimit: { type: Number, required: true },
  // ... any other fields you need
});

export interface Category extends mongoose.Document {
  userId: string;
  name: string;
  budgetLimit: number;
  // ... any other fields you need
}
