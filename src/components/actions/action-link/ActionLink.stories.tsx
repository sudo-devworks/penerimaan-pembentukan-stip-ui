import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, FileText } from "lucide-react";

import { ActionLink } from "./ActionLink";

const meta: Meta<typeof ActionLink> = {
  title: "Components/Actions/ActionLink",
  component: ActionLink,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["inline", "standalone", "navigation", "subtle"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    external: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    leadingIcon: {
      control: false,
    },
    trailingIcon: {
      control: false,
    },
  },
  args: {
    children: "Lihat informasi program",
    href: "/program",
    variant: "inline",
    size: "md",
    external: false,
    fullWidth: false,
  },
};

export default meta;

type Story = StoryObj<typeof ActionLink>;

export const Playground: Story = {};

export const VariantComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        justifyItems: "start",
        gap: "var(--space-stack-md)",
      }}
    >
      <p>
        Informasi pendaftaran tersedia pada{" "}
        <ActionLink href="/persyaratan">halaman persyaratan</ActionLink>.
      </p>

      <ActionLink
        href="/program"
        variant="standalone"
        trailingIcon={<ArrowRight />}
      >
        Lihat informasi program
      </ActionLink>

      <ActionLink href="/portal" variant="navigation">
        Portal Penerimaan STIP
      </ActionLink>

      <ActionLink href="/detail" variant="subtle">
        Lihat detail
      </ActionLink>
    </div>
  ),
};

export const ExternalLinkExample: Story = {
  args: {
    children: "Buka situs resmi STIP",
    href: "https://example.com",
    external: true,
    target: "_blank",
  },
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
      <ActionLink href="/dokumen" leadingIcon={<FileText />}>
        Lihat dokumen
      </ActionLink>

      <ActionLink href="/program" trailingIcon={<ArrowRight />}>
        Lihat program
      </ActionLink>
    </div>
  ),
};

export const LongLabelStressTest: Story = {
  render: () => (
    <div
      style={{
        width: "min(100%, 20rem)",
      }}
    >
      <ActionLink
        href="/pembayaran"
        variant="standalone"
        fullWidth
        trailingIcon={<ArrowRight />}
      >
        Lihat Instruksi Pembayaran dan Ketentuan Pendaftaran
      </ActionLink>
    </div>
  ),
};
