import React from "react";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Typography } from "@/components/Typography";

const Navbar = () => {
  return (
    <Header>
      <Header.Brand>
        <Typography variant={"h2"} className="text-primary" weight={"bold"}>
          NexBuy
        </Typography>
      </Header.Brand>
      <Header.Action>
        <Button variant={"solid"}>Login</Button>
      </Header.Action>
    </Header>
  );
};
export default Navbar;
