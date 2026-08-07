import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { FormField } from "../form-field";
import { SearchInput } from "./SearchInput";

const meta = {
  title: "Forms/SearchInput",
  component: SearchInput,
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
    "aria-label": "Cari peserta",
    placeholder: "Cari peserta",
  },
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    defaultValue: "Israa Ferdinan",
  },
};

export const Loading: Story = {
  args: {
    defaultValue: "Nautika",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Pencarian tidak tersedia",
  },
};

export const WithoutClearAction: Story = {
  args: {
    clearable: false,
    defaultValue: "Gelombang I",
  },
};

export const Controlled: Story = {
  args: {
    value: "",
  },
  render: () => {
    const [value, setValue] = useState("");

    return (
      <SearchInput
        aria-label="Cari peserta terkontrol"
        placeholder="Cari berdasarkan nama atau nomor pendaftaran"
        value={value}
        onClear={() => {
          setValue("");
        }}
        onValueChange={(nextValue) => {
          setValue(nextValue);
        }}
      />
    );
  },
};

export const InFormField: Story = {
  args: {
    "aria-label": "Cari Peserta",
  },
  render: () => (
    <FormField
      helperText="Cari berdasarkan nama atau Nomor Pendaftaran."
      htmlFor="participant-search"
      label="Cari Peserta"
    >
      <SearchInput
        aria-describedby="participant-search-helper"
        id="participant-search"
        name="participantSearch"
        placeholder="Nama atau Nomor Pendaftaran"
      />
    </FormField>
  ),
};

export const MobileStress: Story = {
  args: {
    placeholder: "Cari berdasarkan nama lengkap atau Nomor Pendaftaran",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
