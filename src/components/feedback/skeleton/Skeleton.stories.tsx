import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "./Skeleton";
import { SkeletonBlock } from "./SkeletonBlock";
import { SkeletonText } from "./SkeletonText";

const meta = {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "100%",
    height: "24px",
  },
};

export const Circular: Story = {
  args: {
    width: "64px",
    height: "64px",
    circular: true,
  },
};

export const Text: Story = {
  render: () => (
    <div
      style={{
        maxWidth: "560px",
      }}
    >
      <SkeletonText lines={4} />
    </div>
  ),
};

export const Block: Story = {
  render: () => <SkeletonBlock width="100%" height="180px" />,
};

export const ParticipantCard: Story = {
  render: () => (
    <div
      aria-label="Memuat ringkasan peserta"
      aria-busy="true"
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "16px",
        maxWidth: "560px",
      }}
    >
      <Skeleton circular width="48px" height="48px" />

      <SkeletonText lines={3} lastLineWidth="42%" />
    </div>
  ),
};

export const TableRows: Story = {
  render: () => (
    <div
      aria-label="Memuat tabel peserta"
      aria-busy="true"
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      {Array.from(
        {
          length: 5,
        },
        (_, index) => (
          <SkeletonBlock key={index} height="48px" />
        ),
      )}
    </div>
  ),
};

export const AnimationComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "24px",
      }}
    >
      <Skeleton animation="shimmer" height="48px" />

      <Skeleton animation="pulse" height="48px" />

      <Skeleton animation="none" height="48px" />
    </div>
  ),
};
