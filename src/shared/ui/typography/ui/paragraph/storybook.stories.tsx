import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./ui";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: "Shared/Typography/Paragraph",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Secondary: Story = {
  args: {
    children:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    variant: "secondary",
  },
};

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    variant: "primary",
  },
};
