import type { Meta, StoryObj } from "@storybook/react";

import { Key } from "./ui";

const meta: Meta<typeof Key> = {
  component: Key,
  title: "Shared/Key",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Key>;

export const Primary: Story = {
  args: {
    children: "⏎",
  },
};
