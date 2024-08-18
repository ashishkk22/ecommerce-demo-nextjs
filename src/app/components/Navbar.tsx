import React from "react";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
const Navbar = () => {
  return (
    <Header>
      <Header.Brand className="text-h1 font-bold">E-commerce Store</Header.Brand>
      <Header.Action>
        <Button variant={"solid"}>Login</Button>
      </Header.Action>
    </Header>
  );
};
export default Navbar;
