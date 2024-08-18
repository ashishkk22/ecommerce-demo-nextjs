import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
    },
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
    },
    color: {
      control: { type: "text" },
    },
    weight: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

// Stories for Typography component
export const Heading1: Story = {
  args: {
    as: "h1",
    variant: "h1",
    children: "Heading 1",
    color: "primary",
    weight: "bold",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    variant: "h2",
    children: "Heading 2",
    color: "secondary",
    weight: "normal",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
    variant: "p",
    children: "This is a paragraph.",
    color: "primary",
    weight: "normal",
  },
};

export const Span: Story = {
  args: {
    as: "span",
    variant: "span",
    children: "This is a span element.",
    color: "secondary",
    weight: "normal",
  },
};

export const CustomClass: Story = {
  args: {
    as: "p",
    variant: "p",
    children: "This paragraph has a custom class.",
    className: "text-primary",
  },
};

export const HeadingWithCustomColor: Story = {
  args: {
    as: "h3",
    variant: "h3",
    children: "Custom Color Heading",
    color: "primary",
  },
};
