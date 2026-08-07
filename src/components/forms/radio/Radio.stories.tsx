import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "./Radio";

const meta = {
  title: "Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    label: "Nautika",
    name: "program",
    value: "nautika",
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    description: "Program keahlian bagian dek kapal.",
    id: "nautika",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
