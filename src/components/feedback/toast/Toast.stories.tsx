import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Button, TextAction } from "../../actions";
import { ToastRegion } from "../toast-region";
import { Toast } from "./Toast";

const meta = {
  title: "Components/Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  args: {
    duration: null,
    children: "Data berhasil disimpan.",
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Info: Story = {
  args: {
    severity: "info",
    title: "Pembayaran sedang diproses",
    children: "Status akan diperbarui setelah konfirmasi diterima.",
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
    title: "Dokumen perlu diperiksa",
    children: "Pastikan file dapat dibaca sebelum melanjutkan.",
  },
};

export const Danger: Story = {
  args: {
    severity: "danger",
    title: "Proses belum berhasil",
    children: "Periksa koneksi lalu coba kembali.",
  },
};

export const WithAction: Story = {
  args: {
    severity: "success",
    title: "Perubahan berhasil diterapkan",
    children: "Status peserta telah diperbarui.",
    action: <TextAction>Batalkan</TextAction>,
  },
};

const DismissibleExample = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return <Button onClick={() => setVisible(true)}>Tampilkan toast</Button>;
  }

  return (
    <Toast
      severity="success"
      title="Data berhasil disimpan"
      duration={null}
      onDismiss={() => setVisible(false)}
    >
      Perubahan data peserta telah tersimpan.
    </Toast>
  );
};

export const Dismissible: Story = {
  render: () => <DismissibleExample />,
};

const AutoDismissExample = () => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  const showToast = () => {
    setKey((current) => current + 1);
    setVisible(true);
  };

  return (
    <div>
      <Button onClick={showToast}>Simpan data</Button>

      {visible ? (
        <ToastRegion>
          <Toast
            key={key}
            severity="success"
            title="Data berhasil disimpan"
            duration={5000}
            onDismiss={() => setVisible(false)}
          >
            Hover atau fokuskan tombol tutup untuk menjeda auto-dismiss.
          </Toast>
        </ToastRegion>
      ) : null}
    </div>
  );
};

export const AutoDismiss: Story = {
  render: () => <AutoDismissExample />,
};

export const LongContent: Story = {
  args: {
    severity: "warning",
    title:
      "Dokumen identitas perlu diperbaiki sebelum proses dapat dilanjutkan",
    children:
      "Unggah ulang dokumen dengan pencahayaan yang cukup, seluruh bagian dokumen terlihat, dan teks dapat dibaca dengan jelas.",
    action: (
      <Button size="sm" variant="secondary">
        Lihat panduan
      </Button>
    ),
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
          <Toast
            severity="info"
            title={`Informasi â€” ${density}`}
            duration={null}
          >
            Status proses tersedia pada area ini.
          </Toast>
        </div>
      ))}
    </div>
  ),
};
