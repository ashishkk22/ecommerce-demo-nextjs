import { cva } from "class-variance-authority";

export const cardStyle = cva(
  [
    "bg-surface",
    "shadow-lg",
    "rounded-lg",
    "overflow-hidden",
    "transition",
    "duration-200",
    "ease-in-out",
    "hover:shadow-xl",
  ],
  {
    variants: {
      variant: {
        default: ["bg-surface", "shadow-lg"],
        outlined: ["border", "border-gray-200/80"],
      },
      size: {
        sm: ["w-60"],
        md: ["w-80"],
        lg: ["w-96"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
