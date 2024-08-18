import dbConnect from "@/db/config/dbConnect";
import CartModel from "@/db/models/cart";
import { Product } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");

    if (typeof userId !== "string") {
      return NextResponse.json({ message: "Something went wrong", ok: false }, { status: 500 });
    }

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({
        userId,
        items: [],
        subtotal: 0,
        discount: 0,
        total: 0,
      });

      await cart.save();
    }
    return new Response(JSON.stringify({ cart }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ message: "Something went wrong", ok: false }, { status: 500 });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateCartTotals = async (cart: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productDetails = await fetchProductDetails(cart.items.map((item: any) => item.productId));
  let subtotal = 0;

  let cartTotalItems = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cart.items.forEach((item: any) => {
    cartTotalItems += item?.quantity;
    const product = productDetails.find((p) => p._id.toString() === item.productId.toString());
    if (product) {
      subtotal += product.price * item.quantity;
    }
  });
  const discountAmount = cart.couponDiscount ? (subtotal * cart.couponDiscount) / 100 : 0;
  cart.subtotal = subtotal;
  cart.discount = discountAmount;
  cart.total = subtotal - cart.discount;
  cart.cartTotalItems = cartTotalItems;
  await cart.save();
};

const fetchProductDetails = async (productIds: string[]) => {
  return Product.find({ _id: { $in: productIds } }).exec();
};

export async function POST(req: Request) {
  try {
    const { userId, productId, quantity } = await req.json();

    if (!userId || !productId || typeof quantity !== "number") {
      return NextResponse.json({ message: "Missing required fields", ok: false }, { status: 400 });
    }

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({
        userId,
        items: [],
        subtotal: 0,
        discount: 0,
        total: 0,
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const existingItemIndex = cart.items.findIndex((item: any) => item.productId.toString() === productId);

    if (existingItemIndex > -1) {
      const existingItem = cart.items[existingItemIndex];
      const newQuantity = existingItem.quantity + quantity;

      if (newQuantity <= 0) {
        cart.items.splice(existingItemIndex, 1); // Remove item if quantity is 0 or less
      } else {
        existingItem.quantity = newQuantity;
      }
    } else if (quantity > 0) {
      cart.items.push({
        productId: product._id,
        quantity,
        price: product.price,
        image: product.image,
        name: product.name,
        description: product.description,
      });
    }

    // Remove items with quantity 0
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cart.items = cart.items.filter((item: any) => item.quantity > 0);

    await updateCartTotals(cart);
    await cart.save();
    return new Response(JSON.stringify({ cart }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ message: "Something went wrong", ok: false }, { status: 500 });
  }
}
