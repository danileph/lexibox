import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./ui";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Shared/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    // primary: true,
    // label: 'Button',
  },
};
