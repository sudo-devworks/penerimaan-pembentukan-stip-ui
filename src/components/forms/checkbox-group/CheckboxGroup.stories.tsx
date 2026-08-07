import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../checkbox";
import { CheckboxGroup } from "./CheckboxGroup";

const meta = {
  title: "Forms/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  args: {
    children: null,
    legend: "Dokumen yang tersedia",
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <CheckboxGroup legend="Kategori dokumen">
      <Checkbox
        label="Dokumen identitas"
        name="documentCategories"
        value="identity"
      />
      <Checkbox
        label="Dokumen pendidikan"
        name="documentCategories"
        value="education"
      />
      <Checkbox
        label="Dokumen kesehatan"
        name="documentCategories"
        value="health"
      />
    </CheckboxGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <CheckboxGroup legend="Status peserta" orientation="horizontal">
      <Checkbox label="Aktif" value="active" />
      <Checkbox label="Lulus" value="passed" />
      <Checkbox label="Tidak Lulus" value="failed" />
    </CheckboxGroup>
  ),
};

export const WithHelper: Story = {
  render: () => (
    <CheckboxGroup
      helperText="Pilih satu atau lebih kategori."
      id="document-category"
      legend="Kategori dokumen"
    >
      <Checkbox label="Identitas" />
      <Checkbox label="Pendidikan" />
    </CheckboxGroup>
  ),
};

export const Invalid: Story = {
  render: () => (
    <CheckboxGroup
      errorMessage="Pilih minimal satu kategori dokumen."
      id="required-category"
      invalid
      legend="Kategori dokumen"
      required
    >
      <Checkbox invalid label="Identitas" />
      <Checkbox invalid label="Pendidikan" />
    </CheckboxGroup>
  ),
};
