import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "../radio";
import { RadioGroup } from "./RadioGroup";

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    children: null,
    legend: "Jenis Kelamin",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <RadioGroup legend="Jenis Kelamin">
      <Radio label="Laki-laki" name="gender" value="male" />
      <Radio label="Perempuan" name="gender" value="female" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup legend="Jenis Kelamin" orientation="horizontal">
      <Radio label="Laki-laki" name="genderHorizontal" value="male" />
      <Radio label="Perempuan" name="genderHorizontal" value="female" />
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup
      helperText="Pilih satu program yang akan diikuti."
      id="program-choice"
      legend="Program"
      required
    >
      <Radio
        description="Program keahlian bagian dek kapal."
        id="program-nautika"
        label="Nautika"
        name="program"
        value="nautika"
      />
      <Radio
        description="Program keahlian bagian mesin kapal."
        id="program-teknika"
        label="Teknika"
        name="program"
        value="teknika"
      />
      <Radio
        description="Program keahlian kelistrikan dan elektronika kapal."
        id="program-eto"
        label="Electro Technical Officer"
        name="program"
        value="eto"
      />
    </RadioGroup>
  ),
};

export const Invalid: Story = {
  render: () => (
    <RadioGroup
      errorMessage="Pilih salah satu jenis kelamin."
      id="gender-required"
      invalid
      legend="Jenis Kelamin"
      required
    >
      <Radio invalid label="Laki-laki" name="genderRequired" value="male" />
      <Radio invalid label="Perempuan" name="genderRequired" value="female" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup disabled legend="Program">
      <Radio label="Nautika" name="disabledProgram" value="nautika" />
      <Radio label="Teknika" name="disabledProgram" value="teknika" />
    </RadioGroup>
  ),
};

export const MobileStress: Story = {
  render: () => (
    <RadioGroup
      helperText="Pilih satu program sesuai minat dan persyaratan kegiatan."
      legend="Program Pendidikan dan Pelatihan"
    >
      <Radio
        description="Program keahlian operasional bagian dek kapal."
        label="Nautika"
        name="mobileProgram"
        value="nautika"
      />
      <Radio
        description="Program keahlian operasional bagian mesin kapal."
        label="Teknika"
        name="mobileProgram"
        value="teknika"
      />
    </RadioGroup>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
