import type { Meta, StoryObj } from "@storybook/react-vite";
import { Download, Plus } from "lucide-react";

import { Button } from "../../actions/button";
import { ButtonGroup } from "../../actions/button-group";
import { DropdownAction } from "../../actions/dropdown-action";
import { Breadcrumb, BreadcrumbItem } from "../../navigation/breadcrumb";
import { PageHeader } from "./PageHeader";

const meta = {
  title: "Composite/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  args: {
    title: "Daftar Peserta",
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithDescription: Story = {
  args: {
    description:
      "Kelola data peserta, status administrasi, dan progres seleksi pada kegiatan aktif.",
  },
};

export const Complete: Story = {
  render: () => (
    <PageHeader
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button leadingIcon={<Download aria-hidden />} variant="outline">
            Ekspor
          </Button>

          <DropdownAction
            label="Aksi Lain"
            placement="end"
            items={[
              {
                id: "archive",
                label: "Arsipkan data",
                onSelect: () => undefined,
              },
              {
                id: "separator",
                type: "separator",
              },
              {
                id: "delete",
                label: "Hapus data",
                destructive: true,
                onSelect: () => undefined,
              },
            ]}
          />

          <Button leadingIcon={<Plus aria-hidden />} variant="primary">
            Tambah Peserta
          </Button>
        </ButtonGroup>
      }
      description="Kelola data peserta, status administrasi, dan progres seleksi pada kegiatan aktif."
      eyebrow="Portal Internal"
      metadata={
        <>
          <span>128 peserta</span>
          <span>Diperbarui 5 Agustus 2026</span>
        </>
      }
      navigation={
        <Breadcrumb>
          <BreadcrumbItem href="/">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/kegiatan">Kegiatan</BreadcrumbItem>
          <BreadcrumbItem current>Daftar Peserta</BreadcrumbItem>
        </Breadcrumb>
      }
      status={<span>Aktif</span>}
      title="Daftar Peserta"
    />
  ),
};

export const ParticipantPortal: Story = {
  render: () => (
    <PageHeader
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button variant="outline">Lihat Panduan</Button>
          <Button variant="primary">Lanjutkan Proses</Button>
        </ButtonGroup>
      }
      description="Lengkapi seluruh tahapan pendaftaran sebelum batas waktu yang ditentukan."
      eyebrow="Portal Penerimaan STIP"
      metadata={
        <>
          <span>Nomor Pendaftaran: STIP-2026-000128</span>
          <span>Program Nautika</span>
        </>
      }
      status={<span>Perlu dilengkapi</span>}
      title="Pendaftaran Diklat Pembentukan"
    />
  ),
};

export const MobileStress: Story = {
  render: () => (
    <PageHeader
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button variant="outline">Unduh Bukti</Button>
          <Button variant="primary">Lanjutkan Pendaftaran</Button>
        </ButtonGroup>
      }
      description="Lengkapi data dan dokumen yang diperlukan agar proses pendaftaran dapat diverifikasi."
      eyebrow="Portal Penerimaan STIP"
      metadata={
        <>
          <span>Nomor STIP-2026-000128</span>
          <span>Batas akhir 20 Agustus 2026</span>
        </>
      }
      status={<span>Menunggu kelengkapan</span>}
      title="Pendaftaran Diklat Pembentukan Program Nautika Tahun 2026"
    />
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
