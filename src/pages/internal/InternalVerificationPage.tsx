import {
  Download,
  Filter,
  Upload,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
  BulkActionBar,
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
    status: "Belum Diverifikasi",
    payment: "Lunas",
    date: "20 Mei 2026",
  },
  {
    registration: "CMA240512002",
    name: "Putri Amanda",
    program: "Nautika",
    status: "Diterima",
    payment: "Lunas",
    date: "20 Mei 2026",
  },
  {
    registration: "CMA240512003",
    name: "Rizky Pratama",
    program: "Teknika",
    status: "Ditangguhkan",
    payment: "Menunggu",
    date: "20 Mei 2026",
  },
  {
    registration: "CMA240512004",
    name: "M. Iqbal",
    program: "Teknika",
    status: "Diterima",
    payment: "Lunas",
    date: "19 Mei 2026",
  },
  {
    registration: "CMA240512005",
    name: "Dewi Lestari",
    program: "ETO",
    status: "Ditolak",
    payment: "Refund",
    date: "19 Mei 2026",
  },
  {
    registration: "CMA240512006",
    name: "Andi Saputra",
    program: "Nautika",
    status: "Belum Diverifikasi",
    payment: "Belum Bayar",
    date: "18 Mei 2026",
  },
] as const;

const summary = [
  {
    label: "Semua",
    value: "1.248",
    tone: "neutral",
  },
  {
    label: "Belum Diverifikasi",
    value: "312",
    tone: "info",
  },
  {
    label: "Diterima",
    value: "876",
    tone: "success",
  },
  {
    label: "Ditangguhkan",
    value: "38",
    tone: "warning",
  },
  {
    label: "Ditolak",
    value: "22",
    tone: "danger",
  },
] as const;

export function InternalVerificationPage() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [detailOpen, setDetailOpen] = useState(false);

  const allSelected = useMemo(
    () => selectedRows.length === participants.length,
    [selectedRows],
  );

  const toggleAll = () => {
    setSelectedRows(
      allSelected
        ? []
        : participants.map(
            (participant) => participant.registration,
          ),
    );
  };

  const toggleRow = (registration: string) => {
    setSelectedRows((current) =>
      current.includes(registration)
        ? current.filter((item) => item !== registration)
        : [...current, registration],
    );
  };

  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Verifikasi
          </p>

          <h1>Verifikasi Administrasi</h1>

          <p>
            Kelola verifikasi kelengkapan dan kesesuaian dokumen
            peserta.
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

          <Button size="sm">
            Batch Action
          </Button>
        </div>
      </header>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari peserta verifikasi"
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
              <option value="all">Semua Status</option>
              <option value="pending">Belum Diverifikasi</option>
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
      />

      <section className="internal-verification-summary">
        {summary.map((item) => (
          <article
            key={item.label}
            data-tone={item.tone}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      {selectedRows.length > 0 && (
        <BulkActionBar
          summary={`${selectedRows.length} peserta dipilih`}
          description="Aksi akan diterapkan pada peserta terpilih."
          actions={
            <>
              <Button size="sm">
                Terima
              </Button>

              <Button
                size="sm"
                variant="outline"
              >
                Tangguhkan
              </Button>

              <Button
                size="sm"
                variant="destructive"
              >
                Tolak
              </Button>
            </>
          }
          clearAction={
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSelectedRows([])}
            >
              Batalkan Pilihan
            </Button>
          }
        />
      )}

      <section className="internal-table-shell">
        <TableToolbar
          title="Peserta"
          description="1–50 dari 1.248 peserta"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>
                  <Checkbox
                    label=""
                    aria-label="Pilih semua peserta"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                </th>

                <th>No. Pendaftaran</th>
                <th>Nama Peserta</th>
                <th>Program</th>
                <th>Status Dokumen</th>
                <th>Pembayaran</th>
                <th>Tanggal Daftar</th>
              </tr>
            </thead>

            <tbody>
              {participants.map((participant) => {
                const selected = selectedRows.includes(
                  participant.registration,
                );

                return (
                  <tr
                    key={participant.registration}
                    data-selected={selected || undefined}
                    onDoubleClick={() => setDetailOpen(true)}
                  >
                    <td>
                      <Checkbox
                        label=""
                        aria-label={`Pilih ${participant.name}`}
                        checked={selected}
                        onChange={() =>
                          toggleRow(participant.registration)
                        }
                      />
                    </td>

                    <td>
                      <button
                        type="button"
                        className="internal-table-link"
                        onClick={() => setDetailOpen(true)}
                      >
                        {participant.registration}
                      </button>
                    </td>

                    <td>{participant.name}</td>
                    <td>{participant.program}</td>

                    <td>
                      <span
                        className={`internal-status internal-status--${participant.status
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        {participant.status}
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

                    <td>{participant.date}</td>
                  </tr>
                );
              })}
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
            <InternalParticipantDetail mode="verification" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}