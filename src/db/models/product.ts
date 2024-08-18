import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  available?: boolean;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
