import { Button } from "@/components/Button";
import { orderCheckout, OrderCheckoutBody } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React from "react";
import { queryClient } from "../providers/Providers";
import toast from "react-hot-toast";

const CartCheckout = () => {
  const { data: userInfo } = useSession();

  const { mutate } = useMutation({
    mutationFn: (data: OrderCheckoutBody) => orderCheckout(data),
    onSuccess: (data) => {
      queryClient.setQueriesData({ queryKey: ["getCart"] }, () => data);
      toast.success("Order placed successfully!");
    },
  });

  const checkoutHandler = () => {
    mutate({
      userId: userInfo?.user?.id ?? "",
    });
  };
  return (
    <div className="flex flex-row-reverse">
      <div>
        <Button variant={"solid"} size={"md"} className="mt-6" onClick={checkoutHandler}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartCheckout;
