import {
  Download,
  Filter,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import {
  Button,
  FilterToolbar,
  SearchInput,
  Select,
  TableToolbar,
} from "../../components";

import "./InternalPages.css";

const auditLogs = [
  {
    time: "23 Mei 2026 · 09:32:14",
    user: "Budi Santoso",
    role: "Admin Penerimaan",
    module: "Peserta",
    action: "Lihat Detail",
    object: "STIP24051234 · Budi Santoso",
    context: "CMA CGM / Gel. II",
    ip: "10.10.1.24",
  },
  {
    time: "23 Mei 2026 · 09:28:41",
    user: "Siti Rahma",
    role: "Verifikator",
    module: "Verifikasi",
    action: "Ubah Status",
    object: "Transkrip Nilai · CMA240512003",
    context: "CMA CGM / Gel. II",
    ip: "10.10.1.31",
  },
  {
    time: "23 Mei 2026 · 09:21:05",
    user: "Rina Marlina",
    role: "Admin Keuangan",
    module: "Pembayaran",
    action: "Konfirmasi Pembayaran",
    object: "CMA240512002 · Rp500.000",
    context: "CMA CGM / Gel. II",
    ip: "10.10.1.42",
  },
  {
    time: "23 Mei 2026 · 09:11:19",
    user: "Budi Santoso",
    role: "Admin Penerimaan",
    module: "Gelombang",
    action: "Ubah Jadwal",
    object: "Gelombang II",
    context: "CMA CGM / Gel. II",
    ip: "10.10.1.24",
  },
  {
    time: "23 Mei 2026 · 08:54:32",
    user: "System",
    role: "System",
    module: "Pembayaran",
    action: "Update Otomatis",
    object: "57 transaksi",
    context: "CMA CGM / Gel. II",
    ip: "System",
  },
] as const;

export function InternalAuditPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Monitoring
          </p>

          <h1>Audit Log</h1>

          <p>
            Pantau aktivitas pengguna dan perubahan penting pada
            sistem penerimaan.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            size="sm"
            variant="outline"
            leadingIcon={<Download />}
          >
            Ekspor Log
          </Button>
        </div>
      </header>

      <section className="internal-audit-summary">
        <article>
          <span>
            <ShieldCheck aria-hidden="true" />
          </span>

          <div>
            <small>Aktivitas Hari Ini</small>
            <strong>428</strong>
          </div>
        </article>

        <article>
          <span>
            <SearchCheck aria-hidden="true" />
          </span>

          <div>
            <small>Pengguna Aktif</small>
            <strong>17</strong>
          </div>
        </article>
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari audit log"
            placeholder="Cari pengguna, objek, atau aktivitas..."
            clearable
            fullWidth
          />
        }
        filters={
          <>
            <Select
              aria-label="Filter modul audit"
              defaultValue="all"
            >
              <option value="all">Semua Modul</option>
              <option value="participant">Peserta</option>
              <option value="verification">Verifikasi</option>
              <option value="payment">Pembayaran</option>
              <option value="selection">Seleksi</option>
            </Select>

            <Select
              aria-label="Filter pengguna audit"
              defaultValue="all"
            >
              <option value="all">Semua Pengguna</option>
              <option value="admin">Admin Penerimaan</option>
              <option value="verification">Verifikator</option>
              <option value="finance">Admin Keuangan</option>
            </Select>

            <Select
              aria-label="Filter waktu audit"
              defaultValue="today"
            >
              <option value="today">Hari Ini</option>
              <option value="week">7 Hari Terakhir</option>
              <option value="month">30 Hari Terakhir</option>
            </Select>
          </>
        }
        actions={
          <Button
            size="sm"
            variant="outline"
            leadingIcon={<Filter />}
          >
            Filter Lain
          </Button>
        }
        resultsSummary="428 aktivitas ditemukan"
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Aktivitas Sistem"
          description="Aktivitas terbaru pada konteks aktif"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table internal-audit-table">
            <thead>
              <tr>
                <th>Waktu</th>
                <th>Pengguna</th>
                <th>Role</th>
                <th>Modul</th>
                <th>Aksi</th>
                <th>Objek</th>
                <th>Konteks</th>
                <th>IP / Sumber</th>
              </tr>
            </thead>

            <tbody>
              {auditLogs.map((log) => (
                <tr key={`${log.time}-${log.object}`}>
                  <td>{log.time}</td>

                  <td>
                    <strong>{log.user}</strong>
                  </td>

                  <td>{log.role}</td>

                  <td>
                    <span className="internal-status internal-status--belum-diverifikasi">
                      {log.module}
                    </span>
                  </td>

                  <td>{log.action}</td>
                  <td>{log.object}</td>
                  <td>{log.context}</td>
                  <td>{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}