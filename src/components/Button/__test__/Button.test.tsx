//Button/__test__/Button.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Button } from "../Button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders as a span when asChild is true", () => {
    render(<Button asChild>Button as Span</Button>);
    const spanElement = screen.getByText(/Button as Span/i);
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.tagName).toBe("SPAN");
  });

  // Test button click event
  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} size={"lg"} badge={22}>
        Clickable Button
      </Button>,
    );
    const buttonElement = screen.getByText(/Clickable Button/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
