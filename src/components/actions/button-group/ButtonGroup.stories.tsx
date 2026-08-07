import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../button";
import { ButtonGroup } from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Actions/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
    direction: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "between", "stretch"],
    },
    stackOnMobile: {
      control: "boolean",
    },
    stretchOnMobile: {
      control: "boolean",
    },
  },
  args: {
    direction: "horizontal",
    align: "end",
    stackOnMobile: false,
    stretchOnMobile: false,
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Playground: Story = {
  render: (args) => (
    <ButtonGroup {...args} aria-label="Aksi formulir">
      <Button variant="secondary">Kembali</Button>

      <Button>Simpan Perubahan</Button>
    </ButtonGroup>
  ),
};

export const DialogActions: Story = {
  render: () => (
    <ButtonGroup aria-label="Aksi dialog" stackOnMobile stretchOnMobile>
      <Button variant="secondary">Batal</Button>

      <Button>Konfirmasi</Button>
    </ButtonGroup>
  ),
};

export const ParticipantMobileActions: Story = {
  render: () => (
    <div
      style={{
        width: "min(100%, 28rem)",
      }}
    >
      <ButtonGroup direction="vertical" aria-label="Aksi pembayaran">
        <Button size="lg" fullWidth>
          Lanjutkan Pembayaran
        </Button>

        <Button variant="secondary" fullWidth>
          Lihat Instruksi Pembayaran
        </Button>

        <Button variant="text" fullWidth>
          Kembali
        </Button>
      </ButtonGroup>
    </div>
  ),
};

export const DestructiveSeparation: Story = {
  render: () => (
    <ButtonGroup align="between" aria-label="Aksi pendaftaran">
      <Button variant="destructive">Batalkan Pendaftaran</Button>

      <ButtonGroup aria-label="Aksi utama">
        <Button variant="secondary">Kembali</Button>

        <Button>Simpan Perubahan</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
};

export const InternalToolbar: Story = {
  render: () => (
    <ButtonGroup align="start" aria-label="Toolbar peserta">
      <Button size="sm" variant="outline">
        Filter
      </Button>

      <Button size="sm" variant="outline">
        Unduh Laporan
      </Button>

      <Button size="sm">Claim Peserta</Button>
    </ButtonGroup>
  ),
};
