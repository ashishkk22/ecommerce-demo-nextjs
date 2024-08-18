import React, { FC, PropsWithChildren } from "react";
import { cn } from "@/utils";
/**
 * The main Header component which serves as a container for the Brand, Nav, and Action sub-components.
 */
type HeaderProps = {
  /**
   * Custom CSS class names to apply to the header.
   */
  className?: string;
};

type SubComponentProps = {
  className?: string;
};

export const Header: FC<PropsWithChildren<HeaderProps>> & {
  Brand: FC<PropsWithChildren<SubComponentProps>>;
  Nav: FC<PropsWithChildren<SubComponentProps>>;
  Action: FC<PropsWithChildren<SubComponentProps>>;
} = ({ children, className }) => {
  return (
    <header className={cn("bg-white text-primary p-4", className)}>
      <div className="container mx-auto flex justify-between items-center">{children}</div>
    </header>
  );
};

const Brand: FC<PropsWithChildren<SubComponentProps>> = ({ children, className }) => {
  return <h1 className={cn("text-h1 font-bold", className)}>{children}</h1>;
};

const Nav: FC<PropsWithChildren<SubComponentProps>> = ({ children, className }) => {
  return <nav className={cn(className)}>{children}</nav>;
};

const Action: FC<PropsWithChildren<SubComponentProps>> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};

Header.Brand = Brand;
Header.Nav = Nav;
Header.Action = Action;

export default Header;
