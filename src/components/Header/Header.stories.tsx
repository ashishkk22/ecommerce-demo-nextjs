import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { Button } from "@/components/Button";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Header.Brand>E-commerce Store</Header.Brand>
        <Header.Nav>
          <Button variant="solid">Login</Button>
        </Header.Nav>
      </>
    ),
  },
};

export const WithAction: Story = {
  args: {
    children: (
      <>
        <Header.Brand>E-commerce Store</Header.Brand>
        <Header.Action className="flex gap-2 w-52">
          <Button variant="solid">Login</Button>
          <Button variant="outline">Sign Up</Button>
        </Header.Action>
      </>
    ),
  },
};
