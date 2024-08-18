import React, { FC, PropsWithChildren } from "react";
import { cn } from "@/utils";

type FooterProps = {
  className?: string;
};

type SubComponentProps = {
  className?: string;
};

export const Footer: FC<PropsWithChildren<FooterProps>> & {
  Content: FC<PropsWithChildren<SubComponentProps>>;
  Copyright: FC<PropsWithChildren<SubComponentProps>>;
} = ({ children, className }) => {
  return (
    <footer className={cn("bg-primary text-white py-4", className)}>
      <div className="container mx-auto text-center">{children}</div>
    </footer>
  );
};

const Content: FC<PropsWithChildren<SubComponentProps>> = ({ children, className }) => {
  return <div className={cn("text-center", className)}>{children}</div>;
};

const Copyright: FC<PropsWithChildren<SubComponentProps>> = ({ children, className }) => {
  return <p className={cn("text-sm", className)}>{children}</p>;
};

Footer.Content = Content;
Footer.Copyright = Copyright;

export default Footer;
