import {
  BookOpen,
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

const programs = [
  {
    name: "Nautika",
    wave: "Gelombang II",
    quota: 350,
    participants: 312,
    fee: "Rp500.000",
    status: "Aktif",
  },
  {
    name: "Teknika",
    wave: "Gelombang II",
    quota: 300,
    participants: 267,
    fee: "Rp500.000",
    status: "Aktif",
  },
  {
    name: "Electro-Technical Officer",
    wave: "Gelombang II",
    quota: 150,
    participants: 85,
    fee: "Rp500.000",
    status: "Aktif",
  },
] as const;

export function InternalProgramsPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Program
          </p>

          <h1>Program Gelombang</h1>

          <p>
            Kelola program operasional, kuota, biaya, dan statistik
            peserta pada gelombang aktif.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            size="sm"
            leadingIcon={<Plus />}
          >
            Tambah Program
          </Button>
        </div>
      </header>

      <section className="internal-business-summary">
        <article>
          <span>
            <BookOpen aria-hidden="true" />
          </span>

          <div>
            <small>Program Aktif</small>
            <strong>3</strong>
          </div>
        </article>

        <article>
          <span>
            <UsersRound aria-hidden="true" />
          </span>

          <div>
            <small>Total Peserta</small>
            <strong>664</strong>
          </div>
        </article>
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari program"
            placeholder="Cari program..."
            clearable
            fullWidth
          />
        }
        filters={
          <Select
            aria-label="Filter gelombang program"
            defaultValue="wave-2"
          >
            <option value="wave-2">Gelombang II</option>
            <option value="wave-1">Gelombang I</option>
          </Select>
        }
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Program"
          description="3 program pada Gelombang II"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>Program</th>
                <th>Gelombang</th>
                <th>Kuota</th>
                <th>Peserta</th>
                <th>Keterisian</th>
                <th>Biaya Formulir</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {programs.map((program) => {
                const percentage = Math.round(
                  (program.participants / program.quota) * 100,
                );

                return (
                  <tr key={program.name}>
                    <td>
                      <strong>{program.name}</strong>
                    </td>

                    <td>{program.wave}</td>
                    <td>{program.quota}</td>
                    <td>{program.participants}</td>

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

                    <td>{program.fee}</td>

                    <td>
                      <span className="internal-status internal-status--success">
                        {program.status}
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