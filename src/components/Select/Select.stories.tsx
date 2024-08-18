import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
    showEmptyOption: { control: { type: "boolean" } },
    emptyOptionLabel: { control: { type: "text" } },
    error: { control: { type: "boolean" } },
    errorMessage: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: ["Apple", "Banana", "Orange", "Grapes"],
    showEmptyOption: true,
    emptyOptionLabel: "Select a fruit",
  },
};

export const WithError: Story = {
  args: {
    options: ["Apple", "Banana", "Orange", "Grapes"],
    showEmptyOption: true,
    emptyOptionLabel: "Select a fruit",
    error: true,
    errorMessage: "This field is required",
  },
};

export const WithoutEmptyOption: Story = {
  args: {
    options: ["Apple", "Banana", "Orange", "Grapes"],
    showEmptyOption: false,
  },
};
