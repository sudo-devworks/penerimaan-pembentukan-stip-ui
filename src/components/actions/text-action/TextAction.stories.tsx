import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronDown, FilterX, Pencil } from "lucide-react";

import { TextAction } from "./TextAction";

const meta: Meta<typeof TextAction> = {
  title: "Components/Actions/TextAction",
  component: TextAction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: "inline-radio",
      options: ["default", "subtle", "destructive"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
    leadingIcon: {
      control: false,
    },
    trailingIcon: {
      control: false,
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    children: "Lihat detail",
    variant: "default",
    size: "md",
    loading: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof TextAction>;

export const Playground: Story = {};

export const VariantComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-inline-lg)",
      }}
    >
      <TextAction>Lihat detail</TextAction>

      <TextAction variant="subtle">Tampilkan semua</TextAction>

      <TextAction variant="destructive">Hapus filter</TextAction>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-inline-lg)",
      }}
    >
      <TextAction leadingIcon={<Pencil />}>Ubah</TextAction>

      <TextAction variant="destructive" leadingIcon={<FilterX />}>
        Hapus filter
      </TextAction>

      <TextAction trailingIcon={<ChevronDown />}>Tampilkan semua</TextAction>
    </div>
  ),
};

export const StateComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-inline-lg)",
      }}
    >
      <TextAction>Lihat detail</TextAction>

      <TextAction disabled>Ubah</TextAction>

      <TextAction loading loadingLabel="Memuat...">
        Tampilkan semua
      </TextAction>
    </div>
  ),
};
