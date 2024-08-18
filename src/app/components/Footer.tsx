import React from "react";
import { Footer as BaseFooter } from "@/components/Footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <BaseFooter>
      <BaseFooter.Content>
        <BaseFooter.Copyright>&copy; {currentYear} E-commerce Store. All rights reserved.</BaseFooter.Copyright>
      </BaseFooter.Content>
    </BaseFooter>
  );
};

export default Footer;
