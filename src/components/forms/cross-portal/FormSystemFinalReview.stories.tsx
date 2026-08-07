import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../actions/button";
import { Checkbox } from "../checkbox";
import { FieldGroup } from "../field-group";
import { FileInput } from "../file-input";
import { FormActions } from "../form-actions";
import { FormField } from "../form-field";
import { FormSection } from "../form-section";
import { PasswordInput } from "../password-input";
import { Radio } from "../radio";
import { RadioGroup } from "../radio-group";
import { RequiredFieldsNote } from "../required-fields-note";
import { SearchInput } from "../search-input";
import { Select } from "../select";
import { Textarea } from "../textarea";
import { TextInput } from "../text-input";

const meta = {
  title: "Forms/Final Review",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentInventory: Story = {
  render: () => (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "960px",
        padding: "32px 20px",
      }}
    >
      <FormSection
        description="Review akhir seluruh reusable Form Components."
        title="Form Component Inventory"
      >
        <RequiredFieldsNote />

        <FieldGroup columns={2}>
          <FormField htmlFor="review-name" label="Nama Lengkap" required>
            <TextInput
              id="review-name"
              placeholder="Masukkan nama lengkap"
              required
            />
          </FormField>

          <FormField htmlFor="review-email" label="Alamat Email" required>
            <TextInput
              id="review-email"
              placeholder="nama@domain.com"
              required
              type="email"
            />
          </FormField>

          <FormField
            htmlFor="review-password"
            label="Password"
            requirementMessage="Gunakan minimal 8 karakter."
            required
          >
            <PasswordInput
              aria-describedby="review-password-requirement"
              id="review-password"
              required
            />
          </FormField>

          <FormField htmlFor="review-search" label="Cari Peserta">
            <SearchInput
              id="review-search"
              placeholder="Nama atau Nomor Pendaftaran"
            />
          </FormField>

          <FormField htmlFor="review-program" label="Program" required>
            <Select defaultValue="" id="review-program" required>
              <option disabled value="">
                Pilih program
              </option>
              <option value="nautika">Nautika</option>
              <option value="teknika">Teknika</option>
            </Select>
          </FormField>

          <FormField
            htmlFor="review-document"
            label="Dokumen Identitas"
            required
          >
            <FileInput
              accept=".pdf,.jpg,.jpeg,.png"
              id="review-document"
              required
            />
          </FormField>
        </FieldGroup>

        <FormField
          characterCount="0/500"
          helperText="Tuliskan alamat secara lengkap."
          htmlFor="review-address"
          label="Alamat Domisili"
          required
        >
          <Textarea
            aria-describedby="review-address-helper review-address-count"
            id="review-address"
            maxLength={500}
            required
          />
        </FormField>

        <RadioGroup legend="Jenis Kelamin" orientation="horizontal" required>
          <Radio label="Laki-laki" name="reviewGender" value="male" />
          <Radio label="Perempuan" name="reviewGender" value="female" />
        </RadioGroup>

        <Checkbox
          description="Periksa kembali sebelum finalisasi."
          id="review-agreement"
          label="Saya menyatakan seluruh data sudah benar"
          required
        />

        <FormActions divided>
          <Button type="button" variant="outline">
            Simpan Draft
          </Button>

          <Button type="submit" variant="primary">
            Finalisasi Data
          </Button>
        </FormActions>
      </FormSection>
    </div>
  ),
};
