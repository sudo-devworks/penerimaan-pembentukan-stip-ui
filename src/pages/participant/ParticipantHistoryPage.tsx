import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  History,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

export function ParticipantHistoryPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Riwayat
          </p>

          <h1>Riwayat pendaftaran</h1>

          <p>
            Lihat kegiatan penerimaan yang pernah atau sedang Anda
            ikuti melalui akun ini.
          </p>
        </div>

        <History aria-hidden="true" />
      </header>

      <section className="participant-history-list">
        <article className="participant-history-card">
          <div className="participant-history-card__status">
            <CheckCircle2 aria-hidden="true" />

            <span>
              <strong>Pendaftaran Aktif</strong>
              <small>Proses sedang berjalan</small>
            </span>
          </div>

          <div className="participant-history-card__content">
            <p>Diklat Pembentukan Kerja Sama CMA CGM</p>

            <h2>Nautika</h2>

            <div>
              <CalendarDays aria-hidden="true" />

              <span>
                Gelombang II · Tahun Akademik 2026/2027
              </span>
            </div>

            <span>No. Pendaftaran: STIP24051234</span>
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
        </article>
      </section>
    </div>
  );
}