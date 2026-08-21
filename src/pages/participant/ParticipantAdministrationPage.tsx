import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button, InlineAlert } from "../../components";
import { participantRoutes } from "../../routes/participantRoutes";

import "./ParticipantPages.css";

const verificationItems = [
  { label: "KTP / Identitas Diri", status: "Diterima" },
  { label: "Ijazah Terakhir", status: "Diterima" },
  { label: "Akta Kelahiran", status: "Diterima" },
  { label: "Pas Foto", status: "Diterima" },
] as const;

export function ParticipantAdministrationPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">Verifikasi Administrasi</p>
          <h1>Administrasi Anda telah diverifikasi</h1>
          <p>
            Seluruh dokumen wajib telah diperiksa. Anda dapat melanjutkan ke
            tahapan seleksi sesuai jadwal yang tersedia.
          </p>
        </div>

        <span className="participant-payment-status participant-payment-status--paid">
          <CheckCircle2 aria-hidden="true" />
          Lulus Administrasi
        </span>
      </header>

      <InlineAlert severity="success" title="Verifikasi administrasi selesai">
        Dokumen wajib Budi Santoso telah diterima untuk Diklat Pembentukan
        Kerja Sama CMA CGM — Program Nautika, Gelombang II TA 2026/2027.
      </InlineAlert>

      <section className="participant-payment-grid">
        <article className="participant-payment-card participant-payment-card--primary">
          <div className="participant-payment-card__heading">
            <div>
              <p>Status akhir</p>
              <h2>Lulus Verifikasi Administrasi</h2>
            </div>
            <ShieldCheck aria-hidden="true" />
          </div>

          <div className="participant-payment-card__details">
            <div>
              <span>No. Pendaftaran</span>
              <strong>STIP24051234</strong>
            </div>
            <div>
              <span>Program</span>
              <strong>Nautika</strong>
            </div>
            <div>
              <span>Tanggal Verifikasi</span>
              <strong>10 Juni 2026 · 14:20 WIB</strong>
            </div>
            <div>
              <span>Tahap Berikutnya</span>
              <strong>Seleksi</strong>
            </div>
          </div>
        </article>

        <article className="participant-payment-card participant-payment-card--soft">
          <div className="participant-payment-card__heading">
            <div>
              <p>Selanjutnya</p>
              <h2>Persiapkan tahapan seleksi</h2>
            </div>
            <Clock3 aria-hidden="true" />
          </div>
          <p>
            Lihat kartu ujian dan jadwal seleksi untuk memastikan waktu serta
            lokasi pelaksanaan setiap tahapan.
          </p>
        </article>
      </section>

      <section className="participant-info-panel">
        <div className="participant-section-heading">
          <div>
            <p>Dokumen wajib</p>
            <h2>Ringkasan hasil verifikasi</h2>
          </div>
          <FileCheck2 aria-hidden="true" />
        </div>

        <div className="participant-agenda-list">
          {verificationItems.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.status}</strong>
            </div>
          ))}
        </div>
      </section>

      <div className="participant-page-actions">
        <Button
          variant="outline"
          onClick={() => navigate(participantRoutes.documents)}
        >
          Lihat Dokumen
        </Button>

        <Button
          trailingIcon={<ArrowRight />}
          onClick={() => navigate(participantRoutes.selection)}
        >
          Lanjut ke Seleksi
        </Button>
      </div>
    </div>
  );
}
