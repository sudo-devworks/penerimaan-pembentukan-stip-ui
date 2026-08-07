import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressIndicator } from "./ProgressIndicator";

const meta = {
  title: "Components/Feedback/ProgressIndicator",
  component: ProgressIndicator,
  parameters: {
    layout: "padded",
  },
  args: {
    label: "Mengunggah dokumen",
    value: 65,
  },
} satisfies Meta<typeof ProgressIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Determinate: Story = {};

export const Indeterminate: Story = {
  args: {
    mode: "indeterminate",
    label: "Memproses pembayaran",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Mengunggah dokumen",
    value: 42,
    description: "Jangan menutup halaman selama proses berlangsung.",
  },
};

export const CustomValueText: Story = {
  args: {
    label: "Memproses data peserta",
    value: 2,
    min: 0,
    max: 4,
    valueText: "2 dari 4 tahap",
  },
};

export const HiddenVisibleLabel: Story = {
  args: {
    label: "Memuat peserta",
    value: 25,
    showLabel: false,
  },
};

export const LongLabel: Story = {
  args: {
    label:
      "Mengunggah dokumen identitas dan mempersiapkan data untuk proses verifikasi administrasi",
    value: 76,
    description:
      "Informasi ini dibuat panjang untuk menguji wrapping pada layar sempit.",
  },
};

export const DensityComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "28px",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <div key={density} data-density={density}>
          <ProgressIndicator
            label={`Mengunggah dokumen â€” ${density}`}
            value={65}
          />
        </div>
      ))}
    </div>
  ),
};

export const MobileLongContent: Story = {
  args: {
    label: "Mengunggah dokumen identitas untuk proses verifikasi",
    value: 68,
    description: "Jangan menutup halaman hingga proses selesai.",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobilePrimary",
    },
  },
};
