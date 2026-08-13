import {
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  ListChecks,
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

const stages = [
  {
    name: "Seleksi Administrasi",
    program: "Semua Program",
    schedule: "10 Juni 2026",
    participants: 876,
    attendance: "876 / 876",
    status: "Selesai",
  },
  {
    name: "Wawancara",
    program: "Nautika",
    schedule: "15 Juni 2026",
    participants: 312,
    attendance: "0 / 312",
    status: "Terjadwal",
  },
  {
    name: "Wawancara",
    program: "Teknika",
    schedule: "16 Juni 2026",
    participants: 267,
    attendance: "0 / 267",
    status: "Terjadwal",
  },
  {
    name: "Pemeriksaan Kesehatan",
    program: "Semua Program",
    schedule: "17–20 Juni 2026",
    participants: 664,
    attendance: "0 / 664",
    status: "Persiapan",
  },
] as const;

export function InternalSelectionPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Seleksi
          </p>

          <h1>Tahapan Seleksi</h1>

          <p>
            Kelola jadwal, kartu ujian, kehadiran, dan hasil
            setiap tahapan seleksi.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button size="sm">
            Kelola Tahapan
          </Button>
        </div>
      </header>

      <section className="internal-business-summary internal-business-summary--four">
        <article>
          <span>
            <ListChecks />
          </span>

          <div>
            <small>Tahapan</small>
            <strong>4</strong>
          </div>
        </article>

        <article>
          <span>
            <CalendarDays />
          </span>

          <div>
            <small>Terjadwal</small>
            <strong>2</strong>
          </div>
        </article>

        <article>
          <span>
            <UsersRound />
          </span>

          <div>
            <small>Peserta Seleksi</small>
            <strong>664</strong>
          </div>
        </article>

        <article>
          <span>
            <CheckCircle2 />
          </span>

          <div>
            <small>Tahap Selesai</small>
            <strong>1</strong>
          </div>
        </article>
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari tahap seleksi"
            placeholder="Cari tahapan..."
            clearable
            fullWidth
          />
        }
        filters={
          <>
            <Select
              aria-label="Filter program seleksi"
              defaultValue="all"
            >
              <option value="all">Semua Program</option>
              <option value="nautika">Nautika</option>
              <option value="teknika">Teknika</option>
              <option value="eto">ETO</option>
            </Select>

            <Select
              aria-label="Filter status seleksi"
              defaultValue="all"
            >
              <option value="all">Semua Status</option>
              <option value="completed">Selesai</option>
              <option value="scheduled">Terjadwal</option>
              <option value="preparation">Persiapan</option>
            </Select>
          </>
        }
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Tahapan"
          description="4 tahapan seleksi"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>Tahapan</th>
                <th>Program</th>
                <th>Jadwal</th>
                <th>Peserta</th>
                <th>Kehadiran</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {stages.map((stage) => (
                <tr key={`${stage.name}-${stage.program}`}>
                  <td>
                    <strong>{stage.name}</strong>
                  </td>

                  <td>{stage.program}</td>
                  <td>{stage.schedule}</td>
                  <td>{stage.participants}</td>
                  <td>{stage.attendance}</td>

                  <td>
                    <span
                      className={
                        stage.status === "Selesai"
                          ? "internal-status internal-status--success"
                          : stage.status === "Terjadwal"
                            ? "internal-status internal-status--belum-diverifikasi"
                            : "internal-status internal-status--menunggu"
                      }
                    >
                      {stage.status}
                    </span>
                  </td>

                  <td>
                    <Button
                      size="sm"
                      variant="ghost"
                      leadingIcon={<ClipboardCheck />}
                    >
                      Kelola
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