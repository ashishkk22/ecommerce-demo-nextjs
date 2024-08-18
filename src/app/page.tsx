import { ProductType } from "@/db/models/product";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";

const getProducts = async () => {
  try {
    const { products } = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + "product", { cache: "no-store" }).then((res) =>
      res.json(),
    );

    console.log("hey this is calling");
    return products as ProductType[];
  } catch {
    return [];
  }
};

export default async function Home() {
  const products = await getProducts();

  return <FeaturedProduct products={products ?? []} />;
}
