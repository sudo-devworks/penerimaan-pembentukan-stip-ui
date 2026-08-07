import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormField } from "../form-field";
import { FileInput } from "./FileInput";

const meta = {
  title: "Forms/FileInput",
  component: FileInput,
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
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AcceptedTypes: Story = {
  args: {
    accept: ".pdf,.jpg,.jpeg,.png",
    label: "Pilih dokumen",
  },
};

export const Multiple: Story = {
  args: {
    label: "Pilih beberapa file",
    multiple: true,
  },
};

export const Invalid: Story = {
  args: {
    "aria-describedby": "document-error",
    invalid: true,
    label: "Pilih ulang dokumen",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Upload tidak tersedia",
  },
};

export const InFormField: Story = {
  render: () => (
    <FormField
      helperText="Format PDF, JPG, atau PNG. Ukuran file mengikuti ketentuan kegiatan."
      htmlFor="identity-document"
      label="Dokumen Identitas"
      required
    >
      <FileInput
        accept=".pdf,.jpg,.jpeg,.png"
        aria-describedby="identity-document-helper"
        id="identity-document"
        label="Pilih dokumen identitas"
        name="identityDocument"
        required
      />
    </FormField>
  ),
};

export const InvalidInFormField: Story = {
  render: () => (
    <FormField
      errorMessage="Pilih dokumen dengan format PDF, JPG, atau PNG."
      htmlFor="invalid-document"
      invalid
      label="Dokumen Identitas"
      required
    >
      <FileInput
        accept=".pdf,.jpg,.jpeg,.png"
        aria-describedby="invalid-document-error"
        id="invalid-document"
        invalid
        label="Pilih ulang dokumen"
        name="invalidDocument"
        required
      />
    </FormField>
  ),
};

export const MobileStress: Story = {
  args: {
    emptyText: "Belum ada dokumen identitas yang dipilih",
    label: "Pilih dokumen identitas dari perangkat",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
