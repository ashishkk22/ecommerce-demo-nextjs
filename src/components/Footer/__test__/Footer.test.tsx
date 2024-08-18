import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { describe, expect, it } from "vitest";

describe("Footer Component", () => {
  it("renders Footer with default content", () => {
    render(
      <Footer>
        <Footer.Content>
          <Footer.Copyright>&copy; 2024 E-commerce Store. All rights reserved.</Footer.Copyright>
        </Footer.Content>
      </Footer>,
    );

    expect(screen.getByText(/E-commerce Store/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });

  it("applies custom class names", () => {
    render(
      <Footer className="bg-dark text-light">
        <Footer.Content>
          <Footer.Copyright>&copy; 2024 Custom Footer.</Footer.Copyright>
        </Footer.Content>
      </Footer>,
    );

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-dark");
    expect(footer).toHaveClass("text-light");
  });

  it("renders Footer with only Copyright", () => {
    render(
      <Footer>
        <Footer.Content>
          <Footer.Copyright>&copy; 2024 No Content Footer.</Footer.Copyright>
        </Footer.Content>
      </Footer>,
    );

    expect(screen.getByText(/No Content Footer/)).toBeInTheDocument();
  });

  it("renders Footer with Content and Copyright", () => {
    render(
      <Footer>
        <Footer.Content>
          <Footer.Copyright>&copy; 2024 Footer with Content.</Footer.Copyright>
        </Footer.Content>
      </Footer>,
    );

    expect(screen.getByText(/Footer with Content/)).toBeInTheDocument();
  });

  it("renders Footer without children", () => {
    render(<Footer />);

    // Ensure the Footer renders even when no children are provided
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
