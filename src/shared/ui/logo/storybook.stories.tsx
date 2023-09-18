import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./ui";

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "Shared/Logo",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const FullSize: Story = {
  args: {
    size: "full",
  },
};

export const MinimalSize: Story = {
  args: {
    size: "minimal",
  },
};

export const MonoBlack: Story = {
  args: {
    color: "mono-black",
  },
};

export const MonoWhite: Story = {
  args: {
    color: "mono-white",
  },
};
