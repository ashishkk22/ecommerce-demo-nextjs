import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "../Input";

describe("Input Component", () => {
  it("renders the input with label and helper text", () => {
    render(<Input name="email" label="Email" helperText="We'll never share your email." />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/we'll never share your email\./i)).toBeInTheDocument();
  });

  it("renders the input as required", () => {
    render(<Input name="email" label="Email" required />);

    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders the error message when error is true", () => {
    render(<Input name="email" label="Email" error errorMessage="Please enter a valid email." />);

    expect(screen.getByText(/please enter a valid email\./i)).toBeInTheDocument();
  });

  it("does not render the error message when error is false", () => {
    render(<Input name="email" label="Email" error={false} />);

    expect(screen.queryByText(/please enter a valid email\./i)).not.toBeInTheDocument();
  });

  it("allows text input", () => {
    render(<Input name="email" label="Email" type="text" />);

    const inputElement = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "it@example.com" } });

    expect(inputElement).toHaveValue("it@example.com");
  });

  it("renders helper text when provided", () => {
    render(<Input name="username" label="Username" helperText="This is your username." />);

    expect(screen.getByText(/this is your username\./i)).toBeInTheDocument();
  });

  it("disables the input when disabled prop is passed", () => {
    render(<Input name="email" label="Email" disabled />);

    expect(screen.getByLabelText(/email/i)).toBeDisabled();
  });

  it("applies the required attribute when required is true", () => {
    render(<Input name="email" label="Email" required />);

    expect(screen.getByLabelText(/email/i)).toBeRequired();
  });
});
