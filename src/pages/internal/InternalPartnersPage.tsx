import {
  Building2,
  Eye,
  Handshake,
  Plus,
} from "lucide-react";

import {
  Button,
  FilterToolbar,
  SearchInput,
  Select,
  TableToolbar,
} from "../../components";

import "./InternalPages.css";

const partners = [
  {
    code: "MTR-001",
    name: "CMA CGM",
    type: "Industri",
    activities: 3,
    participants: 1248,
    status: "Aktif",
  },
  {
    code: "MTR-002",
    name: "PT Pelindo",
    type: "BUMN",
    activities: 2,
    participants: 436,
    status: "Aktif",
  },
  {
    code: "MTR-003",
    name: "Pertamina International Shipping",
    type: "Industri",
    activities: 1,
    participants: 185,
    status: "Draft",
  },
] as const;

export function InternalPartnersPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Konfigurasi
          </p>

          <h1>Mitra</h1>

          <p>
            Kelola institusi atau perusahaan yang bekerja sama
            dalam kegiatan penerimaan.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            size="sm"
            leadingIcon={<Plus />}
          >
            Tambah Mitra
          </Button>
        </div>
      </header>

      <section className="internal-business-summary">
        <article>
          <span>
            <Handshake aria-hidden="true" />
          </span>

          <div>
            <small>Total Mitra</small>
            <strong>3</strong>
          </div>
        </article>

        <article>
          <span>
            <Building2 aria-hidden="true" />
          </span>

          <div>
            <small>Mitra Aktif</small>
            <strong>2</strong>
          </div>
        </article>
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari mitra"
            placeholder="Cari nama atau kode mitra..."
            clearable
            fullWidth
          />
        }
        filters={
          <Select
            aria-label="Filter status mitra"
            defaultValue="all"
          >
            <option value="all">Semua Status</option>
            <option value="active">Aktif</option>
            <option value="draft">Draft</option>
          </Select>
        }
        resultsSummary="3 mitra ditemukan"
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Daftar Mitra"
          description="3 mitra terdaftar"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Nama Mitra</th>
                <th>Jenis</th>
                <th>Kegiatan</th>
                <th>Peserta</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {partners.map((partner) => (
                <tr key={partner.code}>
                  <td>
                    <strong>{partner.code}</strong>
                  </td>

                  <td>{partner.name}</td>
                  <td>{partner.type}</td>
                  <td>{partner.activities}</td>
                  <td>{partner.participants.toLocaleString("id-ID")}</td>

                  <td>
                    <span
                      className={
                        partner.status === "Aktif"
                          ? "internal-status internal-status--success"
                          : "internal-status internal-status--belum-diverifikasi"
                      }
                    >
                      {partner.status}
                    </span>
                  </td>

                  <td>
                    <Button
                      size="sm"
                      variant="ghost"
                      leadingIcon={<Eye />}
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
    </div>
  );
}