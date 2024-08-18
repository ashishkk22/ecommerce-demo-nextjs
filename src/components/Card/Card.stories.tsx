import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { FaShoppingCart } from "react-icons/fa";
import { Typography } from "../Typography";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
    children: (
      <>
        <Card.Image>
          <img src="https://ik.imagekit.io/ashishkk22/user_cUi0RVy_s" alt="Product 1" className="w-full h-48" />
        </Card.Image>
        <Card.Header>
          <Typography variant={"h4"}>Mineral Water</Typography>
        </Card.Header>
        <Card.Body>
          <p className="text-zinc-400 text-sm">Fresh juice with extra chilled and fresh fruits</p>
        </Card.Body>
        <Card.Footer className="flex justify-between items-center mb-2">
          <p className="text-textSecondary px-1 py-0">₹ 49.99</p>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex items-center">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </Card.Footer>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    size: "md",
    children: (
      <>
        <Card.Image>
          <img src="https://ik.imagekit.io/ashishkk22/user_cUi0RVy_s" alt="Product 1" className="w-full h-48" />
        </Card.Image>
        <Card.Header>
          <Typography variant={"h4"}>Mineral Water</Typography>
        </Card.Header>
        <Card.Body>
          <p className="text-zinc-400 text-sm">Fresh juice with extra chilled and fresh fruits</p>
        </Card.Body>
        <Card.Footer className="flex justify-between items-center mb-2">
          <p className="text-textSecondary px-1 py-0">₹ 49.99</p>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex items-center">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </Card.Footer>
      </>
    ),
  },
};
