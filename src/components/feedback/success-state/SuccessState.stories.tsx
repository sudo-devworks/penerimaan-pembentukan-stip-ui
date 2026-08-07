import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, TextAction } from "../../actions";
import { SuccessState } from "./SuccessState";

const meta = {
  title: "Components/Feedback/SuccessState",
  component: SuccessState,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "Pendaftaran berhasil dibuat",
    description:
      "Nomor pendaftaran telah diterbitkan dan proses berikutnya dapat dilanjutkan.",
  },
} satisfies Meta<typeof SuccessState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PaymentSuccess: Story = {
  args: {
    title: "Pembayaran berhasil diproses",
    description: "Status pembayaran telah diperbarui.",
    supportingContent: <strong>Referensi dummy: PAY-001</strong>,
    primaryAction: <Button>Lanjutkan</Button>,
    secondaryAction: <TextAction>Lihat rincian</TextAction>,
  },
};

export const BiodataFinalized: Story = {
  args: {
    title: "Biodata telah difinalisasi",
    description:
      "Data tidak dapat diubah selama proses verifikasi berlangsung.",
    primaryAction: <Button>Unggah dokumen</Button>,
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    title: "Perubahan berhasil disimpan",
    description: "Data peserta telah diperbarui.",
  },
};

export const LongContent: Story = {
  args: {
    title:
      "Pendaftaran berhasil dibuat dan nomor pendaftaran telah diterbitkan",
    description:
      "Simpan informasi pendaftaran ini dan lanjutkan proses sesuai tahapan yang tersedia pada dashboard peserta.",
    primaryAction: <Button>Lanjutkan proses</Button>,
    secondaryAction: <Button variant="secondary">Kembali ke dashboard</Button>,
  },
};
