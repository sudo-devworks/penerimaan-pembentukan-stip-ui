import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, TextAction } from "../../actions";
import { ErrorState } from "./ErrorState";

const meta = {
  title: "Components/Feedback/ErrorState",
  component: ErrorState,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "Data peserta belum dapat dimuat",
    description: "Periksa koneksi lalu coba kembali.",
  },
} satisfies Meta<typeof ErrorState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithRetry: Story = {
  args: {
    primaryAction: <Button>Coba lagi</Button>,
    secondaryAction: <TextAction>Kembali</TextAction>,
  },
};

export const PermissionDenied: Story = {
  args: {
    title: "Akses tidak tersedia",
    description: "Akun ini tidak memiliki izin untuk melihat data tersebut.",
    primaryAction: <Button variant="secondary">Kembali</Button>,
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    title: "Tabel belum dapat dimuat",
    description: "Coba muat ulang data peserta.",
    primaryAction: <TextAction>Coba lagi</TextAction>,
  },
};
