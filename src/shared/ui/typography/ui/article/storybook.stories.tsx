import type { Meta, StoryObj } from "@storybook/react";

import { Article } from "./ui";

const meta: Meta<typeof Article> = {
  component: Article,
  title: "Shared/Typography/Article",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Article>;

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
