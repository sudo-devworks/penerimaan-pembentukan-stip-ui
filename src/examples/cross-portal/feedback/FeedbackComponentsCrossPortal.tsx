import { Button, TextAction } from "../../../components/actions";
import {
  Alert,
  EmptyState,
  ErrorState,
  InlineAlert,
  LoadingMessage,
  ProgressIndicator,
  SkeletonBlock,
  SkeletonText,
  SuccessState,
  Toast,
} from "../../../components/feedback";

import "./FeedbackComponentsCrossPortal.css";

export const FeedbackComponentsCrossPortal = () => {
  return (
    <main className="feedback-cross-portal">
      <header className="feedback-cross-portal__header">
        <p className="feedback-cross-portal__eyebrow">
          Penerimaan Pembentukan STIP
        </p>

        <h1 className="feedback-cross-portal__title">
          Feedback Components Cross-Portal
        </h1>

        <p className="feedback-cross-portal__intro">
          Satu sistem feedback yang digunakan melalui composition, placement,
          dan density yang berbeda.
        </p>
      </header>

      <section
        className="feedback-cross-portal__section"
        aria-labelledby="public-feedback-heading"
      >
        <div className="feedback-cross-portal__section-heading">
          <p className="feedback-cross-portal__area-label">Public Website</p>

          <h2 id="public-feedback-heading">Institutional Editorial Maritime</h2>

          <p>
            Comfortable density dengan pesan yang informatif, tenang, dan mudah
            dipahami.
          </p>
        </div>

        <div
          className="feedback-cross-portal__public"
          data-density="comfortable"
        >
          <Alert severity="info" title="Pendaftaran belum dibuka">
            Informasi jadwal dan kegiatan akan ditampilkan setelah pendaftaran
            diterbitkan.
          </Alert>

          <EmptyState
            title="Belum ada kegiatan aktif"
            description="Daftar kegiatan akan muncul setelah informasi resmi tersedia."
            primaryAction={<Button variant="secondary">Muat ulang</Button>}
          />

          <ErrorState
            variant="compact"
            title="Daftar kegiatan belum dapat dimuat"
            description="Periksa koneksi lalu coba kembali."
            primaryAction={<TextAction>Coba lagi</TextAction>}
          />
        </div>
      </section>

      <section
        className="feedback-cross-portal__section"
        aria-labelledby="participant-feedback-heading"
      >
        <div className="feedback-cross-portal__section-heading">
          <p className="feedback-cross-portal__area-label">Portal Peserta</p>

          <h2 id="participant-feedback-heading">Guided Personal Process</h2>

          <p>
            Comfortable density dengan guidance, status proses, dan next step
            yang jelas.
          </p>
        </div>

        <div
          className="feedback-cross-portal__participant"
          data-density="comfortable"
        >
          <InlineAlert
            severity="warning"
            title="Dokumen perlu diperbaiki"
            action={<TextAction>Pilih ulang</TextAction>}
          >
            Unggah dokumen identitas yang dapat dibaca dengan jelas.
          </InlineAlert>

          <ProgressIndicator
            label="Mengunggah dokumen"
            value={65}
            description="Jangan menutup halaman selama proses berlangsung."
          />

          <SuccessState
            title="Biodata telah difinalisasi"
            description="Proses berikutnya dapat dilanjutkan melalui dashboard peserta."
            primaryAction={<Button>Unggah dokumen</Button>}
            secondaryAction={
              <Button variant="secondary">Kembali ke dashboard</Button>
            }
          />

          <Toast
            severity="success"
            title="Dokumen berhasil dipilih"
            duration={null}
          >
            File siap diunggah setelah formulir disimpan.
          </Toast>
        </div>
      </section>

      <section
        className="feedback-cross-portal__section"
        aria-labelledby="internal-feedback-heading"
      >
        <div className="feedback-cross-portal__section-heading">
          <p className="feedback-cross-portal__area-label">Portal Internal</p>

          <h2 id="internal-feedback-heading">Operational Structured Data</h2>

          <p>
            Default dan compact density untuk workspace operasional dengan data
            lebih padat.
          </p>
        </div>

        <div className="feedback-cross-portal__internal" data-density="default">
          <div className="feedback-cross-portal__internal-toolbar">
            <InlineAlert severity="success" title="Perubahan berhasil disimpan">
              Status peserta telah diperbarui.
            </InlineAlert>
          </div>

          <div className="feedback-cross-portal__internal-grid">
            <div
              className="feedback-cross-portal__panel"
              data-density="compact"
            >
              <h3>Loading tabel</h3>

              <LoadingMessage
                title="Memuat data peserta…"
                description="Filter dan tabel sedang diperbarui."
              />

              <div
                aria-label="Memuat tabel peserta"
                aria-busy="true"
                className="feedback-cross-portal__skeleton-list"
              >
                <SkeletonBlock height="44px" />
                <SkeletonBlock height="44px" />
                <SkeletonBlock height="44px" />
              </div>
            </div>

            <div
              className="feedback-cross-portal__panel"
              data-density="compact"
            >
              <h3>Ringkasan peserta</h3>

              <div aria-label="Memuat ringkasan peserta" aria-busy="true">
                <SkeletonText lines={4} lastLineWidth="48%" />
              </div>
            </div>
          </div>

          <ErrorState
            variant="compact"
            title="Tabel belum dapat dimuat"
            description="Permintaan belum berhasil diproses."
            primaryAction={<Button size="sm">Coba lagi</Button>}
            secondaryAction={<TextAction>Hapus filter</TextAction>}
          />
        </div>
      </section>
    </main>
  );
};

FeedbackComponentsCrossPortal.displayName = "FeedbackComponentsCrossPortal";
