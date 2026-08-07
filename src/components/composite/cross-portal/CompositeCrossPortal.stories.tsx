import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Bell,
  Check,
  Download,
  FileCheck2,
  Filter,
  Info,
  Pencil,
  Plus,
  Upload,
} from "lucide-react";

import { Button } from "../../actions/button";
import { ButtonGroup } from "../../actions/button-group";
import { IconButton } from "../../actions/icon-button";
import { EmptyState } from "../../feedback/empty-state";
import { SearchInput } from "../../forms/search-input";
import { Select } from "../../forms/select";
import { Breadcrumb, BreadcrumbItem } from "../../navigation/breadcrumb";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../overlay/drawer";
import { ActivityItem } from "../activity-item";
import { DescriptionList, DescriptionListItem } from "../description-list";
import { DetailSummary } from "../detail-summary";
import { FileItem } from "../file-item";
import { FilterToolbar } from "../filter-toolbar";
import { NotificationItem } from "../notification-item";
import { PageHeader } from "../page-header";
import { SectionHeader } from "../section-header";
import { StatGroup, StatItem } from "../stat-group";
import { TableToolbar } from "../table-toolbar";
import { TimelineEvent } from "../timeline-event";

import "./CompositeCrossPortal.css";

const meta = {
  title: "Composite/Cross Portal",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PublicWebsite: Story = {
  render: () => (
    <main className="cross-portal-page">
      <PageHeader
        actions={
          <ButtonGroup stackOnMobile stretchOnMobile>
            <Button variant="outline">Unduh Panduan</Button>
            <Button variant="primary">Daftar Sekarang</Button>
          </ButtonGroup>
        }
        description="Program pendidikan dan pelatihan pembentukan untuk mempersiapkan calon pelaut profesional."
        eyebrow="Penerimaan Pembentukan STIP"
        metadata={
          <>
            <span>Pendaftaran dibuka</span>
            <span>Gelombang 1 Tahun 2026</span>
          </>
        }
        navigation={
          <Breadcrumb>
            <BreadcrumbItem href="/">Beranda</BreadcrumbItem>
            <BreadcrumbItem current>Penerimaan Pembentukan</BreadcrumbItem>
          </Breadcrumb>
        }
        status={<span>Pendaftaran dibuka</span>}
        title="Diklat Pembentukan STIP"
      />

      <section className="cross-portal-page__section">
        <SectionHeader
          description="Informasi utama mengenai proses penerimaan peserta."
          title="Informasi Program"
        />

        <StatGroup columns={3}>
          <StatItem description="Program tersedia" label="Program" value="3" />

          <StatItem description="Kuota keseluruhan" label="Kuota" value="300" />

          <StatItem
            description="Tahapan utama"
            label="Proses Seleksi"
            value="4"
          />
        </StatGroup>
      </section>

      <section className="cross-portal-page__section">
        <SectionHeader
          description="Tahapan yang perlu diselesaikan oleh calon peserta."
          title="Alur Pendaftaran"
        />

        <ol className="cross-portal-page__timeline">
          <TimelineEvent
            description="Buat akun dan verifikasi alamat email."
            icon={<Check />}
            state="completed"
            title="Registrasi akun"
          />

          <TimelineEvent
            description="Pilih kegiatan, gelombang, dan program."
            icon={<Info />}
            state="current"
            title="Pilih program"
          />

          <TimelineEvent
            description="Lengkapi biodata dan dokumen persyaratan."
            last
            title="Lengkapi persyaratan"
          />
        </ol>
      </section>
    </main>
  ),
};

export const ParticipantPortal: Story = {
  render: () => (
    <main className="cross-portal-page">
      <PageHeader
        actions={
          <ButtonGroup stackOnMobile stretchOnMobile>
            <Button leadingIcon={<Download aria-hidden />} variant="outline">
              Unduh Bukti
            </Button>

            <Button variant="primary">Lanjutkan Proses</Button>
          </ButtonGroup>
        }
        description="Lengkapi data dan dokumen yang diperlukan agar pendaftaran dapat diverifikasi."
        eyebrow="Portal Penerimaan STIP"
        metadata={
          <>
            <span>Nomor STIP-2026-000128</span>
            <span>Batas akhir 20 Agustus 2026</span>
          </>
        }
        status={<span>Menunggu kelengkapan</span>}
        title="Pendaftaran Diklat Pembentukan"
      />

      <StatGroup columns={3}>
        <StatItem
          description="Tahapan selesai"
          label="Progres"
          value="3 dari 6"
        />

        <StatItem
          description="Dokumen diterima"
          label="Dokumen"
          value="5 dari 8"
        />

        <StatItem
          description="Batas waktu"
          label="Sisa Waktu"
          value="14 hari"
        />
      </StatGroup>

      <div className="cross-portal-page__sidebar-layout">
        <section className="cross-portal-page__section">
          <SectionHeader
            description="Selesaikan tahapan aktif agar proses dapat dilanjutkan."
            title="Proses Pendaftaran"
          />

          <ol className="cross-portal-page__timeline">
            <TimelineEvent
              description="Pendaftaran berhasil dibuat."
              icon={<Check />}
              state="completed"
              timestamp="1 Agustus 2026"
              title="Pendaftaran"
            />

            <TimelineEvent
              description="Pembayaran formulir telah diterima."
              icon={<Check />}
              state="completed"
              timestamp="2 Agustus 2026"
              title="Pembayaran formulir"
            />

            <TimelineEvent
              actions={<Button variant="primary">Lengkapi Data</Button>}
              description="Lengkapi biodata dan dokumen persyaratan."
              icon={<Upload />}
              last
              state="current"
              timestamp="Sedang berlangsung"
              title="Kelengkapan data"
            />
          </ol>
        </section>

        <section className="cross-portal-page__section">
          <SectionHeader title="Notifikasi Terbaru" />

          <div className="cross-portal-page__list">
            <NotificationItem
              description="Tiga dokumen masih perlu diunggah."
              icon={<Bell />}
              timestamp="Hari ini"
              title="Dokumen belum lengkap"
              unread
              variant="warning"
            />

            <NotificationItem
              description="Pembayaran formulir berhasil diterima."
              icon={<FileCheck2 />}
              timestamp="2 Agustus 2026"
              title="Pembayaran berhasil"
              variant="success"
            />
          </div>
        </section>
      </div>

      <DetailSummary
        actions={
          <Button leadingIcon={<Pencil aria-hidden />} variant="outline">
            Edit Biodata
          </Button>
        }
        description="Data utama yang digunakan dalam proses pendaftaran."
        status={<span>Belum final</span>}
        title="Ringkasan Biodata"
      >
        <DescriptionList columns={2} divided>
          <DescriptionListItem term="Nama lengkap">
            Budi Santoso
          </DescriptionListItem>

          <DescriptionListItem term="Program">Nautika</DescriptionListItem>

          <DescriptionListItem term="Email">
            budi.santoso@example.com
          </DescriptionListItem>

          <DescriptionListItem term="Nomor telepon">
            0812-3456-7890
          </DescriptionListItem>
        </DescriptionList>
      </DetailSummary>
    </main>
  ),
};

export const ParticipantPortalMobile: Story = {
  ...ParticipantPortal,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const InternalPortal: Story = {
  render: () => (
    <main className="cross-portal-page">
      <PageHeader
        actions={
          <ButtonGroup stackOnMobile stretchOnMobile>
            <Button leadingIcon={<Download aria-hidden />} variant="outline">
              Ekspor
            </Button>

            <Button leadingIcon={<Plus aria-hidden />} variant="primary">
              Tambah Peserta
            </Button>
          </ButtonGroup>
        }
        description="Kelola data peserta, status administrasi, dan progres seleksi."
        eyebrow="Portal Internal"
        metadata={
          <>
            <span>128 peserta</span>
            <span>Diperbarui hari ini</span>
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

      <StatGroup columns={4}>
        <StatItem label="Total peserta" value="128" />
        <StatItem label="Perlu diverifikasi" value="24" />
        <StatItem label="Dalam proses" value="10" />
        <StatItem label="Lulus administrasi" value="94" />
      </StatGroup>

      <section className="cross-portal-page__section">
        <SectionHeader
          description="Cari dan filter peserta pada kegiatan aktif."
          title="Data Peserta"
        />

        <FilterToolbar
          actions={<Button variant="text">Reset Filter</Button>}
          filters={
            <>
              <Select aria-label="Filter status" defaultValue="">
                <option value="">Semua status</option>
                <option value="active">Aktif</option>
                <option value="verified">Terverifikasi</option>
              </Select>

              <Select aria-label="Filter program" defaultValue="">
                <option value="">Semua program</option>
                <option value="nautika">Nautika</option>
                <option value="teknika">Teknika</option>
              </Select>
            </>
          }
          mobileFilterTrigger={
            <Drawer>
              <DrawerTrigger
                fullWidth
                leadingIcon={<Filter aria-hidden />}
                variant="outline"
              >
                Filter Peserta
              </DrawerTrigger>

              <DrawerContent placement="bottom">
                <DrawerHeader>
                  <DrawerTitle>Filter peserta</DrawerTitle>

                  <DrawerDescription>
                    Pilih kriteria yang ingin digunakan.
                  </DrawerDescription>
                </DrawerHeader>

                <DrawerBody>
                  <div className="cross-portal-page__filter-content">
                    <Select aria-label="Status peserta mobile" defaultValue="">
                      <option value="">Semua status</option>
                      <option value="active">Aktif</option>
                      <option value="verified">Terverifikasi</option>
                    </Select>

                    <Select aria-label="Program peserta mobile" defaultValue="">
                      <option value="">Semua program</option>
                      <option value="nautika">Nautika</option>
                      <option value="teknika">Teknika</option>
                    </Select>
                  </div>
                </DrawerBody>

                <DrawerFooter>
                  <DrawerClose variant="outline">Batal</DrawerClose>
                  <Button>Terapkan Filter</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          }
          resultsSummary="128 peserta ditemukan"
          search={
            <SearchInput
              aria-label="Cari peserta"
              clearable
              fullWidth
              placeholder="Cari nama atau nomor pendaftaran"
            />
          }
        />

        <TableToolbar
          actions={
            <ButtonGroup>
              <Button variant="outline">Atur Kolom</Button>

              <IconButton
                aria-label="Pengaturan tabel"
                icon={<Info aria-hidden />}
                variant="ghost"
              />
            </ButtonGroup>
          }
          description="Menampilkan 1–20 dari 128 data"
          title="Daftar peserta"
        />

        <div className="cross-portal-page__placeholder">
          Area tabel peserta tetap berada pada layer feature atau page.
        </div>
      </section>

      <section className="cross-portal-page__section">
        <SectionHeader
          description="Aktivitas terbaru pada kegiatan aktif."
          title="Aktivitas"
        />

        <div className="cross-portal-page__list">
          <ActivityItem
            description="Status administrasi peserta diperbarui."
            icon={<FileCheck2 />}
            metadata={
              <>
                <span>Oleh Admin Verifikasi</span>
                <span>Portal Internal</span>
              </>
            }
            timestamp="10 menit lalu"
            title="Status peserta diperbarui"
          />

          <ActivityItem
            description="Data peserta baru ditambahkan."
            icon={<Plus />}
            metadata={<span>Oleh Superadmin</span>}
            timestamp="30 menit lalu"
            title="Peserta ditambahkan"
          />
        </div>
      </section>
    </main>
  ),
};

export const InternalPortalTablet: Story = {
  ...InternalPortal,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const EmptyInternalResult: Story = {
  render: () => (
    <main className="cross-portal-page">
      <PageHeader
        description="Kelola data peserta pada kegiatan aktif."
        title="Daftar Peserta"
      />

      <FilterToolbar
        resultsSummary="0 peserta ditemukan"
        search={
          <SearchInput
            aria-label="Cari peserta"
            fullWidth
            placeholder="Cari peserta"
          />
        }
      />

      <EmptyState
        description="Tidak ada peserta yang sesuai dengan pencarian dan filter."
        primaryAction={<Button>Hapus Semua Filter</Button>}
        title="Peserta tidak ditemukan"
      />
    </main>
  ),
};

export const ParticipantDocumentList: Story = {
  render: () => (
    <main className="cross-portal-page">
      <PageHeader
        description="Unggah dan kelola dokumen persyaratan pendaftaran."
        title="Dokumen Persyaratan"
      />

      <section className="cross-portal-page__section">
        <SectionHeader
          actions={
            <Button leadingIcon={<Upload aria-hidden />} variant="primary">
              Unggah Dokumen
            </Button>
          }
          description="Pastikan setiap file sesuai dengan format dan ukuran yang ditentukan."
          title="Dokumen Saya"
        />

        <div className="cross-portal-page__list">
          <FileItem
            description="Dokumen PDF"
            metadata={
              <>
                <span>1,2 MB</span>
                <span>Diunggah hari ini</span>
              </>
            }
            name="ijazah-terakhir.pdf"
            state="success"
            status={<span>Diterima</span>}
          />

          <FileItem
            actions={<Button variant="outline">Unggah Ulang</Button>}
            description="Dokumen tidak terlihat dengan jelas."
            metadata={<span>850 KB</span>}
            name="kartu-identitas.pdf"
            state="warning"
            status={<span>Ditangguhkan</span>}
          />
        </div>
      </section>
    </main>
  ),
};
