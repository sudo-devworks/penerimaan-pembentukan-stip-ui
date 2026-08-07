import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorSummary } from "./ErrorSummary";

const meta = {
  title: "Forms/ErrorSummary",
  component: ErrorSummary,
  tags: ["autodocs"],
  args: {
    items: [
      {
        fieldId: "email",
        id: "email",
        message: "Masukkan alamat email yang valid.",
      },
      {
        fieldId: "program",
        id: "program",
        message: "Pilih program.",
      },
    ],
  },
} satisfies Meta<typeof ErrorSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleError: Story = {
  args: {
    items: [
      {
        fieldId: "nik",
        id: "nik",
        message: "Nomor Induk Kependudukan harus terdiri dari 16 digit.",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
