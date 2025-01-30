import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { BaseButton, BaseButtonProps } from "../../lib/main"; // Adjust the path based on your project structure

// Metadata for the component
const meta: Meta<typeof BaseButton> = {
  title: "Atoms/BaseButton",
  component: BaseButton,
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
    children: "Default Button",
    autoFocus: true,
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
    <BaseButton>
      {({ hover }: { hover: boolean }) => (
        <span>{hover ? "Hovered" : "Hover me"}</span>
      )}
</BaseButton>
`,
      },
    },
  },
};
