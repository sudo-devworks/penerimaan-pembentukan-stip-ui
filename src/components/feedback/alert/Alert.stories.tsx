import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Button, TextAction } from "../../actions";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  args: {
    severity: "neutral",
    children: "Informasi proses tersedia pada area ini.",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Info: Story = {
  args: {
    severity: "info",
    title: "Informasi pendaftaran",
    children:
      "Pendaftaran belum dibuka. Informasi jadwal akan ditampilkan pada halaman ini.",
  },
};

export const Success: Story = {
  args: {
    severity: "success",
    title: "Data berhasil disimpan",
    children: "Perubahan data peserta telah tersimpan.",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    title: "Dokumen perlu diperbaiki",
    children: "Unggah ulang dokumen identitas yang dapat dibaca dengan jelas.",
  },
};

export const Danger: Story = {
  args: {
    severity: "danger",
    title: "Data peserta belum dapat dimuat",
    children: "Periksa koneksi lalu coba kembali.",
  },
};

export const WithAction: Story = {
  args: {
    severity: "danger",
    title: "Data peserta belum dapat dimuat",
    children: "Permintaan belum berhasil diproses.",
    action: (
      <>
        <Button size="sm">Coba lagi</Button>

        <TextAction>Kembali</TextAction>
      </>
    ),
  },
};

const DismissibleExample = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <Button variant="secondary" onClick={() => setVisible(true)}>
        Tampilkan kembali
      </Button>
    );
  }

  return (
    <Alert
      severity="success"
      title="Data berhasil disimpan"
      dismissible
      onDismiss={() => setVisible(false)}
    >
      Perubahan data peserta telah tersimpan.
    </Alert>
  );
};

export const Dismissible: Story = {
  render: () => <DismissibleExample />,
};

export const LongContent: Story = {
  args: {
    severity: "warning",
    title:
      "Dokumen identitas perlu diperbaiki sebelum proses verifikasi administrasi dapat dilanjutkan",
    children:
      "Unggah ulang dokumen dengan pencahayaan yang cukup, seluruh bagian dokumen terlihat, teks dapat dibaca, dan file tidak terpotong. Informasi ini sengaja dibuat panjang untuk memvalidasi wrapping pada layar sempit.",
    action: (
      <Button variant="secondary" size="sm">
        Lihat panduan dokumen
      </Button>
    ),
    dismissible: true,
    onDismiss: () => undefined,
  },
};

export const DensityComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "24px",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <div key={density} data-density={density}>
          <p
            style={{
              margin: "0 0 8px",
            }}
          >
            {density}
          </p>

          <Alert severity="info" title="Informasi pendaftaran">
            Jadwal pendaftaran tersedia pada halaman kegiatan.
          </Alert>
        </div>
      ))}
    </div>
  ),
};

export const MobileActions: Story = {
  args: {
    severity: "warning",
    title: "Dokumen perlu diperbaiki",
    children: "Unggah ulang dokumen yang dapat dibaca dengan jelas.",
    action: (
      <>
        <Button size="sm">Unggah ulang</Button>

        <Button size="sm" variant="secondary">
          Lihat panduan
        </Button>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobilePrimary",
    },
  },
};
