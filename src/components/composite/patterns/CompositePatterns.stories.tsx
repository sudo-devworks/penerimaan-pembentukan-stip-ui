import type { Meta, StoryObj } from "@storybook/react-vite";
import { Filter, FileSearch, Plus, RefreshCw, Trash2 } from "lucide-react";

import { Button } from "../../actions/button";
import { ButtonGroup } from "../../actions/button-group";
import { EmptyState } from "../../feedback/empty-state";
import { ErrorState } from "../../feedback/error-state";
import { LoadingMessage } from "../../feedback/loading-message";
import { Skeleton, SkeletonText } from "../../feedback/skeleton";
import { SearchInput } from "../../forms/search-input";
import { Select } from "../../forms/select";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../overlay/alert-dialog";
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
import { DescriptionList, DescriptionListItem } from "../description-list";
import { FileItem } from "../file-item";
import { FilterToolbar } from "../filter-toolbar";
import { PageHeader } from "../page-header";
import { SectionHeader } from "../section-header";

import "./CompositePatterns.css";

const meta = {
  title: "Composite/Patterns",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ResponsiveSearchAndFilter: Story = {
  render: () => (
    <div className="composite-pattern">
      <PageHeader
        description="Kelola data dan progres peserta pada kegiatan aktif."
        title="Daftar Peserta"
      />

      <FilterToolbar
        actions={<Button variant="text">Reset Filter</Button>}
        activeFilters={
          <>
            <span>Status: Aktif</span>
            <span>Program: Nautika</span>
          </>
        }
        filters={
          <>
            <Select aria-label="Filter status" defaultValue="">
              <option value="">Semua status</option>
              <option value="active">Aktif</option>
              <option value="completed">Selesai</option>
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
              Buka Filter
            </DrawerTrigger>

            <DrawerContent placement="bottom" size="lg">
              <DrawerHeader>
                <DrawerTitle>Filter peserta</DrawerTitle>

                <DrawerDescription>
                  Persempit daftar peserta berdasarkan status dan program.
                </DrawerDescription>
              </DrawerHeader>

              <DrawerBody>
                <div className="composite-pattern__filter-grid">
                  <Select aria-label="Status peserta mobile" defaultValue="">
                    <option value="">Semua status</option>
                    <option value="active">Aktif</option>
                    <option value="completed">Selesai</option>
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

      <div className="composite-pattern__surface">
        Area hasil pencarian dan tabel ditempatkan oleh halaman.
      </div>
    </div>
  ),
};

export const EmptyWithAction: Story = {
  render: () => (
    <div className="composite-pattern__state-wrapper">
      <EmptyState
        description="Belum ada peserta yang sesuai dengan filter yang digunakan."
        icon={FileSearch}
        primaryAction={
          <Button leadingIcon={<Plus aria-hidden />}>Tambah Peserta</Button>
        }
        secondaryAction={<Button variant="text">Hapus Semua Filter</Button>}
        supportingContent="Coba ubah kata kunci atau filter pencarian."
        title="Peserta tidak ditemukan"
      />
    </div>
  ),
};

export const ErrorWithRetry: Story = {
  render: () => (
    <div className="composite-pattern__state-wrapper">
      <ErrorState
        announcement="assertive"
        description="Data peserta belum dapat dimuat. Periksa koneksi lalu coba kembali."
        primaryAction={
          <Button leadingIcon={<RefreshCw aria-hidden />}>Coba Lagi</Button>
        }
        secondaryAction={<Button variant="text">Kembali ke Beranda</Button>}
        supportingContent="Kode referensi: LOAD-PARTICIPANTS-001"
        title="Terjadi kesalahan"
      />
    </div>
  ),
};

export const LoadingContent: Story = {
  render: () => (
    <div className="composite-pattern">
      <LoadingMessage
        description="Mohon tunggu sementara data terbaru disiapkan."
        title="Memuat daftar peserta"
      />

      <div
        aria-busy="true"
        aria-label="Daftar peserta sedang dimuat"
        className="composite-pattern__loading-list"
      >
        {[1, 2, 3].map((item) => (
          <div className="composite-pattern__loading-item" key={item}>
            <Skeleton circular height="2.5rem" width="2.5rem" />

            <div className="composite-pattern__loading-content">
              <Skeleton width="40%" />
              <SkeletonText lines={2} lastLineWidth="55%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const DestructiveConfirmationFlow: Story = {
  render: () => (
    <div className="composite-pattern">
      <SectionHeader
        description="Contoh confirmation flow tanpa membuat komponen confirmation baru."
        title="Tindakan Berisiko"
      />

      <AlertDialog>
        <AlertDialogTrigger
          leadingIcon={<Trash2 aria-hidden />}
          variant="destructive"
        >
          Hapus Data
        </AlertDialogTrigger>

        <AlertDialogContent size="md">
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus data ini?</AlertDialogTitle>

            <AlertDialogDescription>
              Data akan dihapus secara permanen dan tidak dapat dipulihkan.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Batal</AlertDialogCancel>

            <Button variant="destructive">Hapus Permanen</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
};

export const ResponsiveDetailPage: Story = {
  render: () => (
    <div className="composite-pattern">
      <PageHeader
        actions={
          <ButtonGroup stackOnMobile stretchOnMobile>
            <Button variant="outline">Unduh Data</Button>
            <Button>Edit Peserta</Button>
          </ButtonGroup>
        }
        description="Ringkasan identitas, pendaftaran, dan dokumen peserta."
        metadata={
          <>
            <span>STIP-2026-000128</span>
            <span>Diperbarui hari ini</span>
          </>
        }
        status={<span>Aktif</span>}
        title="Budi Santoso"
      />

      <section className="composite-pattern__section">
        <SectionHeader
          description="Informasi utama yang tercatat pada pendaftaran aktif."
          divided
          title="Informasi Peserta"
        />

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
      </section>

      <section className="composite-pattern__section">
        <SectionHeader
          description="Dokumen yang telah diunggah pada proses ini."
          title="Dokumen"
        />

        <div className="composite-pattern__content-list">
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
            status={<span>Berhasil diunggah</span>}
          />

          <FileItem
            description="Dokumen PDF"
            metadata={<span>850 KB</span>}
            name="kartu-identitas.pdf"
            state="success"
            status={<span>Berhasil diunggah</span>}
          />
        </div>
      </section>
    </div>
  ),
};

export const ResponsiveDetailPageMobile: Story = {
  ...ResponsiveDetailPage,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
