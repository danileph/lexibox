import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./ui";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Shared/Typography/Link",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

// export const Secondary: Story = {
//   args: {
//     children: "Link",
//   },
// };

export const Primary: Story = {
  args: {
    children: "Link",
    href: "/",
  },
};
