import { cva } from "class-variance-authority";

export const typographyStyle = cva([], {
  variants: {
    variant: {
      h1: ["text-4xl", "font-extrabold"],
      h2: ["text-3xl", "font-bold"],
      h3: ["text-2xl", "font-semibold"],
      h4: ["text-xl", "font-medium"],
      h5: ["text-lg", "font-medium"],
      h6: ["text-base", "font-normal"],
      p: ["text-base", "font-normal"],
      span: ["text-base", "font-normal"],
    },
    color: {
      primary: ["text-textPrimary"],
      secondary: ["text-textSecondary"],
    },
    weight: {
      normal: ["font-normal"],
      bold: ["font-bold"],
    },
  },
  defaultVariants: {
    variant: "p",
    color: "primary",
    weight: "normal",
  },
});
