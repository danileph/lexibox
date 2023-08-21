import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./ui";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Shared/Input",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Secondary: Story = {
  args: {
    // children: "Button",
    // variant: "secondary",
    // size: "medium",
  },
};

export const Primary: Story = {
  args: {
    // children: "Button",
    // variant: "primary",
    // size: "medium",
  },
};
