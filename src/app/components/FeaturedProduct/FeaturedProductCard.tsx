import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";
import { ProductType } from "@/db/models/product";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import React, { FC } from "react";
import FeaturedProductAction from "./FeaturedProductAction";

type FeaturedProductCard = {
  products: ProductType[];
};

const FeaturedProductCard: FC<FeaturedProductCard> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products?.map((product, idx) => (
        <Card className="p-2" key={idx}>
          <Card.Image>
            <Image width={"60"} height={"60"} src={product.image} alt={product.name} className="w-full h-48" />
          </Card.Image>
          <Card.Header>
            <Typography variant={"h4"}>{product.name}</Typography>
          </Card.Header>
          <Card.Body>
            <p className="text-zinc-400 text-sm h-8">{product.description}</p>
          </Card.Body>
          <Card.Footer className="flex justify-between items-center mb-2">
            <Typography className="text-textSecondary px-1 py-0 flex-1">{formatPrice(product?.price)}</Typography>
            <div>
              <FeaturedProductAction productId={product._id} />
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedProductCard;
