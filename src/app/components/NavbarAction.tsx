"use client";

import { Button } from "@/components/Button";
import { getCart } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const NavbarAction = () => {
  const router = useRouter();
  const { data: userInfo } = useSession();

  const { data } = useQuery({
    queryFn: () => getCart(userInfo?.user?.id ?? ""),
    queryKey: ["getCart"],
  });

  return (
    <>
      {userInfo?.user?.email ? (
        <Button
          variant={"solid"}
          size={"icon"}
          onClick={() => router.push("/cart")}
          badge={data?.cart?.cartTotalItems ?? 0}
        >
          <FaCartPlus />
        </Button>
      ) : (
        <Button variant={"solid"} onClick={() => router.push("/login")}>
          Login
        </Button>
      )}
    </>
  );
};

export default NavbarAction;
