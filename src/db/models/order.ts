import mongoose, { Schema, model, Document } from "mongoose";

type OrderItem = {
  productId: Schema.Types.ObjectId;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
};

type OrderType = {
  userId: Schema.Types.ObjectId;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  total: number;
  couponCode?: string;
  couponDiscount?: number;
  paymentStatus: string;
  orderStatus: string;
};

type Order = OrderType & Document;

const orderSchema = new Schema<Order>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    subtotal: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    couponCode: { type: String },
    couponDiscount: { type: Number, default: 0 },
    paymentStatus: { type: String, enum: ["Pending", "Paid", "Failed"], default: "Pending" },
    orderStatus: { type: String, enum: ["Processing", "Shipped", "Delivered", "Cancelled"], default: "Processing" },
  },
  { timestamps: true },
);

const OrderModel = mongoose.models.Order || model<Order>("Order", orderSchema);

export default OrderModel;
