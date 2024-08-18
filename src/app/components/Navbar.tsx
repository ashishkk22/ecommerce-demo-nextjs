import React from "react";
import { Header } from "@/components/Header";
import NavbarAction from "./NavbarAction";
import NavbarBrand from "./NavbarBrand";

const Navbar = () => {
  return (
    <Header>
      <Header.Brand>
        <NavbarBrand />
      </Header.Brand>
      <Header.Action>
        <NavbarAction />
      </Header.Action>
    </Header>
  );
};
export default Navbar;
