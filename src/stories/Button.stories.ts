import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../lib/main"; // Adjust the path based on your project structure

// Metadata for the component
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered", // Centers the button in the Storybook canvas
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: false }, // Hide `className` from Storybook controls
    onClick: { action: "clicked" }, // Logs button clicks in the actions panel
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default button story
export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

// Primary button story
export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "primary", // Pass additional className if you have different styles
  },
};

// Disabled button story
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
