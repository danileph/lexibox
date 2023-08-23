import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./ui";

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: "Shared/Divider",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const WithText: Story = {
  args: {
    children: "Text",
  },
};

export const WithoutText: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    children: "Text",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Text",
    variant: "secondary",
  },
};
