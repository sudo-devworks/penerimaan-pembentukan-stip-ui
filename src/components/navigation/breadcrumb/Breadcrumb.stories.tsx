import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumb, BreadcrumbItem } from "./index";

const meta = {
  title: "Components/Navigation/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

        <BreadcrumbItem href="/kegiatan">Kegiatan</BreadcrumbItem>

        <BreadcrumbItem current>Detail Kegiatan</BreadcrumbItem>
      </>
    ),
  },
};

export const ParticipantFlow: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

        <BreadcrumbItem href="/proses">Proses Pendaftaran</BreadcrumbItem>

        <BreadcrumbItem href="/proses/dokumen">Dokumen</BreadcrumbItem>

        <BreadcrumbItem current>Unggah Dokumen Identitas</BreadcrumbItem>
      </>
    ),
  },
};

export const InternalHierarchy: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem href="/internal">Dashboard</BreadcrumbItem>

        <BreadcrumbItem href="/internal/kegiatan">Kegiatan</BreadcrumbItem>

        <BreadcrumbItem href="/internal/kegiatan/cma-cgm">
          Diklat Pembentukan CMA CGM
        </BreadcrumbItem>

        <BreadcrumbItem href="/internal/peserta">Peserta</BreadcrumbItem>

        <BreadcrumbItem current>STIP-2026-0001</BreadcrumbItem>
      </>
    ),
  },
};

export const CustomSeparator: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem href="/" separator="/">
          Beranda
        </BreadcrumbItem>

        <BreadcrumbItem href="/kegiatan" separator="/">
          Kegiatan
        </BreadcrumbItem>

        <BreadcrumbItem current>Detail</BreadcrumbItem>
      </>
    ),
  },
};

export const LongMobileContent: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

        <BreadcrumbItem href="/kegiatan">
          Kegiatan Penerimaan Pembentukan
        </BreadcrumbItem>

        <BreadcrumbItem href="/kegiatan/cma-cgm">
          Diklat Pembentukan Kerja Sama CMA CGM Tahun 2026
        </BreadcrumbItem>

        <BreadcrumbItem current>
          Detail Peserta dengan Nama dan Informasi yang Sangat Panjang
        </BreadcrumbItem>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const DensityComparison: Story = {
  args: {
    children: <BreadcrumbItem current>Detail</BreadcrumbItem>,
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "24px",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <div key={density} data-density={density}>
          <Breadcrumb label={`Breadcrumb ${density}`}>
            <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

            <BreadcrumbItem href="/peserta">Peserta</BreadcrumbItem>

            <BreadcrumbItem current>Detail</BreadcrumbItem>
          </Breadcrumb>
        </div>
      ))}
    </div>
  ),
};
