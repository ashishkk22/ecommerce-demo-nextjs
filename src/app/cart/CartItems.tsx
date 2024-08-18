import { queryClient } from "@/app/providers/Providers";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { CartItem } from "@/db/models/cart";
import { addToCart, AddToCartBody } from "@/utils";
import { formatPrice } from "@/utils/formatPrice";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

type CartItemsProps = {
  product: CartItem;
};

enum QUANTITY_CHANGE {
  INCREASE = "increase",
  DECREASE = "decrease",
}

const CartItems: FC<CartItemsProps> = ({ product }) => {
  const { data } = useSession();

  const { mutate } = useMutation({
    mutationFn: (data: AddToCartBody) => addToCart(data),
    onSuccess: (data) => {
      queryClient.setQueriesData({ queryKey: ["getCart"] }, () => {
        return data;
      });
    },
  });

  const quantityHandler = (productId: string, type: QUANTITY_CHANGE) => {
    const userId = data?.user?.id;
    if (!userId || !productId) {
      toast.error("Please Login to continue!");
      return;
    }
    mutate({
      productId: productId,
      quantity: type === QUANTITY_CHANGE.DECREASE ? -1 : 1,
      userId,
    });
    toast.success("Quantity Updated Successfully !");
  };

  return (
    <>
      <div className="flex justify-between p-3">
        <div className="flex">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-32" />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <div>
              <Typography variant={"h4"}>{product.name}</Typography>
            </div>
            <div className="flex gap-4 justify-center  items-center">
              <Button
                variant={"outline"}
                className="p-3"
                size={"sm"}
                onClick={() => quantityHandler(product.productId, QUANTITY_CHANGE.INCREASE)}
              >
                <FaPlus />
              </Button>
              <Typography variant={"h4"}>{product.quantity}</Typography>
              <Button
                variant={"outline"}
                className="p-3"
                size={"sm"}
                onClick={() => quantityHandler(product.productId, QUANTITY_CHANGE.DECREASE)}
              >
                <FaMinus />
              </Button>
            </div>
          </div>
        </div>
        <Typography className="p-6" variant={"h4"}>
          {formatPrice(product.price)}
        </Typography>
      </div>

      <hr />
    </>
  );
};

export default CartItems;
