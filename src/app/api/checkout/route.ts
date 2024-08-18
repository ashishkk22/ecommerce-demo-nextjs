import dbConnect from "@/db/config/dbConnect";
import CartModel from "@/db/models/cart";
import OrderModel from "@/db/models/order";

dbConnect();

export async function POST(req: Request) {
  try {
    const { userId, paymentStatus } = await req.json();

    const cart = await CartModel.findOne({ userId }).populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return new Response(JSON.stringify({ error: "Cart is empty" }), { status: 400 });
    }

    const order = new OrderModel({
      userId: cart.userId,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: cart.items.map((item: any) => ({
        productId: item.productId._id,
        name: item.productId.name,
        price: item.productId.price,
        quantity: item.quantity,
        image: item.productId.image,
        description: item.productId.description,
      })),
      subtotal: cart.subtotal,
      discount: cart.discount,
      total: cart.total,
      couponCode: cart.couponCode,
      couponDiscount: cart.couponDiscount,
      paymentStatus: paymentStatus || "Pending",
    });

    await order.save();

    cart.items = [];
    cart.subtotal = 0;
    cart.discount = 0;
    cart.total = 0;
    cart.couponCode = undefined;
    cart.couponDiscount = 0;
    cart.cartTotalItems = 0;
    await cart.save();

    return new Response(JSON.stringify({ cart }), { status: 201 });
  } catch {
    return new Response(JSON.stringify({ error: "Unable to checkout! Something went wrong" }), { status: 500 });
  }
}
