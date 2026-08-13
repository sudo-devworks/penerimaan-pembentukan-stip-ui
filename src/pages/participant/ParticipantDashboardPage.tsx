import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileCheck2,
  FileText,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
  NotificationItem,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

const processSteps = [
  {
    label: "Akun",
    state: "completed",
  },
  {
    label: "Pendaftaran",
    state: "completed",
  },
  {
    label: "Pembayaran",
    state: "completed",
  },
  {
    label: "Biodata",
    state: "current",
  },
  {
    label: "Dokumen",
    state: "upcoming",
  },
  {
    label: "Seleksi",
    state: "upcoming",
  },
  {
    label: "Hasil",
    state: "upcoming",
  },
] as const;

export function ParticipantDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-dashboard">
      <section className="participant-dashboard__welcome">
        <div>
          <p>Selamat datang kembali,</p>
          <h1>Budi Santoso</h1>
          <span>No. Pendaftaran: STIP24051234</span>
        </div>

        <div className="participant-dashboard__welcome-note">
          <p>
            Persiapkan diri dengan baik, ikuti setiap proses
            dengan disiplin, dan wujudkan cita-citamu.
          </p>
        </div>
      </section>

      <section
        className="participant-dashboard__priority-grid"
        aria-label="Ringkasan proses saat ini"
      >
        <article className="participant-current-stage">
          <div className="participant-current-stage__eyebrow">
            <ClipboardList aria-hidden="true" />
            <span>Tahap saat ini</span>
          </div>

          <h2>Lengkapi Biodata</h2>

          <p>
            Lengkapi data diri, data orang tua, pendidikan,
            dan informasi lainnya untuk melanjutkan ke tahap
            berikutnya.
          </p>

          <Button
            trailingIcon={<ArrowRight />}
            onClick={() => navigate(participantRoutes.biodata)}
          >
            Lengkapi Biodata Sekarang
          </Button>
        </article>

        <article className="participant-summary-card">
          <div className="participant-summary-card__icon">
            <FileText aria-hidden="true" />
          </div>

          <p className="participant-summary-card__eyebrow">
            Tugas saat ini
          </p>

          <h2>Lengkapi Biodata</h2>

          <p>
            Pastikan semua data terisi dengan benar sebelum
            finalisasi.
          </p>

          <div className="participant-summary-card__meta">
            <Clock3 aria-hidden="true" />
            <span>Estimasi waktu: ± 20 menit</span>
          </div>

          <ActionLink
            href={participantRoutes.biodata}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.biodata);
            }}
          >
            Lihat Detail Tugas
          </ActionLink>
        </article>

        <article className="participant-summary-card">
          <div className="participant-summary-card__icon">
            <CalendarDays aria-hidden="true" />
          </div>

          <p className="participant-summary-card__eyebrow">
            Deadline berikutnya
          </p>

          <h2>Unggah Dokumen</h2>

          <strong className="participant-summary-card__date">
            27 Mei 2026
          </strong>

          <span className="participant-summary-card__time">
            23:59 WIB
          </span>

          <span className="participant-summary-card__deadline-badge">
            4 hari lagi
          </span>

          <ActionLink
            href={participantRoutes.process}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.process);
            }}
          >
            Lihat Semua Jadwal
          </ActionLink>
        </article>
      </section>

      <section
        className="participant-process-overview"
        aria-labelledby="participant-progress-title"
      >
        <div className="participant-dashboard__section-heading">
          <div>
            <p>Progress pendaftaran</p>
            <h2 id="participant-progress-title">
              Proses Anda
            </h2>
          </div>

          <ActionLink
            href={participantRoutes.process}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.process);
            }}
          >
            Lihat Proses
          </ActionLink>
        </div>

        <ol className="participant-process-overview__steps">
          {processSteps.map((step, index) => (
            <li
              key={step.label}
              data-state={step.state}
              className="participant-process-overview__step"
            >
              <div className="participant-process-overview__marker">
                {step.state === "completed" ? (
                  <CheckCircle2 aria-hidden="true" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              <span>{step.label}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="participant-dashboard__lower-grid">
        <article className="participant-dashboard-panel">
          <div className="participant-dashboard__section-heading">
            <div>
              <p>Ringkasan jadwal</p>
              <h2>Agenda berikutnya</h2>
            </div>
          </div>

          <div className="participant-schedule-list">
            <div>
              <CalendarDays aria-hidden="true" />
              <span>
                <strong>Unggah Dokumen</strong>
                <small>27 Mei 2026 · 23:59 WIB</small>
              </span>
            </div>

            <div>
              <FileCheck2 aria-hidden="true" />
              <span>
                <strong>Seleksi Administrasi</strong>
                <small>10 Juni 2026</small>
              </span>
            </div>

            <div>
              <UserRound aria-hidden="true" />
              <span>
                <strong>Tes Kesehatan</strong>
                <small>17 Juni 2026</small>
              </span>
            </div>
          </div>

          <ActionLink
            href={participantRoutes.process}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.process);
            }}
          >
            Lihat Semua Jadwal
          </ActionLink>
        </article>

        <article className="participant-dashboard-panel participant-important-info">
          <div className="participant-dashboard__section-heading">
            <div>
              <p>Informasi penting</p>
              <h2>Sebelum melanjutkan</h2>
            </div>
          </div>

          <p>
            Pastikan data yang Anda isi benar dan sesuai
            dokumen resmi. Kesalahan data dapat mengakibatkan
            proses tertunda.
          </p>

          <ActionLink
            href={participantRoutes.help}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.help);
            }}
          >
            Selengkapnya
          </ActionLink>
        </article>

        <article className="participant-dashboard-panel">
          <div className="participant-dashboard__section-heading">
            <div>
              <p>Notifikasi terbaru</p>
              <h2>Pembaruan untuk Anda</h2>
            </div>

            <Bell aria-hidden="true" />
          </div>

          <div className="participant-notification-list">
            <NotificationItem
              title="Pembayaran berhasil diverifikasi"
              description="Pembayaran pendaftaran Anda telah diverifikasi."
              timestamp="2 jam yang lalu"
              variant="success"
            />

            <NotificationItem
              title="Pengumuman jadwal seleksi"
              description="Jadwal seleksi administrasi telah dirilis."
              timestamp="1 hari yang lalu"
              variant="info"
            />
          </div>

          <ActionLink
            href={participantRoutes.notifications}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.notifications);
            }}
          >
            Lihat Semua Notifikasi
          </ActionLink>
        </article>
      </section>
    </div>
  );
}