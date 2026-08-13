import {
  BarChart3,
  Download,
  FileSpreadsheet,
  FileText,
  RefreshCcw,
  UsersRound,
} from "lucide-react";

import {
  Button,
  FilterToolbar,
  SearchInput,
  Select,
  TableToolbar,
} from "../../components";

import "./InternalPages.css";

const reports = [
  {
    title: "Rekap Peserta",
    description:
      "Daftar peserta beserta program, status proses, dan hasil akhir.",
    type: "XLSX",
    updated: "23 Mei 2026 · 09:30 WIB",
  },
  {
    title: "Rekap Verifikasi Administrasi",
    description:
      "Status verifikasi dokumen dan hasil administrasi peserta.",
    type: "XLSX",
    updated: "23 Mei 2026 · 09:15 WIB",
  },
  {
    title: "Rekap Pembayaran",
    description:
      "Tagihan, pembayaran masuk, transaksi menunggu, dan refund.",
    type: "XLSX",
    updated: "23 Mei 2026 · 08:58 WIB",
  },
  {
    title: "Rekap Seleksi",
    description:
      "Jadwal, kehadiran, nilai, dan hasil tahapan seleksi.",
    type: "XLSX",
    updated: "22 Mei 2026 · 16:40 WIB",
  },
] as const;

const snapshots = [
  {
    label: "Total Peserta",
    value: "1.248",
    icon: <UsersRound />,
  },
  {
    label: "Lulus Administrasi",
    value: "876",
    icon: <FileText />,
  },
  {
    label: "Pembayaran Lunas",
    value: "876",
    icon: <FileSpreadsheet />,
  },
  {
    label: "Tahap Seleksi",
    value: "4",
    icon: <BarChart3 />,
  },
];

export function InternalReportsPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Monitoring
          </p>

          <h1>Laporan</h1>

          <p>
            Tinjau ringkasan operasional dan unduh laporan berdasarkan
            konteks kegiatan aktif.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            size="sm"
            variant="outline"
            leadingIcon={<RefreshCcw />}
          >
            Perbarui Data
          </Button>

          <Button
            size="sm"
            leadingIcon={<Download />}
          >
            Unduh Laporan
          </Button>
        </div>
      </header>

      <section className="internal-business-summary internal-business-summary--four">
        {snapshots.map((snapshot) => (
          <article key={snapshot.label}>
            <span>{snapshot.icon}</span>

            <div>
              <small>{snapshot.label}</small>
              <strong>{snapshot.value}</strong>
            </div>
          </article>
        ))}
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari laporan"
            placeholder="Cari jenis laporan..."
            clearable
            fullWidth
          />
        }
        filters={
          <>
            <Select
              aria-label="Filter program laporan"
              defaultValue="all"
            >
              <option value="all">Semua Program</option>
              <option value="nautika">Nautika</option>
              <option value="teknika">Teknika</option>
              <option value="eto">ETO</option>
            </Select>

            <Select
              aria-label="Filter periode laporan"
              defaultValue="current"
            >
              <option value="current">Periode Aktif</option>
              <option value="may">Mei 2026</option>
              <option value="april">April 2026</option>
            </Select>
          </>
        }
      />

      <section className="internal-report-grid">
        {reports.map((report) => (
          <article
            key={report.title}
            className="internal-report-card"
          >
            <span className="internal-report-card__icon">
              <FileSpreadsheet aria-hidden="true" />
            </span>

            <div className="internal-report-card__content">
              <div>
                <span>{report.type}</span>
                <h2>{report.title}</h2>
              </div>

              <p>{report.description}</p>

              <small>
                Terakhir diperbarui: {report.updated}
              </small>
            </div>

            <Button
              size="sm"
              variant="outline"
              leadingIcon={<Download />}
            >
              Unduh
            </Button>
          </article>
        ))}
      </section>

      <section className="internal-table-shell">
        <TableToolbar
          title="Riwayat Laporan"
          description="Laporan yang pernah dibuat atau diunduh"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>Nama Laporan</th>
                <th>Periode</th>
                <th>Program</th>
                <th>Dibuat Oleh</th>
                <th>Waktu</th>
                <th>Format</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Rekap Peserta</strong>
                </td>
                <td>Mei 2026</td>
                <td>Semua Program</td>
                <td>Budi Santoso</td>
                <td>23 Mei 2026 · 09:30</td>
                <td>XLSX</td>
                <td>
                  <Button
                    size="sm"
                    variant="ghost"
                    leadingIcon={<Download />}
                  >
                    Unduh
                  </Button>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Rekap Pembayaran</strong>
                </td>
                <td>Mei 2026</td>
                <td>Semua Program</td>
                <td>Siti Rahma</td>
                <td>23 Mei 2026 · 08:58</td>
                <td>XLSX</td>
                <td>
                  <Button
                    size="sm"
                    variant="ghost"
                    leadingIcon={<Download />}
                  >
                    Unduh
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}