import {
  ArrowLeft,
  CalendarDays,
  Download,
  IdCard,
  MapPin,
  QrCode,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  InlineAlert,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

export function ParticipantExamCardPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Kartu Ujian
          </p>

          <h1>Kartu peserta seleksi</h1>

          <p>
            Tunjukkan kartu ini dan QR Code kepada petugas saat
            menghadiri tahapan seleksi.
          </p>
        </div>

        <Button
          variant="outline"
          leadingIcon={<ArrowLeft />}
          onClick={() => navigate(participantRoutes.selection)}
        >
          Kembali ke Seleksi
        </Button>
      </header>

      <InlineAlert
        severity="info"
        title="Gunakan kartu ujian yang aktif"
      >
        QR Code pada kartu ini digunakan untuk proses identifikasi
        dan kehadiran peserta.
      </InlineAlert>

      <section className="participant-exam-card">
        <div className="participant-exam-card__header">
          <span className="participant-exam-card__icon">
            <IdCard aria-hidden="true" />
          </span>

          <div>
            <p>Portal Penerimaan STIP</p>
            <h2>Kartu Peserta Seleksi</h2>
          </div>
        </div>

        <div className="participant-exam-card__body">
          <div className="participant-exam-card__identity">
            <div className="participant-exam-card__photo">
              BS
            </div>

            <div>
              <span>Nama Peserta</span>
              <strong>Budi Santoso</strong>

              <span>No. Pendaftaran</span>
              <strong>STIP24051234</strong>

              <span>Program</span>
              <strong>Nautika</strong>
            </div>
          </div>

          <div className="participant-exam-card__qr">
            <QrCode aria-hidden="true" />

            <span>QR Kehadiran</span>
          </div>
        </div>

        <div className="participant-exam-card__schedule">
          <div>
            <CalendarDays aria-hidden="true" />

            <span>
              Jadwal
              <strong>15 Juni 2026 · 09:00 WIB</strong>
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
      </section>

      <div className="participant-page-actions">
        <Button
          variant="outline"
          leadingIcon={<Download />}
        >
          Unduh Kartu Ujian
        </Button>
      </div>
    </div>
  );
}