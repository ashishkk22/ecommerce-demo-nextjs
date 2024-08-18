import mongoose, { Schema, model, Document } from "mongoose";
import { ProductType } from "./product";

export type CartItem = {
  productId: string;
  quantity: number;
} & ProductType;

export type CartType = {
  userId: Schema.Types.ObjectId;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  couponCode?: string;
  couponDiscount?: number;
  cartTotalItems?: number;
};

type Cart = CartType & Document;

const cartSchema = new Schema<Cart>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    subtotal: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    couponCode: { type: String },
    couponDiscount: { type: Number, default: 0 },
    cartTotalItems: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const CartModel = mongoose.models.Cart || model<Cart>("Cart", cartSchema);

export default CartModel;
