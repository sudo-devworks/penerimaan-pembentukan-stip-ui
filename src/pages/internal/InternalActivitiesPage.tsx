import {
  CalendarDays,
  Eye,
  Plus,
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

const activities = [
  {
    name: "Diklat Pembentukan Kerja Sama CMA CGM",
    partner: "CMA CGM",
    period: "2026/2027",
    waves: 2,
    participants: 1248,
    status: "Berjalan",
  },
  {
    name: "Diklat Pembentukan Kerja Sama Pelindo",
    partner: "PT Pelindo",
    period: "2026/2027",
    waves: 1,
    participants: 436,
    status: "Persiapan",
  },
  {
    name: "Program Pembentukan PIS",
    partner: "Pertamina International Shipping",
    period: "2027/2028",
    waves: 0,
    participants: 0,
    status: "Draft",
  },
] as const;

export function InternalActivitiesPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Kegiatan
          </p>

          <h1>Kegiatan Penerimaan</h1>

          <p>
            Kelola konfigurasi utama kegiatan, periode, mitra,
            gelombang, dan program.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            size="sm"
            leadingIcon={<Plus />}
          >
            Buat Kegiatan
          </Button>
        </div>
      </header>

      <section className="internal-business-summary">
        <article>
          <span>
            <CalendarDays aria-hidden="true" />
          </span>

          <div>
            <small>Kegiatan Aktif</small>
            <strong>2</strong>
          </div>
        </article>

        <article>
          <span>
            <UsersRound aria-hidden="true" />
          </span>

          <div>
            <small>Total Peserta</small>
            <strong>1.684</strong>
          </div>
        </article>
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari kegiatan"
            placeholder="Cari kegiatan..."
            clearable
            fullWidth
          />
        }
        filters={
          <>
            <Select
              aria-label="Filter mitra kegiatan"
              defaultValue="all"
            >
              <option value="all">Semua Mitra</option>
              <option value="cma">CMA CGM</option>
              <option value="pelindo">PT Pelindo</option>
            </Select>

            <Select
              aria-label="Filter status kegiatan"
              defaultValue="all"
            >
              <option value="all">Semua Status</option>
              <option value="active">Berjalan</option>
              <option value="preparation">Persiapan</option>
              <option value="draft">Draft</option>
            </Select>
          </>
        }
        resultsSummary="3 kegiatan ditemukan"
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Kegiatan"
          description="Kegiatan penerimaan terdaftar"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>Nama Kegiatan</th>
                <th>Mitra</th>
                <th>Periode</th>
                <th>Gelombang</th>
                <th>Peserta</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {activities.map((activity) => (
                <tr key={activity.name}>
                  <td>
                    <strong>{activity.name}</strong>
                  </td>

                  <td>{activity.partner}</td>
                  <td>{activity.period}</td>
                  <td>{activity.waves}</td>
                  <td>{activity.participants.toLocaleString("id-ID")}</td>

                  <td>
                    <span
                      className={
                        activity.status === "Berjalan"
                          ? "internal-status internal-status--success"
                          : activity.status === "Persiapan"
                            ? "internal-status internal-status--menunggu"
                            : "internal-status internal-status--belum-diverifikasi"
                      }
                    >
                      {activity.status}
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