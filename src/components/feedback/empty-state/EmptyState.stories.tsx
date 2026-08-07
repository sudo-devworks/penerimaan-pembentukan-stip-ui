import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, TextAction } from "../../actions";
import { EmptyState } from "./EmptyState";

const meta = {
  title: "Components/Feedback/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "Belum ada dokumen yang diunggah",
    description: "Dokumen yang diunggah akan ditampilkan pada area ini.",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    primaryAction: <Button>Unggah dokumen</Button>,
    secondaryAction: <TextAction>Lihat panduan</TextAction>,
  },
};

export const FilterResult: Story = {
  args: {
    title: "Tidak ada peserta yang sesuai dengan filter",
    description:
      "Ubah atau hapus sebagian filter untuk menampilkan data peserta.",
    primaryAction: <Button variant="secondary">Hapus filter</Button>,
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    title: "Belum ada jadwal seleksi",
    description: "Jadwal akan ditampilkan setelah diterbitkan.",
  },
};

export const LongContent: Story = {
  args: {
    title: "Belum ada kegiatan aktif yang tersedia untuk proses pendaftaran",
    description:
      "Daftar kegiatan akan muncul setelah informasi kegiatan, gelombang, jadwal, dan status pendaftaran telah diterbitkan.",
    primaryAction: <Button variant="secondary">Muat ulang</Button>,
  },
};
