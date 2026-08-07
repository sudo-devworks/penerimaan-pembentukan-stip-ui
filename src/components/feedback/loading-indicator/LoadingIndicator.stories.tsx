import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoadingIndicator } from "./LoadingIndicator";

const meta = {
  title: "Components/Feedback/LoadingIndicator",
  component: LoadingIndicator,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Memuat data",
    size: "md",
  },
} satisfies Meta<typeof LoadingIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <LoadingIndicator size="sm" label="Memuat ukuran kecil" />

      <LoadingIndicator size="md" label="Memuat ukuran sedang" />

      <LoadingIndicator size="lg" label="Memuat ukuran besar" />
    </div>
  ),
};
