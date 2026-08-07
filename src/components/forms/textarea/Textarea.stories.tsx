import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormField } from "../form-field";
import { Textarea } from "./Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "min(32rem, 100%)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    "aria-label": "Textarea contoh",
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Tuliskan alamat domisili secara lengkap",
  },
};

export const Filled: Story = {
  args: {
    defaultValue: "Jl. Maritim No. 1, Cilincing, Jakarta Utara.",
  },
};

export const Invalid: Story = {
  args: {
    defaultValue: "Alamat terlalu singkat",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Data tidak dapat diubah setelah finalisasi.",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "Catatan ini tetap dapat dipilih dan disalin.",
  },
};

export const InFormField: Story = {
  args: {
    "aria-label": "Alamat Domisili",
  },
  render: () => (
    <FormField
      characterCount="0/500"
      helperText="Tuliskan alamat domisili secara lengkap."
      htmlFor="domicile-address"
      label="Alamat Domisili"
      required
    >
      <Textarea
        aria-describedby="domicile-address-helper domicile-address-count"
        id="domicile-address"
        maxLength={500}
        name="domicileAddress"
        required
      />
    </FormField>
  ),
};

export const LongContent: Story = {
  args: {
    defaultValue:
      "Peserta diminta memperbarui dokumen karena informasi pada berkas sebelumnya belum terbaca dengan jelas. Pastikan dokumen baru menampilkan seluruh bagian identitas dan tidak terpotong.",
  },
};

export const MobileStress: Story = {
  args: {
    placeholder:
      "Tuliskan alamat domisili secara lengkap termasuk jalan, nomor rumah, kelurahan, kecamatan, kota, dan kode pos.",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
