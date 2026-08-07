import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileCheck2 } from "lucide-react";

import { Button } from "../../actions/button";
import { ActivityItem } from "./ActivityItem";

const meta = {
  title: "Composite/ActivityItem",
  component: ActivityItem,
  tags: ["autodocs"],
  args: {
    title: "Aktivitas",
  },
} satisfies Meta<typeof ActivityItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "Dokumen telah berhasil diperbarui.",
    icon: <FileCheck2 />,
    metadata: (
      <>
        <span>Oleh Admin</span>
        <span>Portal Internal</span>
      </>
    ),
    timestamp: "10 menit lalu",
    title: "Dokumen diperbarui",
  },
};

export const WithAction: Story = {
  args: {
    ...Default.args,
    actions: <Button variant="text">Lihat Detail</Button>,
  },
};

export const Mobile: Story = {
  ...WithAction,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
