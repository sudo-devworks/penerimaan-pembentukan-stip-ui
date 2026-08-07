import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoadingMessage } from "./LoadingMessage";

const meta = {
  title: "Components/Feedback/LoadingMessage",
  component: LoadingMessage,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "Memuat data pesertaâ€¦",
  },
} satisfies Meta<typeof LoadingMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    title: "Memproses pembayaranâ€¦",
    description: "Status akan diperbarui setelah konfirmasi diterima.",
  },
};

export const UploadProcess: Story = {
  args: {
    title: "Mengunggah dokumenâ€¦",
    description: "Jangan menutup halaman selama proses berlangsung.",
  },
};

export const LongContent: Story = {
  args: {
    title: "Memuat data peserta dan informasi proses administrasiâ€¦",
    description:
      "Proses ini dapat membutuhkan waktu karena sistem sedang mengambil beberapa informasi yang diperlukan untuk menampilkan halaman.",
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
          <LoadingMessage
            title={`Memuat data â€” ${density}`}
            description="Mohon tunggu sebentar."
          />
        </div>
      ))}
    </div>
  ),
};
