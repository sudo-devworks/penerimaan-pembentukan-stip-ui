import {
  CalendarRange,
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

const waves = [
  {
    name: "Gelombang I",
    activity: "CMA CGM",
    registration: "1–30 April 2026",
    quota: 600,
    registered: 584,
    status: "Selesai",
  },
  {
    name: "Gelombang II",
    activity: "CMA CGM",
    registration: "1–31 Mei 2026",
    quota: 800,
    registered: 664,
    status: "Berjalan",
  },
  {
    name: "Gelombang I",
    activity: "PT Pelindo",
    registration: "1–30 Juni 2026",
    quota: 500,
    registered: 436,
    status: "Persiapan",
  },
] as const;

export function InternalWavesPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Gelombang
          </p>

          <h1>Gelombang Penerimaan</h1>

          <p>
            Kelola periode pendaftaran, kuota, jadwal, dan status
            operasional setiap gelombang.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            size="sm"
            leadingIcon={<Plus />}
          >
            Tambah Gelombang
          </Button>
        </div>
      </header>

      <section className="internal-business-summary">
        <article>
          <span>
            <CalendarRange aria-hidden="true" />
          </span>

          <div>
            <small>Gelombang Aktif</small>
            <strong>1</strong>
          </div>
        </article>

        <article>
          <span>
            <UsersRound aria-hidden="true" />
          </span>

          <div>
            <small>Kuota Aktif</small>
            <strong>800</strong>
          </div>
        </article>
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari gelombang"
            placeholder="Cari gelombang..."
            clearable
            fullWidth
          />
        }
        filters={
          <>
            <Select
              aria-label="Filter kegiatan gelombang"
              defaultValue="all"
            >
              <option value="all">Semua Kegiatan</option>
              <option value="cma">CMA CGM</option>
              <option value="pelindo">PT Pelindo</option>
            </Select>

            <Select
              aria-label="Filter status gelombang"
              defaultValue="all"
            >
              <option value="all">Semua Status</option>
              <option value="active">Berjalan</option>
              <option value="preparation">Persiapan</option>
              <option value="closed">Selesai</option>
            </Select>
          </>
        }
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Gelombang"
          description="3 gelombang"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>Gelombang</th>
                <th>Kegiatan</th>
                <th>Periode Pendaftaran</th>
                <th>Kuota</th>
                <th>Terdaftar</th>
                <th>Keterisian</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {waves.map((wave) => {
                const percentage = Math.round(
                  (wave.registered / wave.quota) * 100,
                );

                return (
                  <tr key={`${wave.activity}-${wave.name}`}>
                    <td>
                      <strong>{wave.name}</strong>
                    </td>

                    <td>{wave.activity}</td>
                    <td>{wave.registration}</td>
                    <td>{wave.quota}</td>
                    <td>{wave.registered}</td>

                    <td>
                      <div className="internal-capacity">
                        <span>
                          <span
                            style={{ width: `${percentage}%` }}
                          />
                        </span>

                        <small>{percentage}%</small>
                      </div>
                    </td>

                    <td>
                      <span
                        className={
                          wave.status === "Berjalan"
                            ? "internal-status internal-status--success"
                            : wave.status === "Persiapan"
                              ? "internal-status internal-status--menunggu"
                              : "internal-status internal-status--belum-diverifikasi"
                        }
                      >
                        {wave.status}
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
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}