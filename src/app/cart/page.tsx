"use client";

import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/utils";
import { useSession } from "next-auth/react";
import EmptyCart from "../components/EmptyCart";
import CentralLoader from "../components/CentralLoader";
import CartItems from "./CartItems";
import { formatPrice } from "@/utils/formatPrice";
import CardCoupon from "./CartCoupon";
import CartCheckout from "./CartCheckout";

const CartPage = () => {
  const { data: userInfo } = useSession();

  const { data, isLoading } = useQuery({
    queryFn: () => getCart(userInfo?.user?.id ?? ""),
    queryKey: ["getCart"],
  });

  if (isLoading) return <CentralLoader />;

  if (!data?.cart?.cartTotalItems) return <EmptyCart />;

  return (
    <BackgroundWrapper>
      <div className="p-4 max-w-4xl mx-auto">
        <Typography variant="h3" className="text-xl mt-3 mb-4">
          Shopping Cart
        </Typography>

        <Card className="w-full" variant={"default"}>
          {data?.cart?.items?.map((cartItem) => <CartItems product={cartItem} key={cartItem._id} />)}
        </Card>

        <CardCoupon />

        <Typography variant="h3" className="text-xl mt-3">
          Payment Summary
        </Typography>

        <Card className="w-full mt-5" variant={"default"}>
          <div className="flex justify-between p-3">
            <Typography className="p-0" variant={"h6"} weight={"normal"}>
              Sub Total
            </Typography>
            <Typography className="p-0" variant={"h6"}>
              {formatPrice(data?.cart?.subtotal)}
            </Typography>
          </div>

          <hr />

          <div className="flex justify-between p-3">
            <Typography className="p-0" variant={"h6"} weight={"normal"}>
              Discount
            </Typography>
            <Typography className="p-0" variant={"h6"}>
              {formatPrice(data?.cart?.discount)}
            </Typography>
          </div>

          <hr />

          <div className="flex justify-between p-3">
            <Typography className="p-0" variant={"h6"} weight={"bold"}>
              Order Total
            </Typography>
            <Typography className="p-0" variant={"h6"} weight={"bold"}>
              {formatPrice(data?.cart?.total)}
            </Typography>
          </div>
        </Card>

        <CartCheckout />
      </div>
    </BackgroundWrapper>
  );
};

export default CartPage;
