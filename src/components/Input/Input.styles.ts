import { cva } from "class-variance-authority";

export const inputWrapperStyle = cva(
  [
    "flex",
    "items-center",
    "relative",
    "gap-3",
    "rounded-md",
    "ring-offset-background",
    "ring-1",
    "ring-gray-200",
    "text-gray-900",
    "bg-transparent",
    "focus-within:ring-1",
    "focus-within:ring-gray-200",
    "hover:ring-black",
    "transition-all",
    "duration-300",
  ],
  {
    variants: {
      error: {
        true: "ring-red-500 focus-within:ring-red-500 hover:ring-red-500",
        false: "",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

export const iconStyle = cva([
  "w-4",
  "h-4",
  "text-gray-400",
  "px-3",
  "flex-shrink-0",
  "transition-colors",
  "duration-300",
]);

export const inputStyle = cva([
  "w-full",
  "px-3",
  "py-2",
  "h-8",
  "md:h-10",
  "bg-transparent",
  "text-base",
  "placeholder:text-muted-foreground",
  "focus:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-60",
  "transition-all",
  "duration-300",
]);
