import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "../text-input";

import { FormField } from "./FormField";

const meta = {
  title: "Forms/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "min(100%, 32rem)" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

const inputStyle: CSSProperties = {
  boxSizing: "border-box",
  minHeight: "44px",
  width: "100%",
  paddingInline: "12px",
};

export const Default: Story = {
  args: {
    htmlFor: "full-name",
    label: "Nama Lengkap",
    children: <TextInput id="full-name" name="fullName" type="text" />,
  },
};

export const Required: Story = {
  args: {
    htmlFor: "email",
    label: "Alamat Email",
    helperText: "Gunakan email aktif untuk menerima notifikasi pendaftaran.",
    required: true,
    children: (
      <input
        aria-describedby="email-helper"
        autoComplete="email"
        id="email"
        name="email"
        required
        style={inputStyle}
        type="email"
      />
    ),
  },
};

export const Optional: Story = {
  args: {
    htmlFor: "verification-note",
    label: "Catatan Verifikasi",
    optional: true,
    children: (
      <textarea
        id="verification-note"
        name="verificationNote"
        style={{
          ...inputStyle,
          minHeight: "120px",
          paddingBlock: "12px",
        }}
      />
    ),
  },
};

export const WithRequirement: Story = {
  args: {
    htmlFor: "password",
    label: "Password",
    requirementMessage:
      "Gunakan minimal 8 karakter dengan kombinasi huruf dan angka.",
    required: true,
    children: (
      <input
        aria-describedby="password-requirement"
        id="password"
        name="password"
        required
        style={inputStyle}
        type="password"
      />
    ),
  },
};

export const Invalid: Story = {
  args: {
    errorMessage: "Nomor Induk Kependudukan harus terdiri dari 16 digit.",
    htmlFor: "nik",
    invalid: true,
    label: "Nomor Induk Kependudukan",
    required: true,
    children: (
      <input
        aria-describedby="nik-error"
        aria-invalid="true"
        id="nik"
        inputMode="numeric"
        name="nik"
        required
        style={inputStyle}
        type="text"
      />
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText:
      "Field ini belum dapat diubah karena biodata telah difinalisasi.",
    htmlFor: "program",
    label: "Program",
    children: (
      <input
        disabled
        id="program"
        name="program"
        style={inputStyle}
        type="text"
        value="Nautika"
      />
    ),
  },
};

export const ReadOnly: Story = {
  args: {
    helperText: "Nomor pendaftaran tetap dapat dipilih dan disalin.",
    htmlFor: "registration-number",
    label: "Nomor Pendaftaran",
    children: (
      <input
        id="registration-number"
        name="registrationNumber"
        readOnly
        style={inputStyle}
        type="text"
        value="STIP-2026-000001"
      />
    ),
  },
};

export const WithCharacterCount: Story = {
  args: {
    characterCount: "120/500",
    characterCountId: "address-count",
    helperText: "Tuliskan alamat domisili secara lengkap.",
    htmlFor: "address",
    label: "Alamat Domisili",
    children: (
      <textarea
        aria-describedby="address-helper address-count"
        id="address"
        maxLength={500}
        name="address"
        style={{
          ...inputStyle,
          minHeight: "120px",
          paddingBlock: "12px",
        }}
      />
    ),
  },
};

export const LongContent: Story = {
  args: {
    errorMessage:
      "Masukkan alamat email aktif dengan format nama@domain.com agar notifikasi pendaftaran, perubahan dokumen, jadwal seleksi, dan pengumuman hasil dapat dikirimkan dengan benar.",
    helperText:
      "Alamat email ini akan menjadi identitas akun dan digunakan untuk seluruh komunikasi selama proses penerimaan.",
    htmlFor: "long-email",
    invalid: true,
    label:
      "Alamat Email Peserta yang Digunakan untuk Menerima Informasi Pendaftaran",
    required: true,
    children: (
      <input
        aria-describedby="long-email-helper long-email-error"
        aria-invalid="true"
        id="long-email"
        name="longEmail"
        required
        style={inputStyle}
        type="email"
      />
    ),
  },
};

export const DensityComparison: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "32px",
        width: "min(100%, 36rem)",
      }}
    >
      <div data-density="comfortable">
        <FormField
          helperText="Density nyaman untuk Portal Peserta."
          htmlFor="comfortable-field"
          label="Comfortable"
        >
          <input id="comfortable-field" style={inputStyle} type="text" />
        </FormField>
      </div>

      <div data-density="default">
        <FormField
          helperText="Density default untuk form umum."
          htmlFor="default-field"
          label="Default"
        >
          <input id="default-field" style={inputStyle} type="text" />
        </FormField>
      </div>

      <div data-density="compact">
        <FormField
          helperText="Density compact untuk workspace internal."
          htmlFor="compact-field"
          label="Compact"
        >
          <input id="compact-field" style={inputStyle} type="text" />
        </FormField>
      </div>
    </div>
  ),
};

export const MobileStress: Story = {
  args: {
    characterCount: "16/16",
    errorMessage: "Nomor Induk Kependudukan harus terdiri dari 16 digit.",
    helperText: "Masukkan nomor sesuai Kartu Tanda Penduduk.",
    htmlFor: "mobile-nik",
    invalid: true,
    label: "Nomor Induk Kependudukan",
    required: true,
    children: (
      <input
        aria-describedby="mobile-nik-helper mobile-nik-error mobile-nik-count"
        aria-invalid="true"
        id="mobile-nik"
        inputMode="numeric"
        name="mobileNik"
        required
        style={inputStyle}
        type="text"
      />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
