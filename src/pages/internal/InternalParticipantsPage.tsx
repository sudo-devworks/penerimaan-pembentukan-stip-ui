import {
  Download,
  Eye,
  Filter,
  Upload,
  UsersRound,
} from "lucide-react";
import { useState } from "react";

import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  FilterToolbar,
  SearchInput,
  Select,
  TableToolbar,
} from "../../components";
import { InternalParticipantDetail } from "./InternalParticipantDetail";

import "./InternalPages.css";

const participants = [
  {
    registration: "STIP24051234",
    name: "Budi Santoso",
    program: "Nautika",
    documents: "Lengkap",
    payment: "Lunas",
    stage: "Verifikasi",
  },
  {
    registration: "CMA240512002",
    name: "Putri Amanda",
    program: "Nautika",
    documents: "Diterima",
    payment: "Lunas",
    stage: "Verifikasi",
  },
  {
    registration: "CMA240512003",
    name: "Rizky Pratama",
    program: "Teknika",
    documents: "Ditangguhkan",
    payment: "Menunggu",
    stage: "Verifikasi",
  },
  {
    registration: "CMA240512004",
    name: "M. Iqbal",
    program: "Teknika",
    documents: "Diterima",
    payment: "Lunas",
    stage: "Seleksi",
  },
  {
    registration: "CMA240512005",
    name: "Dewi Lestari",
    program: "ETO",
    documents: "Ditolak",
    payment: "Refund",
    stage: "Verifikasi",
  },
  {
    registration: "CMA240512006",
    name: "Andi Saputra",
    program: "Nautika",
    documents: "Belum Diverifikasi",
    payment: "Belum Bayar",
    stage: "Pendaftaran",
  },
] as const;

export function InternalParticipantsPage() {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Peserta
          </p>

          <h1>Daftar Peserta</h1>

          <p>
            Kelola dan pantau peserta pada konteks kegiatan aktif.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            variant="outline"
            size="sm"
            leadingIcon={<Download />}
          >
            Ekspor
          </Button>

          <Button
            variant="outline"
            size="sm"
            leadingIcon={<Upload />}
          >
            Impor
          </Button>
        </div>
      </header>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari peserta"
            placeholder="Cari nama atau no. pendaftaran..."
            fullWidth
            clearable
          />
        }
        filters={
          <>
            <Select
              aria-label="Filter program"
              defaultValue="all"
            >
              <option value="all">Semua Program</option>
              <option value="nautika">Nautika</option>
              <option value="teknika">Teknika</option>
              <option value="eto">ETO</option>
            </Select>

            <Select
              aria-label="Filter status dokumen"
              defaultValue="all"
            >
              <option value="all">Semua Dokumen</option>
              <option value="accepted">Diterima</option>
              <option value="review">Ditangguhkan</option>
              <option value="rejected">Ditolak</option>
            </Select>

            <Select
              aria-label="Filter pembayaran"
              defaultValue="all"
            >
              <option value="all">Semua Pembayaran</option>
              <option value="paid">Lunas</option>
              <option value="pending">Menunggu</option>
              <option value="unpaid">Belum Bayar</option>
            </Select>

            <Select
              aria-label="Filter tahap"
              defaultValue="all"
            >
              <option value="all">Semua Tahap</option>
              <option value="registration">Pendaftaran</option>
              <option value="verification">Verifikasi</option>
              <option value="selection">Seleksi</option>
            </Select>
          </>
        }
        actions={
          <Button
            variant="outline"
            size="sm"
            leadingIcon={<Filter />}
          >
            Filter Lain
          </Button>
        }
        resultsSummary="1.248 peserta ditemukan"
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Peserta"
          description="1–50 dari 1.248 peserta"
          actions={
            <Button
              variant="outline"
              size="sm"
              leadingIcon={<UsersRound />}
            >
              Pilih Semua
            </Button>
          }
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>
                  <Checkbox
                    aria-label="Pilih semua peserta"
                    label=""
                  />
                </th>
                <th>No. Pendaftaran</th>
                <th>Nama Peserta</th>
                <th>Program</th>
                <th>Status Dokumen</th>
                <th>Pembayaran</th>
                <th>Tahap</th>
                <th aria-label="Aksi" />
              </tr>
            </thead>

            <tbody>
              {participants.map((participant) => (
                <tr key={participant.registration}>
                  <td>
                    <Checkbox
                      aria-label={`Pilih ${participant.name}`}
                      label=""
                    />
                  </td>

                  <td>
                    <strong>{participant.registration}</strong>
                  </td>

                  <td>{participant.name}</td>

                  <td>{participant.program}</td>

                  <td>
                    <span
                      className={`internal-status internal-status--${participant.documents
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {participant.documents}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`internal-status internal-status--${participant.payment
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {participant.payment}
                    </span>
                  </td>

                  <td>{participant.stage}</td>

                  <td>
                    <Button
                      variant="ghost"
                      size="sm"
                      leadingIcon={<Eye />}
                      onClick={() => setDetailOpen(true)}
                    >
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Drawer
        open={detailOpen}
        onOpenChange={(open) => {
          setDetailOpen(open);
        }}
      >
        <DrawerContent
          placement="right"
          size="lg"
          className="internal-detail-drawer"
        >
          <DrawerHeader>
            <DrawerTitle>Detail Peserta</DrawerTitle>

            <DrawerClose
              variant="ghost"
              aria-label="Tutup detail peserta"
            >
              Tutup
            </DrawerClose>
          </DrawerHeader>

          <DrawerBody>
            <InternalParticipantDetail />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}