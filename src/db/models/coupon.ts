import mongoose, { Schema, Document } from "mongoose";

export type CouponType = {
  code: string;
  discountPercentage: number;
  expirationDate?: Date;
  isActive: boolean;
};
export type TCoupon = CouponType & Document;

const couponSchema = new Schema<TCoupon>(
  {
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    expirationDate: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Coupon = mongoose.models.Coupon || mongoose.model<TCoupon>("Coupon", couponSchema);

export default Coupon;
