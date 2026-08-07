import type { Meta, StoryObj } from "@storybook/react-vite";
import { GraduationCap } from "lucide-react";

import { FormField } from "../form-field";
import { Select } from "./Select";

const meta = {
  title: "Forms/Select",
  component: Select,
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
    "aria-label": "Program",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Pilih program</option>
        <option value="nautika">Nautika</option>
        <option value="teknika">Teknika</option>
        <option value="eto">Electro Technical Officer</option>
      </>
    ),
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: (
      <>
        <option value="">Pilih program</option>
        <option value="nautika">Nautika</option>
        <option value="teknika">Teknika</option>
      </>
    ),
    leadingIcon: <GraduationCap />,
  },
};

export const Disabled: Story = {
  args: {
    children: <option value="nautika">Nautika</option>,
    disabled: true,
    value: "nautika",
  },
};

export const Invalid: Story = {
  args: {
    children: (
      <>
        <option value="">Pilih program</option>
        <option value="nautika">Nautika</option>
      </>
    ),
    invalid: true,
  },
};

export const Sizes: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select aria-label={`Select ${size}`} key={size} size={size}>
          <option>{size}</option>
        </Select>
      ))}
    </div>
  ),
};

export const InFormField: Story = {
  args: {
    children: null,
  },
  render: () => (
    <FormField
      helperText="Pilih program yang tersedia pada gelombang ini."
      htmlFor="program-select"
      label="Program"
      required
    >
      <Select
        aria-describedby="program-select-helper"
        defaultValue=""
        id="program-select"
        name="program"
        required
      >
        <option disabled value="">
          Pilih program
        </option>
        <option value="nautika">Nautika</option>
        <option value="teknika">Teknika</option>
        <option value="eto">Electro Technical Officer</option>
      </Select>
    </FormField>
  ),
};

export const MobileStress: Story = {
  args: {
    children: (
      <>
        <option value="">Pilih program pendidikan dan pelatihan</option>
        <option value="eto">Electro Technical Officer</option>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
