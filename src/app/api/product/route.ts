import dbConnect from "@/db/config/dbConnect";
import { Product } from "@/db/models/product";

dbConnect();

export async function GET() {
  const product = await Product.find({});

  return new Response(JSON.stringify({ products: product }), {
    status: 200,
  });
}
