import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Button } from "@/components/Button";
import { describe, expect, it } from "vitest";

describe("Header", () => {
  it("renders the Header component with Brand, Nav, and Action", () => {
    render(
      <Header>
        <Header.Brand>E-commerce Store</Header.Brand>
        <Header.Nav>
          <Button variant="solid">Login</Button>
        </Header.Nav>
        <Header.Action>
          <Button variant="outline">Sign Up</Button>
        </Header.Action>
      </Header>,
    );

    expect(screen.getByText("E-commerce Store")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("applies custom class names to Header and its sub-components", () => {
    render(
      <Header className="custom-header">
        <Header.Brand className="custom-brand">E-commerce Store</Header.Brand>
        <Header.Nav className="custom-nav">
          <Button variant="solid">Login</Button>
        </Header.Nav>
        <Header.Action className="custom-action">
          <Button variant="outline">Sign Up</Button>
        </Header.Action>
      </Header>,
    );

    expect(screen.getByRole("banner")).toHaveClass("custom-header");
    expect(screen.getByText("E-commerce Store")).toHaveClass("custom-brand");
    expect(screen.getByRole("navigation")).toHaveClass("custom-nav");
    expect(screen.getByText("Sign Up").parentElement).toHaveClass("custom-action");
  });

  it("renders without crashing when no children are provided", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it("renders only the Brand component", () => {
    render(
      <Header>
        <Header.Brand>E-commerce Store</Header.Brand>
      </Header>,
    );

    expect(screen.getByText("E-commerce Store")).toBeInTheDocument();
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByText("Sign Up")).not.toBeInTheDocument();
  });

  it("renders only the Nav component", () => {
    render(
      <Header>
        <Header.Nav>
          <Button variant="solid">Login</Button>
        </Header.Nav>
      </Header>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.queryByText("E-commerce Store")).not.toBeInTheDocument();
    expect(screen.queryByText("Sign Up")).not.toBeInTheDocument();
  });

  it("renders only the Action component", () => {
    render(
      <Header>
        <Header.Action>
          <Button variant="outline">Sign Up</Button>
        </Header.Action>
      </Header>,
    );

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.queryByText("E-commerce Store")).not.toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
  });
});
