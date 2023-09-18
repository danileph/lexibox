import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./ui";
import { Button } from "@/shared/ui/button";

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
    trigger: (setIsOpen) => (
      <Button onClick={() => setIsOpen(true)}>Open model</Button>
    ),
    // size: "medium",
  },
};
