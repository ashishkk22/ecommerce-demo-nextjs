import dbConnect from "@/db/config/dbConnect";
import CartModel from "@/db/models/cart";
import Coupon from "@/db/models/coupon";
import { NextResponse } from "next/server";

dbConnect();

export async function GET() {
  const now = new Date();
  const coupons = await Coupon.find({
    isActive: true,
    $or: [{ expirationDate: { $gte: now } }, { expirationDate: { $exists: false } }],
  });

  return new Response(JSON.stringify({ coupons: coupons }), {
    status: 200,
  });
}

export async function POST(req: Request) {
  try {
    const { userId, couponCode } = await req.json();

    const cart = await CartModel.findOne({ userId });
    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const coupon = await Coupon.findOne({
      code: couponCode,
      isActive: true,
    });

    if (!coupon) {
      return NextResponse.json({ error: "Invalid or expired coupon" }, { status: 400 });
    }

    const discount = (cart.subtotal * coupon.discountPercentage) / 100;
    cart.couponCode = couponCode;
    cart.couponDiscount = coupon.discountPercentage;
    cart.discount = discount;
    cart.total = cart.subtotal - discount;

    await cart.save();

    return NextResponse.json(
      {
        message: "Coupon applied successfully",
        cart,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error applying coupon:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
