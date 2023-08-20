import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./ui";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Shared/Button",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
  },
};
