import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { FaShoppingCart } from "react-icons/fa";
import { describe, expect, it } from "vitest";

describe("Card Component", () => {
  it("renders with default props", () => {
    render(
      <Card>
        <Card.Image>
          <img src="https://via.placeholder.com/300x200" alt="Product 1" className="w-full h-48 object-cover" />
        </Card.Image>
        <Card.Header>
          <h3 className="text-h3 font-medium text-primary">Product 1</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-textSecondary mt-2">$49.99</p>
        </Card.Body>
        <Card.Footer>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex items-center">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </Card.Footer>
      </Card>,
    );

    // Check if the image is rendered
    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
    // Check if the product title is rendered
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    // Check if the price is rendered
    expect(screen.getByText("$49.99")).toBeInTheDocument();
    // Check if the button with "Add to Cart" text is rendered
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });

  it("renders with outlined variant", () => {
    render(
      <Card variant="outlined" role="article">
        <Card.Image>
          <img src="https://via.placeholder.com/300x200" alt="Product 2" className="w-full h-48 object-cover" />
        </Card.Image>
        <Card.Header>
          <h3 className="text-h3 font-medium text-primary">Product 2</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-textSecondary mt-2">$79.99</p>
          <p className="text-textSecondary mt-2">This is a longer description of the product.</p>
        </Card.Body>
        <Card.Footer>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex items-center">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </Card.Footer>
      </Card>,
    );

    // Check if the outlined card variant is applied
    const cardElement = screen.getByRole("article");
    expect(cardElement).toHaveClass("border");
  });

  it("renders with different sizes", () => {
    const { container } = render(
      <>
        <Card size="sm">
          <Card.Image>
            <img src="https://via.placeholder.com/300x200" alt="Small Product" className="w-full h-48 object-cover" />
          </Card.Image>
          <Card.Header>
            <h3 className="text-h3 font-medium text-primary">Small Product</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-textSecondary mt-2">$29.99</p>
          </Card.Body>
          <Card.Footer>
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex items-center">
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </Card.Footer>
        </Card>
        <Card size="lg">
          <Card.Image>
            <img src="https://via.placeholder.com/300x200" alt="Large Product" className="w-full h-48 object-cover" />
          </Card.Image>
          <Card.Header>
            <h3 className="text-h3 font-medium text-primary">Large Product</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-textSecondary mt-2">$99.99</p>
          </Card.Body>
          <Card.Footer>
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex items-center">
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </Card.Footer>
        </Card>
      </>,
    );

    // Check if the sizes are applied correctly
    const smallCard = container.querySelector("div.w-60");
    const largeCard = container.querySelector("div.w-96");
    expect(smallCard).toBeInTheDocument();
    expect(largeCard).toBeInTheDocument();
  });
});
