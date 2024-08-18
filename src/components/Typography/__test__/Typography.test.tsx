import { render, screen } from "@testing-library/react";
import { Typography } from "../Typography";
import { typographyStyle } from "../Typography.styles";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { describe, expect, it } from "vitest";

const generateClassName = (
  variant: VariantProps<typeof typographyStyle>["variant"],
  color?: VariantProps<typeof typographyStyle>["color"],
  weight?: VariantProps<typeof typographyStyle>["weight"],
) => {
  return cn(typographyStyle({ variant, color, weight }));
};

describe("Typography Component", () => {
  it("renders with h1 variant", () => {
    render(
      <Typography variant={"h1"} as="h1">
        Heading 1
      </Typography>,
    );
    const element = screen.getByText("Heading 1");
    expect(element).toHaveClass(generateClassName("h1"));
    expect(element.tagName).toBe("H1");
  });

  it("renders with h2 variant and secondary color", () => {
    render(
      <Typography variant={"h2"} as="h2" color="secondary">
        Heading 2
      </Typography>,
    );
    const element = screen.getByText("Heading 2");
    expect(element).toHaveClass(generateClassName("h2", "secondary"));
    expect(element.tagName).toBe("H2");
  });

  it("renders with p variant and bold weight", () => {
    render(
      <Typography as="p" weight="bold">
        Paragraph with bold weight
      </Typography>,
    );
    const element = screen.getByText("Paragraph with bold weight");
    expect(element).toHaveClass(generateClassName("p", "primary", "bold"));
    expect(element.tagName).toBe("P");
  });

  it("renders with span variant and custom className", () => {
    render(
      <Typography as="span" className="custom-class">
        Span element
      </Typography>,
    );
    const element = screen.getByText("Span element");
    expect(element).toHaveClass(generateClassName("span", "primary", "normal"));
    expect(element).toHaveClass("custom-class");
    expect(element.tagName).toBe("SPAN");
  });

  it("renders with default variant (p)", () => {
    render(<Typography>Default paragraph</Typography>);
    const element = screen.getByText("Default paragraph");
    expect(element).toHaveClass(generateClassName("p"));
    expect(element.tagName).toBe("P");
  });

  it("renders with h3 variant and primary color", () => {
    render(
      <Typography variant={"h3"} as="h3" color="primary">
        Heading 3 with primary color
      </Typography>,
    );
    const element = screen.getByText("Heading 3 with primary color");
    expect(element).toHaveClass(generateClassName("h3", "primary"));
    expect(element.tagName).toBe("H3");
  });
});
