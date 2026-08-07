import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, TextAction } from "../actions";
import {
  Alert,
  ErrorState,
  InlineAlert,
  LoadingMessage,
  ProgressIndicator,
  Toast,
} from "./index";

const meta = {
  title: "Components/Feedback/Accessibility Review",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const KeyboardActions: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "24px",
        maxWidth: "720px",
      }}
    >
      <Alert
        severity="warning"
        title="Dokumen perlu diperbaiki"
        action={
          <>
            <Button size="sm">Unggah ulang</Button>

            <TextAction>Lihat panduan</TextAction>
          </>
        }
        dismissible
        onDismiss={() => undefined}
      >
        Gunakan file yang dapat dibaca dengan jelas.
      </Alert>

      <ErrorState
        variant="compact"
        title="Data peserta belum dapat dimuat"
        description="Periksa koneksi lalu coba kembali."
        primaryAction={<Button size="sm">Coba lagi</Button>}
        secondaryAction={<TextAction>Kembali</TextAction>}
      />

      <Toast
        severity="success"
        title="Data berhasil disimpan"
        duration={null}
        onDismiss={() => undefined}
        action={<TextAction>Batalkan</TextAction>}
      >
        Perubahan data peserta telah tersimpan.
      </Toast>
    </div>
  ),
};

export const AnnouncementBehavior: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "24px",
        maxWidth: "720px",
      }}
    >
      <Alert severity="info">Alert statis tanpa live region.</Alert>

      <InlineAlert severity="success" announcement="polite">
        Dokumen berhasil dipilih.
      </InlineAlert>

      <LoadingMessage title="Memuat data peserta…" />

      <Toast severity="danger" announcement="assertive" duration={null}>
        Proses gagal dijalankan.
      </Toast>
    </div>
  ),
};

export const ProgressSemantics: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "32px",
        maxWidth: "720px",
      }}
    >
      <ProgressIndicator
        label="Mengunggah dokumen"
        value={65}
        valueText="65 persen"
      />

      <ProgressIndicator label="Memproses pembayaran" mode="indeterminate" />
    </div>
  ),
};

export const LongContentAndWrapping: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "24px",
        maxWidth: "720px",
      }}
    >
      <Alert
        severity="warning"
        title="Dokumen identitas perlu diperbaiki sebelum proses verifikasi administrasi dapat dilanjutkan"
        dismissible
        onDismiss={() => undefined}
        action={
          <>
            <Button size="sm">Unggah ulang dokumen</Button>

            <Button size="sm" variant="secondary">
              Lihat panduan dokumen
            </Button>
          </>
        }
      >
        Unggah ulang dokumen dengan pencahayaan yang cukup, seluruh bagian
        dokumen terlihat, teks dapat dibaca, dan file tidak terpotong.
      </Alert>

      <ProgressIndicator
        label="Mengunggah dokumen identitas dan mempersiapkan data untuk proses verifikasi administrasi"
        value={76}
        description="Informasi ini sengaja dibuat panjang untuk memvalidasi wrapping pada layar sempit."
      />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const DensityReview: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "32px",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <section
          key={density}
          data-density={density}
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <strong>{density}</strong>

          <Alert severity="info" title="Informasi pendaftaran">
            Informasi proses tersedia pada area ini.
          </Alert>

          <InlineAlert severity="warning">
            Dokumen perlu diperbaiki.
          </InlineAlert>

          <Toast severity="success" duration={null}>
            Data berhasil disimpan.
          </Toast>
        </section>
      ))}
    </div>
  ),
};
