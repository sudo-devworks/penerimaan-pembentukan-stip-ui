import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  QrCode,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
  InlineAlert,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

const selectionStages = [
  {
    title: "Seleksi Administrasi",
    description:
      "Pemeriksaan kelengkapan dan kesesuaian dokumen persyaratan.",
    status: "completed",
    statusLabel: "Lulus",
    icon: <FileText />,
  },
  {
    title: "Wawancara",
    description:
      "Wawancara bersama tim seleksi sesuai jadwal yang ditentukan.",
    status: "scheduled",
    statusLabel: "Terjadwal",
    icon: <UserRound />,
  },
  {
    title: "Pemeriksaan Kesehatan",
    description:
      "Pemeriksaan kesehatan sesuai ketentuan kegiatan penerimaan.",
    status: "upcoming",
    statusLabel: "Belum Dimulai",
    icon: <Stethoscope />,
  },
];

export function ParticipantSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Seleksi
          </p>

          <h1>Tahapan seleksi Anda</h1>

          <p>
            Pantau jadwal, kartu ujian, kehadiran, dan hasil setiap
            tahapan seleksi dari halaman ini.
          </p>
        </div>

        <div className="participant-page-header__meta">
          <span>Status Seleksi</span>
          <strong>Sedang Berjalan</strong>
        </div>
      </header>

      <InlineAlert
        severity="info"
        title="Wawancara Anda sudah terjadwal"
      >
        Pastikan hadir sesuai jadwal dan membawa kartu ujian yang
        tersedia di Portal Peserta.
      </InlineAlert>

      <section className="participant-selection-focus">
        <div className="participant-selection-focus__main">
          <div className="participant-selection-focus__icon">
            <CalendarDays aria-hidden="true" />
          </div>

          <div>
            <p>Tahap berikutnya</p>
            <h2>Wawancara</h2>
            <span>Senin, 15 Juni 2026 · 09:00 WIB</span>
          </div>
        </div>

        <div className="participant-selection-focus__meta">
          <div>
            <Clock3 aria-hidden="true" />
            <span>
              Waktu
              <strong>09:00–09:30 WIB</strong>
            </span>
          </div>

          <div>
            <MapPin aria-hidden="true" />
            <span>
              Lokasi
              <strong>Gedung Seleksi STIP</strong>
            </span>
          </div>
        </div>

        <Button
          trailingIcon={<ArrowRight />}
          onClick={() => navigate(participantRoutes.examCard)}
        >
          Lihat Kartu Ujian
        </Button>
      </section>

      <section className="participant-selection-tools">
        <article>
          <QrCode aria-hidden="true" />

          <div>
            <p>Kartu Ujian</p>
            <h2>Siap digunakan</h2>
            <span>
              Tampilkan kartu ujian dan QR saat menghadiri seleksi.
            </span>
          </div>

          <ActionLink
            href={participantRoutes.examCard}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.examCard);
            }}
          >
            Buka Kartu Ujian
          </ActionLink>
        </article>

        <article>
          <CalendarDays aria-hidden="true" />

          <div>
            <p>Jadwal Seleksi</p>
            <h2>Lihat seluruh agenda</h2>
            <span>
              Pastikan Anda mengikuti tanggal dan waktu yang telah
              ditentukan.
            </span>
          </div>

          <ActionLink
            href={participantRoutes.selectionSchedule}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.selectionSchedule);
            }}
          >
            Lihat Jadwal
          </ActionLink>
        </article>
      </section>

      <section className="participant-selection-stages">
        <div className="participant-section-heading">
          <div>
            <p>Progress seleksi</p>
            <h2>Tahapan Anda</h2>
          </div>
        </div>

        <div className="participant-selection-stages__list">
          {selectionStages.map((stage, index) => (
            <article
              key={stage.title}
              className="participant-selection-stage"
              data-status={stage.status}
            >
              <div className="participant-selection-stage__index">
                {stage.status === "completed" ? (
                  <CheckCircle2 aria-hidden="true" />
                ) : (
                  <span>0{index + 1}</span>
                )}
              </div>

              <div className="participant-selection-stage__icon">
                {stage.icon}
              </div>

              <div className="participant-selection-stage__content">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>

                <span
                  className={`participant-status participant-status--${stage.status}`}
                >
                  {stage.statusLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="participant-info-panel participant-info-panel--soft">
        <div className="participant-section-heading">
          <div>
            <p>Setelah seleksi</p>
            <h2>Hasil akan tersedia di Portal Peserta</h2>
          </div>

          <BadgeCheck aria-hidden="true" />
        </div>

        <p>
          Anda akan menerima notifikasi ketika hasil tahapan seleksi
          sudah dipublikasikan.
        </p>

        <ActionLink
          href={participantRoutes.selectionResult}
          trailingIcon={<ArrowRight />}
          onClick={(event) => {
            event.preventDefault();
            navigate(participantRoutes.selectionResult);
          }}
        >
          Lihat Halaman Hasil
        </ActionLink>
      </section>
    </div>
  );
}