import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { badgeStyles, buttonStyles } from "./Button.styles";
import { cn } from "@/utils";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;

type ButtonProps<T extends ButtonVariantProps["size"]> = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    /**
     * If true, renders as a `span` instead of a `button`.
     * Useful when integrating with certain frameworks or UI libraries.
     */
    asChild?: boolean;
    /**
     * Optional badge number to display on the button.
     * Only applicable if size is 'icon'.
     */
    badge?: T extends "icon" ? number : never;
  };

/**
 * `Button` is a versatile component that can be rendered as either a `button` or a `span` element.
 * It supports multiple variants and sizes, as defined by the Tailwind CSS utility classes.
 */
export const Button = <T extends ButtonVariantProps["size"]>({
  variant,
  size,
  className,
  asChild = false,
  badge,
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = asChild ? "span" : "button";

  const shouldRenderBadge = size === "icon" && badge !== undefined && badge > 0;

  return (
    <Component
      aria-label={asChild ? undefined : "Button"}
      className={cn(buttonStyles({ variant, size, className }))}
      {...props}
    >
      {children}
      {shouldRenderBadge && <span className={cn(badgeStyles())}> {badge > 99 ? "99+" : badge}</span>}
    </Component>
  );
};

const BaseButton = () => {
  return <Button badge={23} />;
};

export default BaseButton;
