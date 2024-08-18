"use client";

import { Button } from "@/components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const NavbarAction = () => {
  const router = useRouter();
  const { data: userRes } = useSession();
  return (
    <>
      {userRes?.user?.email ? (
        <Button variant={"solid"} onClick={() => router.push("/cart")}>
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
