"use client";
import { Typography } from "@/components/Typography";
import { useRouter } from "next/navigation";
import React from "react";

const NavbarBrand = () => {
  const router = useRouter();
  return (
    <Typography variant={"h2"} className="text-primary cursor-pointer" weight={"bold"} onClick={() => router.push("/")}>
      NexBuy
    </Typography>
  );
};

export default NavbarBrand;
