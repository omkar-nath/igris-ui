import type { Meta, StoryObj } from "@storybook/react";
import { BaseButton, Button } from "../../lib/main.ts"; // Adjust the path based on your project structure

// Metadata for the component
const meta: Meta<typeof BaseButton> = {
  title: "Atoms/BaseButton",
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

type Story = StoryObj<typeof BaseButton>;

// Default button story
export const Default: Story = {
  args: {
    children: "Click",
    autoFocus: true,
  },
};

export const PrimaryButton: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const SecondaryButton: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const SuccessButton: Story = {
  args: {
    children: "Success",
    variant: "success",
    size: "md",
  },
};

export const InfoButton: Story = {
  args: {
    children: "Information",
    variant: "info",
    size: "md",
  },
};

export const DangerButton: Story = {
  args: {
    children: "Danger",
    variant: "danger",
    size: "md",
  },
};

export const WarningButton: Story = {
  args: {
    children: "Warning",
    variant: "warning",
    size: "sm",
  },
};

// Disabled button story
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const LinkButton: Story = {
  args: {
    children: "Link Button",
    className: "primary",
    as: "a",
    href: "https://google.com",
  },
};

export const WithChildrenAsFunction: Story = {
  args: {
    children: ({ hover }: { hover: boolean }) =>
      hover ? "I am hovered" : "I am not hovered",
  },
  parameters: {
    docs: {
      source: {
        code: `
    <Button>
      {({ hover }: { hover: boolean }) => (
        <span>{hover ? "Hovered" : "Hover me"}</span>
      )}
</Button>
`,
      },
    },
  },
};
