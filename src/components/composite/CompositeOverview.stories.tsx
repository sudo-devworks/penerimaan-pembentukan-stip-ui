import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, Check, FileText, Search, Users } from "lucide-react";

import { Button } from "../actions/button";
import { ButtonGroup } from "../actions/button-group";
import { SearchInput } from "../forms/search-input";
import { ActivityItem } from "./activity-item";
import { DescriptionList, DescriptionListItem } from "./description-list";
import { DetailSummary } from "./detail-summary";
import { FileItem } from "./file-item";
import { FilterToolbar } from "./filter-toolbar";
import { NotificationItem } from "./notification-item";
import { PageHeader } from "./page-header";
import { SectionHeader } from "./section-header";
import { StatGroup, StatItem } from "./stat-group";
import { TimelineEvent } from "./timeline-event";

const meta = {
  title: "Composite/Overview",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteOverview: Story = {
  render: () => (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <PageHeader
        actions={
          <ButtonGroup stackOnMobile stretchOnMobile>
            <Button variant="outline">Ekspor</Button>
            <Button>Tambah Peserta</Button>
          </ButtonGroup>
        }
        description="Contoh gabungan Composite Components pada halaman internal."
        eyebrow="Portal Internal"
        metadata={
          <>
            <span>128 peserta</span>
            <span>Diperbarui hari ini</span>
          </>
        }
        status={<span>Aktif</span>}
        title="Daftar Peserta"
      />

      <StatGroup columns={3}>
        <StatItem
          description="Seluruh pendaftar"
          icon={<Users />}
          label="Total peserta"
          value="128"
        />

        <StatItem
          description="Data aktif"
          icon={<Check />}
          label="Terverifikasi"
          value="94"
        />

        <StatItem
          description="Perlu ditindaklanjuti"
          icon={<Bell />}
          label="Perlu perhatian"
          value="24"
        />
      </StatGroup>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <SectionHeader
          description="Cari peserta berdasarkan nama atau nomor pendaftaran."
          title="Pencarian"
        />

        <FilterToolbar
          mobileFilterTrigger={
            <Button leadingIcon={<Search aria-hidden />} variant="outline">
              Buka Filter
            </Button>
          }
          resultsSummary="128 peserta ditemukan"
          search={
            <SearchInput
              aria-label="Cari peserta"
              fullWidth
              placeholder="Cari peserta"
            />
          }
        />
      </section>

      <DetailSummary
        actions={<Button variant="outline">Edit Data</Button>}
        description="Data utama peserta pada pendaftaran aktif."
        status={<span>Aktif</span>}
        title="Informasi Peserta"
      >
        <DescriptionList columns={2} divided>
          <DescriptionListItem term="Nama">Budi Santoso</DescriptionListItem>

          <DescriptionListItem term="Program">Nautika</DescriptionListItem>

          <DescriptionListItem term="Email">
            budi.santoso@example.com
          </DescriptionListItem>

          <DescriptionListItem term="Nomor pendaftaran">
            STIP-2026-000128
          </DescriptionListItem>
        </DescriptionList>
      </DetailSummary>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <SectionHeader title="Proses dan Aktivitas" />

        <ol
          aria-label="Proses pendaftaran"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <TimelineEvent
            description="Pendaftaran berhasil dibuat."
            icon={<Check />}
            state="completed"
            title="Pendaftaran"
          />

          <TimelineEvent
            description="Lengkapi dokumen persyaratan."
            last
            state="current"
            title="Kelengkapan dokumen"
          />
        </ol>

        <ActivityItem
          description="Data peserta berhasil diperbarui."
          timestamp="10 menit lalu"
          title="Data diperbarui"
        />

        <NotificationItem
          description="Terdapat dokumen yang perlu dilengkapi."
          title="Tindakan diperlukan"
          unread
          variant="warning"
        />

        <FileItem
          description="Dokumen PDF"
          metadata={<span>1,2 MB</span>}
          name="ijazah-terakhir.pdf"
          preview={<FileText />}
          state="success"
          status={<span>Berhasil diunggah</span>}
        />
      </section>
    </main>
  ),
};
