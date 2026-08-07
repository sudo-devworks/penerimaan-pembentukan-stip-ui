import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus } from "lucide-react";

import { Button } from "../../actions/button";
import { ButtonGroup } from "../../actions/button-group";
import { SectionHeader } from "./SectionHeader";

const meta = {
  title: "Composite/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  args: {
    title: "Dokumen Persyaratan",
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithDescription: Story = {
  args: {
    description:
      "Atur dokumen wajib, format file, dan ketentuan verifikasi peserta.",
  },
};

export const WithActions: Story = {
  render: () => (
    <SectionHeader
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button variant="outline">Atur Urutan</Button>
          <Button leadingIcon={<Plus aria-hidden />} variant="primary">
            Tambah Dokumen
          </Button>
        </ButtonGroup>
      }
      description="Atur dokumen wajib, format file, dan ketentuan verifikasi peserta."
      metadata={
        <>
          <span>8 dokumen wajib</span>
          <span>2 dokumen opsional</span>
        </>
      }
      title="Dokumen Persyaratan"
    />
  ),
};

export const Divided: Story = {
  args: {
    description: "Ringkasan informasi utama peserta.",
    divided: true,
    metadata: <span>Diperbarui 5 Agustus 2026</span>,
    title: "Informasi Peserta",
  },
};

export const MobileStress: Story = {
  render: () => (
    <SectionHeader
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button variant="outline">Lihat Riwayat</Button>
          <Button variant="primary">Perbarui Status</Button>
        </ButtonGroup>
      }
      description="Periksa seluruh dokumen peserta dan tentukan hasil verifikasi."
      metadata={
        <>
          <span>8 dokumen</span>
          <span>3 perlu diperiksa</span>
        </>
      }
      title="Verifikasi Dokumen Administrasi Peserta"
    />
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
