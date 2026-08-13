import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  RefreshCcw,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
  FileInput,
  InlineAlert,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

const documents = [
  {
    name: "Kartu Tanda Penduduk",
    description: "KTP peserta yang masih berlaku.",
    status: "accepted",
    statusLabel: "Diterima",
    fileName: "ktp-budi-santoso.pdf",
  },
  {
    name: "Ijazah / Surat Keterangan Lulus",
    description: "Dokumen pendidikan terakhir.",
    status: "review",
    statusLabel: "Sedang Diverifikasi",
    fileName: "ijazah.pdf",
  },
  {
    name: "Pas Foto",
    description: "Pas foto terbaru dengan latar sesuai ketentuan.",
    status: "revision",
    statusLabel: "Perlu Diperbaiki",
    fileName: "pas-foto.jpg",
  },
  {
    name: "Surat Keterangan Sehat",
    description: "Dokumen kesehatan sesuai persyaratan kegiatan.",
    status: "empty",
    statusLabel: "Belum Diunggah",
    fileName: null,
  },
] as const;

export function ParticipantDocumentsPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Dokumen
          </p>

          <h1>Lengkapi dokumen persyaratan</h1>

          <p>
            Unggah dokumen yang diminta dan pantau hasil
            verifikasi setiap berkas.
          </p>
        </div>

        <div className="participant-page-header__meta participant-page-header__meta--progress">
          <span>Dokumen lengkap</span>
          <strong>3 / 4</strong>
        </div>
      </header>

      <InlineAlert
        severity="warning"
        title="Ada dokumen yang memerlukan tindakan"
      >
        Pas Foto perlu diperbaiki dan Surat Keterangan Sehat
        belum diunggah.
      </InlineAlert>

      <section className="participant-document-summary">
        <div>
          <CheckCircle2 aria-hidden="true" />
          <span>
            <strong>1</strong>
            Diterima
          </span>
        </div>

        <div>
          <Clock3 aria-hidden="true" />
          <span>
            <strong>1</strong>
            Diverifikasi
          </span>
        </div>

        <div>
          <RefreshCcw aria-hidden="true" />
          <span>
            <strong>1</strong>
            Perlu diperbaiki
          </span>
        </div>

        <div>
          <Upload aria-hidden="true" />
          <span>
            <strong>1</strong>
            Belum diunggah
          </span>
        </div>
      </section>

      <section className="participant-document-list">
        {documents.map((document) => (
          <article
            key={document.name}
            className="participant-document-card"
            data-status={document.status}
          >
            <div className="participant-document-card__icon">
              {document.status === "accepted" ? (
                <FileCheck2 aria-hidden="true" />
              ) : (
                <FileText aria-hidden="true" />
              )}
            </div>

            <div className="participant-document-card__content">
              <div>
                <h2>{document.name}</h2>

                <span
                  className={`participant-status participant-status--${document.status}`}
                >
                  {document.statusLabel}
                </span>
              </div>

              <p>{document.description}</p>

              {document.fileName && (
                <span className="participant-document-card__file">
                  {document.fileName}
                </span>
              )}

              {document.status === "revision" && (
                <div className="participant-document-card__note">
                  <strong>Catatan verifikator</strong>
                  <p>
                    Pastikan wajah terlihat jelas dan gunakan
                    foto terbaru sesuai ketentuan.
                  </p>
                </div>
              )}
            </div>

            <div className="participant-document-card__action">
              {document.status === "accepted" && (
                <ActionLink href="#">
                  Lihat Dokumen
                </ActionLink>
              )}

              {document.status === "review" && (
                <span className="participant-document-card__waiting">
                  Menunggu hasil verifikasi
                </span>
              )}

              {document.status === "revision" && (
                <FileInput
                  label="Unggah Ulang"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              )}

              {document.status === "empty" && (
                <FileInput
                  label="Pilih File"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              )}
            </div>
          </article>
        ))}
      </section>

      <div className="participant-page-actions">
        <Button
          variant="outline"
          onClick={() => navigate(participantRoutes.biodata)}
        >
          Kembali ke Biodata
        </Button>

        <Button
          trailingIcon={<ArrowRight />}
          onClick={() => navigate(participantRoutes.process)}
        >
          Kembali ke Proses
        </Button>
      </div>
    </div>
  );
}