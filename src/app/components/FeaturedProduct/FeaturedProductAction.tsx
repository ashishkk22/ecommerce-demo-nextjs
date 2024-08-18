"use client";
import { queryClient } from "@/app/providers/Providers";
import { Button } from "@/components/Button";
import { addToCart, AddToCartBody } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

type FeaturedProductAction = {
  productId: string;
};

const FeaturedProductAction: FC<FeaturedProductAction> = ({ productId }) => {
  const { data } = useSession();

  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (data: AddToCartBody) => addToCart(data),
    onSuccess: (data) => {
      queryClient.setQueriesData({ queryKey: ["getCart"] }, () => {
        return data;
      });
    },
  });

  const addToCartHandler = () => {
    const userId = data?.user?.id;
    if (!userId) {
      toast.error("Please Login to continue!");
      router.push("/login");
      return;
    }
    mutate({
      productId: productId,
      quantity: 1,
      userId,
    });
    toast.success("Added to cart");
  };
  return (
    <Button
      className="bg-primary text-white py-2 px-4 rounded flex items-center text-sm"
      size={"md"}
      onClick={addToCartHandler}
    >
      <FaShoppingCart className="mr-2" />
      Add to Cart
    </Button>
  );
};

export default FeaturedProductAction;
