import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  ReceiptText,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

const processItems = [
  {
    number: "01",
    title: "Pendaftaran",
    description:
      "Kegiatan dan program sudah dipilih serta pendaftaran telah dikonfirmasi.",
    state: "completed",
    icon: <CheckCircle2 />,
  },
  {
    number: "02",
    title: "Pembayaran Formulir",
    description:
      "Pembayaran formulir telah diterima dan diverifikasi.",
    state: "completed",
    icon: <ReceiptText />,
  },
  {
    number: "03",
    title: "Biodata",
    description:
      "Lengkapi seluruh biodata dan lakukan finalisasi sebelum batas waktu.",
    state: "current",
    icon: <UserRoundCheck />,
  },
  {
    number: "04",
    title: "Dokumen",
    description:
      "Unggah seluruh dokumen persyaratan yang diminta.",
    state: "upcoming",
    icon: <FileText />,
  },
  {
    number: "05",
    title: "Verifikasi Administrasi",
    description:
      "Dokumen Anda akan diperiksa oleh verifikator.",
    state: "upcoming",
    icon: <FileCheck2 />,
  },
  {
    number: "06",
    title: "Seleksi",
    description:
      "Ikuti seluruh tahapan seleksi sesuai jadwal yang ditetapkan.",
    state: "upcoming",
    icon: <ShieldCheck />,
  },
  {
    number: "07",
    title: "Hasil Akhir",
    description:
      "Hasil akhir akan diumumkan melalui Portal Penerimaan STIP.",
    state: "upcoming",
    icon: <CheckCircle2 />,
  },
] as const;

export function ParticipantProcessPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Proses Penerimaan
          </p>

          <h1>Perjalanan pendaftaran Anda</h1>

          <p>
            Pantau setiap tahap, tugas yang perlu diselesaikan,
            dan jadwal penting selama proses penerimaan.
          </p>
        </div>

        <div className="participant-page-header__meta">
          <span>No. Pendaftaran</span>
          <strong>STIP24051234</strong>
        </div>
      </header>

      <section className="participant-process-focus">
        <div className="participant-process-focus__icon">
          <UserRoundCheck aria-hidden="true" />
        </div>

        <div className="participant-process-focus__content">
          <p>Tahap Anda saat ini</p>
          <h2>Lengkapi Biodata</h2>

          <span>
            Selesaikan biodata sebelum melanjutkan ke tahap
            unggah dokumen.
          </span>
        </div>

        <div className="participant-process-focus__deadline">
          <Clock3 aria-hidden="true" />

          <span>
            Batas waktu
            <strong>25 Mei 2026 · 23:59 WIB</strong>
          </span>
        </div>

        <Button
          trailingIcon={<ArrowRight />}
          onClick={() => navigate(participantRoutes.biodata)}
        >
          Lanjutkan Biodata
        </Button>
      </section>

      <section
        className="participant-process-timeline"
        aria-labelledby="participant-process-timeline-title"
      >
        <div className="participant-section-heading">
          <div>
            <p>Progress lengkap</p>
            <h2 id="participant-process-timeline-title">
              Tahapan penerimaan
            </h2>
          </div>

          <div className="participant-section-heading__status">
            <span>3 dari 7 tahap</span>
          </div>
        </div>

        <ol className="participant-process-timeline__list">
          {processItems.map((item) => (
            <li
              key={item.number}
              className="participant-process-timeline__item"
              data-state={item.state}
            >
              <div className="participant-process-timeline__marker">
                {item.icon}
              </div>

              <div className="participant-process-timeline__body">
                <div className="participant-process-timeline__heading">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                </div>

                <p>{item.description}</p>

                {item.state === "completed" && (
                  <span className="participant-status participant-status--success">
                    Selesai
                  </span>
                )}

                {item.state === "current" && (
                  <span className="participant-status participant-status--current">
                    Sedang berjalan
                  </span>
                )}

                {item.state === "upcoming" && (
                  <span className="participant-status participant-status--muted">
                    Belum dimulai
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="participant-workspace__two-column">
        <article className="participant-info-panel">
          <div className="participant-section-heading">
            <div>
              <p>Jadwal penting</p>
              <h2>Agenda terdekat</h2>
            </div>

            <CalendarDays aria-hidden="true" />
          </div>

          <div className="participant-agenda-list">
            <div>
              <span>25 Mei 2026</span>
              <strong>Finalisasi Biodata</strong>
            </div>

            <div>
              <span>27 Mei 2026</span>
              <strong>Unggah Dokumen</strong>
            </div>

            <div>
              <span>10 Juni 2026</span>
              <strong>Verifikasi Administrasi</strong>
            </div>
          </div>
        </article>

        <article className="participant-info-panel participant-info-panel--soft">
          <div className="participant-section-heading">
            <div>
              <p>Perlu diperhatikan</p>
              <h2>Selesaikan tahap secara berurutan</h2>
            </div>
          </div>

          <p>
            Tahap berikutnya akan tersedia setelah tugas utama
            pada tahap sebelumnya selesai dan memenuhi ketentuan.
          </p>

          <ActionLink
            href={participantRoutes.help}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(participantRoutes.help);
            }}
          >
            Baca panduan proses
          </ActionLink>
        </article>
      </section>
    </div>
  );
}