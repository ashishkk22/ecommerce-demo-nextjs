import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Custom CSS class names to apply to the footer.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Footer.Content>
          <Footer.Copyright>&copy; 2024 E-commerce Store. All rights reserved.</Footer.Copyright>
        </Footer.Content>
      </>
    ),
  },
};

export const CustomClass: Story = {
  args: {
    className: "bg-dark text-light",
    children: (
      <>
        <Footer.Content className="text-lg">
          <Footer.Copyright className="font-light">&copy; 2024 Custom Footer. All rights reserved.</Footer.Copyright>
        </Footer.Content>
      </>
    ),
  },
};

export const NoContent: Story = {
  args: {
    children: (
      <Footer.Content>
        <Footer.Copyright>&copy; 2024 No Content Footer.</Footer.Copyright>
      </Footer.Content>
    ),
  },
};
