import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../actions/button";
import { FormField } from "../form-field";
import { Select } from "../select";
import { TextInput } from "../text-input";
import { FieldGroup } from "../field-group";
import { FormActions } from "../form-actions";
import { FormSection } from "./FormSection";

const meta = {
  title: "Forms/FormSection",
  component: FormSection,
  tags: ["autodocs"],
  args: {
    children: null,
  },
} satisfies Meta<typeof FormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <FormSection
      description="Lengkapi informasi dasar sesuai dokumen identitas."
      title="Data Pribadi"
    >
      <FieldGroup columns={2}>
        <FormField htmlFor="full-name" label="Nama Lengkap" required>
          <TextInput id="full-name" name="fullName" required />
        </FormField>

        <FormField htmlFor="nik" label="Nomor Induk Kependudukan" required>
          <TextInput id="nik" inputMode="numeric" name="nik" required />
        </FormField>

        <FormField htmlFor="birth-place" label="Tempat Lahir" required>
          <TextInput id="birth-place" name="birthPlace" required />
        </FormField>

        <FormField htmlFor="program" label="Program" required>
          <Select defaultValue="" id="program" name="program" required>
            <option disabled value="">
              Pilih program
            </option>
            <option value="nautika">Nautika</option>
            <option value="teknika">Teknika</option>
            <option value="eto">Electro Technical Officer</option>
          </Select>
        </FormField>
      </FieldGroup>
    </FormSection>
  ),
};

export const WithHeaderAction: Story = {
  render: () => (
    <FormSection
      actions={
        <Button size="sm" variant="outline">
          Ubah Data
        </Button>
      }
      description="Data ini digunakan dalam proses pendaftaran."
      title="Data Pendaftaran"
    >
      <FormField htmlFor="registration-number" label="Nomor Pendaftaran">
        <TextInput id="registration-number" readOnly value="STIP-2026-000001" />
      </FormField>
    </FormSection>
  ),
};

export const CompleteFormComposition: Story = {
  render: () => (
    <form
      style={{
        display: "grid",
        gap: "32px",
        width: "min(100%, 52rem)",
      }}
    >
      <FormSection
        description="Lengkapi data sesuai dokumen identitas."
        title="Data Pribadi"
      >
        <FieldGroup columns={2}>
          <FormField htmlFor="participant-name" label="Nama Lengkap" required>
            <TextInput id="participant-name" name="participantName" required />
          </FormField>

          <FormField htmlFor="participant-email" label="Alamat Email" required>
            <TextInput
              autoComplete="email"
              id="participant-email"
              name="participantEmail"
              required
              type="email"
            />
          </FormField>
        </FieldGroup>
      </FormSection>

      <FormActions divided>
        <Button type="button" variant="outline">
          Batal
        </Button>

        <Button type="submit" variant="primary">
          Simpan Data
        </Button>
      </FormActions>
    </form>
  ),
};

export const MobileStress: Story = {
  render: () => (
    <FormSection
      description="Lengkapi informasi berikut sebelum melanjutkan proses pendaftaran."
      title="Data Pribadi Peserta"
    >
      <FieldGroup columns={2}>
        <FormField htmlFor="mobile-name" label="Nama Lengkap">
          <TextInput id="mobile-name" />
        </FormField>

        <FormField htmlFor="mobile-email" label="Alamat Email">
          <TextInput id="mobile-email" type="email" />
        </FormField>
      </FieldGroup>

      <FormActions divided>
        <Button variant="outline">Kembali</Button>
        <Button variant="primary">Simpan dan Lanjutkan</Button>
      </FormActions>
    </FormSection>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
