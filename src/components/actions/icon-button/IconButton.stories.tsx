import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Eye,
  Menu,
  RefreshCw,
  Trash2,
  X,
} from "lucide-react";

import { IconButton } from "./IconButton";

const meta = {
  title: "Components/Actions/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "inline-radio",
      options: ["rounded", "circular"],
    },
    loading: {
      control: "boolean",
    },
    loadingLabel: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    icon: <Bell />,
    "aria-label": "Buka notifikasi",
    variant: "ghost",
    size: "md",
    shape: "rounded",
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const VariantComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-inline-md)",
      }}
    >
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        variant="primary"
      />

      <IconButton
        icon={<RefreshCw />}
        aria-label="Segarkan data"
        variant="secondary"
      />

      <IconButton icon={<Menu />} aria-label="Buka menu" variant="outline" />

      <IconButton
        icon={<Eye />}
        aria-label="Tampilkan password"
        variant="ghost"
      />

      <IconButton
        icon={<Trash2 />}
        aria-label="Hapus item"
        variant="destructive"
      />
    </div>
  ),
};

export const SizeComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-inline-md)",
      }}
    >
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi kecil"
        size="sm"
      />

      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi sedang"
        size="md"
      />

      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi besar"
        size="lg"
      />
    </div>
  ),
};

export const ShapeComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--space-inline-md)",
      }}
    >
      <IconButton
        icon={<X />}
        aria-label="Tutup dialog"
        variant="outline"
        shape="rounded"
      />

      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        variant="primary"
        shape="circular"
      />
    </div>
  ),
};

export const NavigationControls: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      aria-label="Navigasi halaman"
      style={{
        display: "flex",
        gap: "var(--space-inline-sm)",
      }}
    >
      <IconButton
        icon={<ChevronLeft />}
        aria-label="Halaman sebelumnya"
        variant="outline"
      />

      <IconButton
        icon={<ChevronRight />}
        aria-label="Halaman berikutnya"
        variant="outline"
      />
    </div>
  ),
};

export const StateComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-inline-md)",
      }}
    >
      <IconButton
        icon={<RefreshCw />}
        aria-label="Segarkan data"
        variant="outline"
      />

      <IconButton
        icon={<RefreshCw />}
        aria-label="Segarkan data"
        loading
        loadingLabel="Menyegarkan data"
        variant="outline"
      />

      <IconButton
        icon={<RefreshCw />}
        aria-label="Segarkan data"
        disabled
        variant="outline"
      />
    </div>
  ),
};

export const DensityComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "var(--space-stack-lg)",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <section
          key={density}
          data-density={density}
          style={{
            display: "grid",
            gap: "var(--space-stack-sm)",
            padding: "var(--space-section-sm)",
            border:
              "var(--primitive-border-width-default) solid var(--color-border-default)",
            borderRadius: "var(--primitive-radius-lg)",
          }}
        >
          <strong
            style={{
              textTransform: "capitalize",
            }}
          >
            {density}
          </strong>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-inline-md)",
            }}
          >
            <IconButton
              icon={<Bell />}
              aria-label={`Buka notifikasi ${density}`}
              size="sm"
            />

            <IconButton
              icon={<RefreshCw />}
              aria-label={`Segarkan data ${density}`}
              size="md"
            />

            <IconButton
              icon={<Menu />}
              aria-label={`Buka menu ${density}`}
              size="lg"
            />
          </div>
        </section>
      ))}
    </div>
  ),
};
