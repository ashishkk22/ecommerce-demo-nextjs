import { ProductType } from "@/db/models/product";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";

const getProducts = async () => {
  try {
    const { products } = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + "product").then((res) => res.json());
    return products as ProductType[];
  } catch {
    return [];
  }
};

export default async function Home() {
  const products = await getProducts();

  return <FeaturedProduct products={products ?? []} />;
}
