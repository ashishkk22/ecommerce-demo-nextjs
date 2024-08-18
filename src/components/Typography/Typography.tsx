import React, { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import { typographyStyle } from "./Typography.styles";

type TypographyVariants = VariantProps<typeof typographyStyle>;

type TypographyProps<T extends ElementType> = {
  className?: string;
  as?: T;
} & TypographyVariants &
  ComponentPropsWithoutRef<
    //If T is the default, pass it 'a' instead
    ElementType extends T ? "a" : T
    //but if T has a value that ins't the default, pass it that
  >;

export const Typography = <T extends ElementType>({
  children,
  className,
  variant = "p",
  color,
  weight,
  ...props
}: PropsWithChildren<TypographyProps<T>>) => {
  const { as: Component = "p" } = props;
  return (
    <Component className={cn(typographyStyle({ variant, color, weight }), className)} {...props}>
      {children}
    </Component>
  );
};
