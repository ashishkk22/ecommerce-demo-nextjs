import { Typography } from "@/components/Typography";
import Image from "next/image";
import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";

const EmptyCart = () => {
  return (
    <BackgroundWrapper>
      <div className="flex justify-center items-center flex-col gap-8">
        <Image
          className="lg:w-1/3 w-2/3 mt-24"
          src={"https://ik.imagekit.io/ashishkk22/pizza/empty_cart.svg"}
          width={100}
          height={100}
          alt="Empty Cart Image"
        />
        <Typography variant={"h4"} className="mt-4">
          Cart is Empty
        </Typography>
      </div>
    </BackgroundWrapper>
  );
};

export default EmptyCart;
