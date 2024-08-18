import React from "react";
import BackgroundWrapper from "../BackgroundWrapper";
import { Typography } from "@/components/Typography";
import FeaturedProductCard from "./FeaturedProductCard";
import { ProductType } from "@/db/models/product";

type FeaturedProductProps = {
  products: ProductType[];
};

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ products }) => {
  return (
    <BackgroundWrapper>
      <div className="flex flex-col items-center">
        <Typography variant={"h3"} className="font-bold mb-8 text-start" as={"h2"}>
          Featured Products
        </Typography>
        <FeaturedProductCard products={products} />
      </div>
    </BackgroundWrapper>
  );
};

export default FeaturedProduct;
