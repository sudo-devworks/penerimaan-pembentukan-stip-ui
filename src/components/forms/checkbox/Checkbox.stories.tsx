import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Saya menyetujui pernyataan",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Pilih seluruh dokumen",
  },
};

export const WithDescription: Story = {
  args: {
    description: "Pastikan seluruh data telah diperiksa sebelum melanjutkan.",
    id: "agreement",
    label: "Saya menyatakan data yang diisi sudah benar",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    label: "Saya menyetujui syarat dan ketentuan",
  },
};

export const LongContent: Story = {
  args: {
    description:
      "Pernyataan ini menjadi bagian dari proses finalisasi biodata dan tidak dapat diubah tanpa pembatalan finalisasi oleh petugas yang berwenang.",
    id: "long-agreement",
    label:
      "Saya menyatakan bahwa seluruh informasi dan dokumen yang saya berikan adalah benar serta dapat dipertanggungjawabkan",
  },
};

export const MobileStress: Story = {
  args: {
    description: "Periksa kembali seluruh informasi sebelum melanjutkan.",
    id: "mobile-agreement",
    label: "Saya menyatakan bahwa seluruh data yang saya masukkan sudah benar",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
