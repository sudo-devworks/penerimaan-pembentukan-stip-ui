import type { Meta, StoryObj } from "@storybook/react-vite";

import { BackNavigation } from "./BackNavigation";

const meta = {
  title: "Components/Navigation/BackNavigation",
  component: BackNavigation,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof BackNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkMode: Story = {
  args: {
    href: "/peserta",
    children: "Kembali ke daftar peserta",
  },
};

export const ButtonMode: Story = {
  args: {
    onClick: () => window.history.back(),
    children: "Kembali ke halaman sebelumnya",
  },
};

export const DashboardDestination: Story = {
  args: {
    href: "/dashboard",
    children: "Kembali ke dashboard",
  },
};

export const LongLabel: Story = {
  args: {
    href: "/kegiatan/cma-cgm/peserta",
    children: "Kembali ke daftar peserta Diklat Pembentukan CMA CGM Tahun 2026",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const DisabledButton: Story = {
  args: {
    onClick: () => undefined,
    disabled: true,
    children: "Kembali ke halaman sebelumnya",
  },
};
