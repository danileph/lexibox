import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./ui";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Shared/Modal",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children: (setIsOpen) => <div>Hello world</div>,
    label: "Open Modal",
    // size: "medium",
  },
};
