import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./ui";

const meta: Meta<typeof Title> = {
  component: Title,
  title: "Shared/Typography/Title",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    children: "Title",
    level: 1,
  },
};

// export const Primary: Story = {
//   args: {
//     children: "Title",
//     level: 1
//   },
// };
