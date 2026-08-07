import type { Meta, StoryObj } from "@storybook/react-vite";

import { Toast } from "../toast";
import { ToastRegion } from "./ToastRegion";

const meta = {
  title: "Components/Feedback/ToastRegion",
  component: ToastRegion,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ToastRegion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopRight: Story = {
  args: {
    placement: "top-right",
    children: (
      <Toast severity="success" title="Data berhasil disimpan" duration={null}>
        Perubahan data peserta telah tersimpan.
      </Toast>
    ),
  },
};

export const TopCenter: Story = {
  args: {
    placement: "top-center",
    children: (
      <Toast severity="info" title="Pembayaran sedang diproses" duration={null}>
        Status akan diperbarui setelah konfirmasi diterima.
      </Toast>
    ),
  },
};

export const BottomRight: Story = {
  args: {
    placement: "bottom-right",
    children: (
      <Toast severity="warning" title="Dokumen perlu diperiksa" duration={null}>
        Pastikan dokumen dapat dibaca dengan jelas.
      </Toast>
    ),
  },
};

export const Stack: Story = {
  args: {
    placement: "top-right",
    children: (
      <>
        <Toast
          severity="success"
          title="Data berhasil disimpan"
          duration={null}
        >
          Perubahan data peserta telah tersimpan.
        </Toast>

        <Toast
          severity="warning"
          title="Sebagian proses perlu diperiksa"
          duration={null}
        >
          Tinjau kembali data sebelum melanjutkan.
        </Toast>

        <Toast
          severity="danger"
          title="Satu proses belum berhasil"
          duration={null}
        >
          Periksa koneksi lalu coba kembali.
        </Toast>
      </>
    ),
  },
};

export const MobileStack: Story = {
  args: {
    placement: "top-right",
    children: (
      <>
        <Toast
          severity="success"
          title="Data berhasil disimpan"
          duration={null}
        >
          Perubahan telah tersimpan.
        </Toast>

        <Toast
          severity="info"
          title="Pembayaran sedang diproses"
          duration={null}
        >
          Status akan diperbarui secara otomatis.
        </Toast>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobilePrimary",
    },
  },
};
