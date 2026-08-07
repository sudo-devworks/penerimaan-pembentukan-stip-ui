import {
  CalendarClock,
  CheckCircle2,
  CircleDot,
  Clock3,
} from "lucide-react";

import { publicSelectionStages } from "../../features/public/information";

import "./PublicSelectionSchedulePage.css";

export function PublicSelectionSchedulePage() {
  return (
    <div className="public-selection-schedule-page">
      <header className="public-information-hero">
        <div className="public-shell-container public-information-hero__inner">
          <p>Jadwal dan tahapan seleksi</p>
          <h1>Pantau agenda penting selama proses penerimaan</h1>
          <span>
            Jadwal berikut merupakan informasi demonstrasi untuk kegiatan
            penerimaan kerja sama CMA CGM tahun 2026.
          </span>
        </div>
      </header>

      <section
        className="public-selection-schedule-page__summary"
        aria-labelledby="selection-summary-title"
      >
        <div className="public-shell-container public-selection-schedule-page__summary-grid">
          <CalendarClock aria-hidden="true" />

          <div>
            <h2 id="selection-summary-title">
              Jadwal pribadi tersedia pada akun peserta
            </h2>
            <p>
              Pembagian hari, waktu, ruang, dan kelompok seleksi dapat berbeda
              untuk setiap peserta. Selalu gunakan jadwal yang tampil pada
              Portal Penerimaan STIP.
            </p>
          </div>
        </div>
      </section>

      <section
        className="public-selection-schedule-page__content"
        aria-labelledby="selection-stages-title"
      >
        <div className="public-shell-container">
          <div className="public-information-heading">
            <p>Timeline penerimaan</p>
            <h2 id="selection-stages-title">
              Tahapan seleksi dan periode pelaksanaan
            </h2>
          </div>

          <ol className="public-selection-timeline">
            {publicSelectionStages.map((stage) => (
              <li key={stage.id} data-status={stage.status}>
                <div className="public-selection-timeline__marker">
                  {stage.status === "completed" ? (
                    <CheckCircle2 aria-hidden="true" />
                  ) : stage.status === "current" ? (
                    <CircleDot aria-hidden="true" />
                  ) : (
                    <Clock3 aria-hidden="true" />
                  )}
                </div>

                <article>
                  <div className="public-selection-timeline__heading">
                    <div>
                      <span>
                        {stage.status === "completed"
                          ? "Selesai"
                          : stage.status === "current"
                            ? "Sedang berlangsung"
                            : "Akan datang"}
                      </span>
                      <h3>{stage.title}</h3>
                    </div>

                    <time>{stage.period}</time>
                  </div>

                  <p>{stage.description}</p>

                  <ul>
                    {stage.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="public-selection-schedule-page__notice">
        <div className="public-shell-container">
          <h2>Jadwal dapat berubah sesuai kebutuhan pelaksanaan</h2>
          <p>
            Perubahan jadwal resmi akan disampaikan melalui pengumuman dan
            notifikasi pada akun peserta.
          </p>
        </div>
      </section>
    </div>
  );
}