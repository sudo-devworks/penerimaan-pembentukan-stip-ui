import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, CircleCheck, TriangleAlert } from "lucide-react";

import { Button } from "../../actions/button";
import { NotificationItem } from "./NotificationItem";

const meta = {
  title: "Composite/NotificationItem",
  component: NotificationItem,
  tags: ["autodocs"],
  args: {
    title: "Notifikasi",
  },
} satisfies Meta<typeof NotificationItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unread: Story = {
  args: {
    actions: <Button variant="text">Lihat Detail</Button>,
    description: "Terdapat informasi baru yang memerlukan perhatian.",
    icon: <Bell />,
    timestamp: "5 menit lalu",
    title: "Pembaruan proses",
    unread: true,
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    description: "Proses telah berhasil diselesaikan.",
    icon: <CircleCheck />,
    timestamp: "Hari ini",
    title: "Proses berhasil",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    description: "Periksa kembali informasi sebelum batas waktu.",
    icon: <TriangleAlert />,
    timestamp: "Kemarin",
    title: "Tindakan diperlukan",
    variant: "warning",
  },
};
