import * as mongoose from 'mongoose';

export const DebtSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  interestRate: { type: Number, required: false },
  dueDate: { type: String, required: false },
  minimumPayment: { type: Number, required: false },
  paymentDate: { type: String, required: false },
  remainingBalance: { type: Number, required: false },
  paymentsRemaining: { type: Number, required: false },
  initialPaymentTerm: { type: Number, required: false },
  // Add other fields as needed
});

export interface Debt extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  name: string;
  amount: number;
  interestRate?: number;
  dueDate?: Date;
  minimumPayment?: number;
  paymentDate?: Date;
  remainingBalance?: number;
  paymentsRemaining?: number;
  initialPaymentTerm?: number;
  // Add other fields as needed
}
