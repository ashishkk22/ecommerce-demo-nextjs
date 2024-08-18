import React, { ComponentProps, FC, PropsWithChildren } from "react";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { cardStyle } from "./Card.styles";

export const Card: FC<
  PropsWithChildren<VariantProps<typeof cardStyle> & { className?: string }> & ComponentProps<"div">
> & {
  Image: FC<PropsWithChildren<{ className?: string }>>;
  Header: FC<PropsWithChildren<{ className?: string }>>;
  Body: FC<PropsWithChildren<{ className?: string }>>;
  Footer: FC<PropsWithChildren<{ className?: string }>>;
} = ({ children, className, variant, size, ...props }) => {
  return (
    <div className={cn(cardStyle({ variant, size }), className)} {...props}>
      {children}
    </div>
  );
};

const Image: FC<PropsWithChildren<{ className?: string } & ComponentProps<"div">>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
};

const Header: FC<PropsWithChildren<{ className?: string } & ComponentProps<"div">>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-2", className)} {...props}>
      {children}
    </div>
  );
};

const Body: FC<PropsWithChildren<{ className?: string } & ComponentProps<"div">>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-2", className)} {...props}>
      {children}
    </div>
  );
};

const Footer: FC<PropsWithChildren<{ className?: string } & ComponentProps<"div">>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-2", className)} {...props}>
      {children}
    </div>
  );
};

Card.Image = Image;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
