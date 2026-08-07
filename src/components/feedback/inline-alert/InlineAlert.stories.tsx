import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Button, TextAction } from "../../actions";
import { InlineAlert } from "./InlineAlert";

const meta = {
  title: "Components/Feedback/InlineAlert",
  component: InlineAlert,
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Informasi kontekstual tersedia pada area ini.",
  },
} satisfies Meta<typeof InlineAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const UploadSuccess: Story = {
  args: {
    severity: "success",
    title: "Dokumen berhasil dipilih",
    children: "File siap diunggah setelah formulir disimpan.",
  },
};

export const PaymentProcessing: Story = {
  args: {
    severity: "info",
    title: "Pembayaran sedang diproses",
    children: "Status pembayaran akan diperbarui setelah konfirmasi diterima.",
  },
};

export const DocumentWarning: Story = {
  args: {
    severity: "warning",
    title: "Dokumen perlu diperbaiki",
    children: "Gunakan dokumen yang dapat dibaca dengan jelas.",
    action: <TextAction>Pilih ulang</TextAction>,
  },
};

export const RequestFailed: Story = {
  args: {
    severity: "danger",
    title: "Dokumen belum berhasil diunggah",
    children: "Periksa koneksi lalu coba kembali.",
    action: <Button size="sm">Coba lagi</Button>,
  },
};

const DismissibleExample = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <InlineAlert
      severity="success"
      dismissible
      onDismiss={() => setVisible(false)}
    >
      Dokumen berhasil dipilih.
    </InlineAlert>
  );
};

export const Dismissible: Story = {
  render: () => <DismissibleExample />,
};

export const DensityComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "20px",
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

          <InlineAlert severity="warning" title="Dokumen perlu diperbaiki">
            Gunakan file yang dapat dibaca dengan jelas.
          </InlineAlert>
        </div>
      ))}
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    severity: "info",
    title: "Status pembayaran masih menunggu konfirmasi sistem",
    children:
      "Proses konfirmasi dapat membutuhkan waktu. Jangan membuat pembayaran baru selama status sebelumnya masih diproses agar tidak menimbulkan transaksi ganda.",
    dismissible: true,
    onDismiss: () => undefined,
  },
};
