import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Download,
  FileSpreadsheet,
  FileText,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import { DropdownAction } from "./DropdownAction";

const meta: Meta<typeof DropdownAction> = {
  title: "Components/Actions/DropdownAction",
  component: DropdownAction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: false,
    },
    leadingIcon: {
      control: false,
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "text",
        "destructive",
      ],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    placement: {
      control: "inline-radio",
      options: ["start", "end"],
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
  args: {
    label: "Unduh",
    variant: "outline",
    size: "md",
    placement: "start",
    disabled: false,
    fullWidth: false,
    leadingIcon: <Download />,
    items: [
      {
        id: "pdf",
        label: "Unduh PDF",
        description: "Dokumen siap cetak.",
        icon: <FileText />,
        onSelect: () => undefined,
      },
      {
        id: "excel",
        label: "Unduh Excel",
        description: "Data dapat diolah kembali.",
        icon: <FileSpreadsheet />,
        onSelect: () => undefined,
      },
      {
        id: "csv",
        label: "Unduh CSV",
        icon: <FileSpreadsheet />,
        onSelect: () => undefined,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof DropdownAction>;

export const Playground: Story = {};

export const DownloadOptions: Story = {
  args: {
    label: "Unduh Laporan",
    leadingIcon: <Download />,
    menuLabel: "Pilihan format laporan",
  },
};

export const ParticipantActions: Story = {
  args: {
    label: "Tindakan Lainnya",
    leadingIcon: <MoreHorizontal />,
    placement: "end",
    items: [
      {
        id: "edit",
        label: "Ubah data peserta",
        icon: <Pencil />,
        onSelect: () => undefined,
      },
      {
        id: "separator-danger",
        type: "separator",
      },
      {
        id: "cancel",
        label: "Batalkan pendaftaran",
        description: "Tindakan memerlukan konfirmasi.",
        icon: <Trash2 />,
        destructive: true,
        onSelect: () => undefined,
      },
    ],
  },
};

export const MixedActionAndLink: Story = {
  args: {
    label: "Pilihan Dokumen",
    items: [
      {
        id: "preview",
        label: "Lihat pratinjau",
        icon: <FileText />,
        onSelect: () => undefined,
      },
      {
        id: "download",
        type: "link",
        label: "Buka dokumen",
        description: "Dibuka pada tab baru.",
        href: "https://example.com",
        target: "_blank",
        icon: <Download />,
      },
    ],
  },
};

export const DisabledItems: Story = {
  args: {
    label: "Unduh",
    items: [
      {
        id: "pdf",
        label: "Unduh PDF",
        icon: <FileText />,
        onSelect: () => undefined,
      },
      {
        id: "excel",
        label: "Unduh Excel",
        description: "Belum tersedia untuk laporan ini.",
        icon: <FileSpreadsheet />,
        disabled: true,
        onSelect: () => undefined,
      },
    ],
  },
};

export const MobileFullWidth: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        width: "min(100%, 24rem)",
      }}
    >
      <DropdownAction
        label="Unduh Laporan"
        leadingIcon={<Download />}
        fullWidth
        items={[
          {
            id: "pdf",
            label: "Unduh PDF",
            icon: <FileText />,
            onSelect: () => undefined,
          },
          {
            id: "excel",
            label: "Unduh Excel",
            icon: <FileSpreadsheet />,
            onSelect: () => undefined,
          },
        ]}
      />
    </div>
  ),
};
