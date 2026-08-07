import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, User } from "lucide-react";

import { FormField } from "../form-field";
import { TextInput } from "./TextInput";

const meta = {
  title: "Forms/TextInput",
  component: TextInput,
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
    "aria-label": "Input contoh",
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Masukkan nama lengkap",
  },
};

export const Email: Story = {
  args: {
    autoComplete: "email",
    leadingIcon: <Mail />,
    placeholder: "nama@domain.com",
    type: "email",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <User />,
    placeholder: "Nama lengkap",
  },
};

export const Sizes: Story = {
  args: {
    size: "md",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >
      <TextInput aria-label="Small input" placeholder="Small" size="sm" />
      <TextInput aria-label="Medium input" placeholder="Medium" size="md" />
      <TextInput aria-label="Large input" placeholder="Large" size="lg" />
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    defaultValue: "1234567890",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Tidak dapat diubah",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "STIP-2026-000001",
  },
};

export const InFormField: Story = {
  args: {
    "aria-label": "Alamat Email",
  },
  render: () => (
    <FormField
      helperText="Gunakan email aktif untuk menerima notifikasi pendaftaran."
      htmlFor="participant-email"
      label="Alamat Email"
      required
    >
      <TextInput
        aria-describedby="participant-email-helper"
        autoComplete="email"
        id="participant-email"
        name="email"
        required
        type="email"
      />
    </FormField>
  ),
};

export const InvalidInFormField: Story = {
  args: {
    "aria-label": "Nomor Induk Kependudukan",
  },
  render: () => (
    <FormField
      errorMessage="Nomor Induk Kependudukan harus terdiri dari 16 digit."
      htmlFor="participant-nik"
      invalid
      label="Nomor Induk Kependudukan"
      required
    >
      <TextInput
        aria-describedby="participant-nik-error"
        id="participant-nik"
        inputMode="numeric"
        invalid
        name="nik"
        required
      />
    </FormField>
  ),
};

export const MobileStress: Story = {
  args: {
    "aria-label": "Nama Lengkap",
    placeholder: "Masukkan nama lengkap sesuai dokumen identitas",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
