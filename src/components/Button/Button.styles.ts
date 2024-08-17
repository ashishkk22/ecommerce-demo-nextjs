import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "flex",
    "items-center",
    "justify-center",
    "gap-3",
    "relative",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary text-white hover:bg-primary/90 active:ring-2 active:ring-primary/50",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 active:ring-2 active:ring-primary/50",
        ghost: "text-primary bg-transparent hover:bg-primary/10 active:ring-2 active:ring-primary/50",
        link: "text-primary underline-offset-4 hover:underline cursor-pointer",
        destructive: "bg-error text-white hover:bg-error/90 active:ring-2 active:ring-error/50",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-10 px-4 py-2 text-base",
        lg: "h-11 px-6 py-3 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);
export const badgeStyles = cva([
  "absolute",
  "top-0",
  "right-0",
  "-mt-4",
  "-mr-4",
  "w-8",
  "h-8",
  "text-xs",
  "font-semibold",
  "text-white",
  "bg-primary",
  "rounded-full",
  "border-2 border-white",
  "flex",
  "items-center",
  "justify-center",
  "overflow-hidden",
  "whitespace-nowrap",
  "leading-tight",
  "shadow-md",
]);
