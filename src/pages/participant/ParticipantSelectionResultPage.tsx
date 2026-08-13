import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

const results = [
  {
    stage: "Seleksi Administrasi",
    status: "Lulus",
    state: "success",
  },
  {
    stage: "Wawancara",
    status: "Lulus",
    state: "success",
  },
  {
    stage: "Pemeriksaan Kesehatan",
    status: "Lulus",
    state: "success",
  },
];

export function ParticipantSelectionResultPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Hasil Seleksi
          </p>

          <h1>Hasil penerimaan Anda</h1>

          <p>
            Informasi pada halaman ini merupakan hasil yang telah
            dipublikasikan melalui Portal Penerimaan STIP.
          </p>
        </div>
      </header>

      <section className="participant-result-hero">
        <span className="participant-result-hero__icon">
          <BadgeCheck aria-hidden="true" />
        </span>

        <div>
          <p>Hasil Akhir</p>
          <h2>Selamat, Anda dinyatakan Lulus</h2>

          <span>
            Anda telah menyelesaikan seluruh tahapan penerimaan untuk
            program Nautika.
          </span>
        </div>

        <Button
          variant="outline"
          onClick={() => navigate(participantRoutes.process)}
        >
          Lihat Proses
        </Button>
      </section>

      <section className="participant-result-breakdown">
        <div className="participant-section-heading">
          <div>
            <p>Ringkasan hasil</p>
            <h2>Hasil setiap tahapan</h2>
          </div>
        </div>

        <div className="participant-result-breakdown__list">
          {results.map((result) => (
            <div key={result.stage}>
              <CheckCircle2 aria-hidden="true" />

              <span>
                <strong>{result.stage}</strong>
                <small>Status telah dipublikasikan</small>
              </span>

              <span className="participant-status participant-status--success">
                {result.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="participant-result-next">
        <ClipboardCheck aria-hidden="true" />

        <div>
          <p>Langkah berikutnya</p>
          <h2>Ikuti informasi lanjutan dari STIP</h2>

          <span>
            Informasi registrasi lanjutan akan disampaikan melalui
            notifikasi dan pengumuman resmi.
          </span>
        </div>

        <ActionLink
          href={participantRoutes.notifications}
          trailingIcon={<ArrowRight />}
          onClick={(event) => {
            event.preventDefault();
            navigate(participantRoutes.notifications);
          }}
        >
          Lihat Notifikasi
        </ActionLink>
      </section>
    </div>
  );
}