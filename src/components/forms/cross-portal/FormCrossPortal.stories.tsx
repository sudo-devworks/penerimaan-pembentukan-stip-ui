import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Button } from "../../actions/button";
import { Checkbox } from "../checkbox";
import { ErrorSummary } from "../error-summary";
import { FieldGroup } from "../field-group";
import { FileInput } from "../file-input";
import { FormActions } from "../form-actions";
import { FormField } from "../form-field";
import { FormSection } from "../form-section";
import { Radio } from "../radio";
import { RadioGroup } from "../radio-group";
import { RequiredFieldsNote } from "../required-fields-note";
import { SearchInput } from "../search-input";
import { Select } from "../select";
import { Textarea } from "../textarea";
import { TextInput } from "../text-input";

const meta = {
  title: "Forms/Cross-Portal Validation",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PublicWebsite: Story = {
  render: () => (
    <div
      data-density="comfortable"
      style={{
        margin: "0 auto",
        maxWidth: "720px",
        padding: "32px 20px",
      }}
    >
      <FormSection
        description="Isi data berikut untuk menerima informasi kegiatan."
        title="Permintaan Informasi"
      >
        <RequiredFieldsNote />

        <FieldGroup columns={2}>
          <FormField htmlFor="public-name" label="Nama Lengkap" required>
            <TextInput id="public-name" name="name" required />
          </FormField>

          <FormField
            helperText="Gunakan email aktif."
            htmlFor="public-email"
            label="Alamat Email"
            required
          >
            <TextInput
              aria-describedby="public-email-helper"
              id="public-email"
              name="email"
              required
              type="email"
            />
          </FormField>
        </FieldGroup>

        <FormField htmlFor="public-message" label="Pesan" optional>
          <Textarea id="public-message" name="message" />
        </FormField>

        <FormActions>
          <Button type="submit" variant="primary">
            Kirim Permintaan
          </Button>
        </FormActions>
      </FormSection>
    </div>
  ),
};

export const PortalPeserta: Story = {
  render: () => (
    <div
      data-density="comfortable"
      style={{
        margin: "0 auto",
        maxWidth: "840px",
        padding: "32px 20px",
      }}
    >
      <form>
        <FormSection
          description="Lengkapi biodata sesuai dokumen identitas."
          title="Biodata Peserta"
        >
          <RequiredFieldsNote />

          <FieldGroup columns={2}>
            <FormField htmlFor="participant-name" label="Nama Lengkap" required>
              <TextInput
                autoComplete="name"
                id="participant-name"
                name="fullName"
                required
              />
            </FormField>

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

            <FormField htmlFor="participant-program" label="Program" required>
              <Select
                defaultValue=""
                id="participant-program"
                name="program"
                required
              >
                <option disabled value="">
                  Pilih program
                </option>
                <option value="nautika">Nautika</option>
                <option value="teknika">Teknika</option>
              </Select>
            </FormField>

            <FormField
              htmlFor="participant-school"
              label="Asal Sekolah"
              required
            >
              <TextInput id="participant-school" name="school" required />
            </FormField>
          </FieldGroup>

          <RadioGroup
            helperText="Pilih sesuai data identitas."
            id="participant-gender"
            legend="Jenis Kelamin"
            orientation="horizontal"
            required
          >
            <Radio label="Laki-laki" name="gender" value="male" />
            <Radio label="Perempuan" name="gender" value="female" />
          </RadioGroup>

          <FormField
            htmlFor="participant-document"
            label="Dokumen Identitas"
            required
          >
            <FileInput
              accept=".pdf,.jpg,.jpeg,.png"
              id="participant-document"
              name="identityDocument"
              required
            />
          </FormField>

          <Checkbox
            description="Data akan dikunci setelah finalisasi."
            id="participant-agreement"
            label="Saya menyatakan seluruh data sudah benar"
            name="agreement"
            required
          />

          <FormActions divided>
            <Button type="button" variant="outline">
              Simpan Draft
            </Button>
            <Button type="submit" variant="primary">
              Finalisasi Biodata
            </Button>
          </FormActions>
        </FormSection>
      </form>
    </div>
  ),
};

export const PortalInternal: Story = {
  render: () => {
    const [search, setSearch] = useState("");

    return (
      <div
        data-density="compact"
        style={{
          margin: "0 auto",
          maxWidth: "1120px",
          padding: "24px",
        }}
      >
        <FormSection
          description="Filter dan catat hasil verifikasi peserta."
          title="Verifikasi Administrasi"
        >
          <FieldGroup columns={3}>
            <FormField htmlFor="internal-search" label="Cari Peserta">
              <SearchInput
                id="internal-search"
                placeholder="Nama atau Nomor Pendaftaran"
                value={search}
                onClear={() => {
                  setSearch("");
                }}
                onValueChange={(value) => {
                  setSearch(value);
                }}
              />
            </FormField>

            <FormField htmlFor="internal-program" label="Program">
              <Select defaultValue="" id="internal-program">
                <option value="">Semua program</option>
                <option value="nautika">Nautika</option>
                <option value="teknika">Teknika</option>
              </Select>
            </FormField>

            <FormField htmlFor="internal-status" label="Status">
              <Select defaultValue="pending" id="internal-status">
                <option value="pending">Menunggu Verifikasi</option>
                <option value="accepted">Diterima</option>
                <option value="suspended">Ditangguhkan</option>
              </Select>
            </FormField>
          </FieldGroup>

          <FormField
            htmlFor="internal-note"
            label="Catatan Verifikasi"
            optional
          >
            <Textarea id="internal-note" name="verificationNote" />
          </FormField>

          <FormActions align="between" divided>
            <Button type="button" variant="outline">
              Kembali
            </Button>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <Button type="button" variant="destructive">
                Tolak Dokumen
              </Button>

              <Button type="button" variant="primary">
                Terima Dokumen
              </Button>
            </div>
          </FormActions>
        </FormSection>
      </div>
    );
  },
};

export const ValidationFailure: Story = {
  render: () => (
    <div
      data-density="comfortable"
      style={{
        margin: "0 auto",
        maxWidth: "720px",
        padding: "32px 20px",
      }}
    >
      <form>
        <ErrorSummary
          items={[
            {
              fieldId: "failure-email",
              id: "email",
              message: "Masukkan alamat email yang valid.",
            },
            {
              fieldId: "failure-program",
              id: "program",
              message: "Pilih program.",
            },
          ]}
        />

        <div style={{ height: "24px" }} />

        <FormSection title="Data Pendaftaran">
          <FormField
            errorMessage="Masukkan alamat email dengan format nama@domain.com."
            htmlFor="failure-email"
            invalid
            label="Alamat Email"
            required
          >
            <TextInput
              aria-describedby="failure-email-error"
              aria-invalid="true"
              id="failure-email"
              invalid
              type="email"
            />
          </FormField>

          <FormField
            errorMessage="Pilih program."
            htmlFor="failure-program"
            invalid
            label="Program"
            required
          >
            <Select
              aria-describedby="failure-program-error"
              defaultValue=""
              id="failure-program"
              invalid
            >
              <option disabled value="">
                Pilih program
              </option>
              <option value="nautika">Nautika</option>
            </Select>
          </FormField>
        </FormSection>
      </form>
    </div>
  ),
};
