import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Ship,
  UsersRound,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, InlineAlert } from "../../components";
import { participantRoutes } from "../../routes/participantRoutes";

import "./ParticipantPages.css";

const registrationSteps = [
  {
    label: "Pilih Kegiatan",
    href: participantRoutes.activities,
  },
  {
    label: "Pilih Program",
    href: participantRoutes.registrationChoice,
  },
  {
    label: "Konfirmasi",
    href: participantRoutes.registrationConfirmation,
  },
] as const;

function getCurrentStep(pathname: string) {
  if (pathname === participantRoutes.registrationChoice) return 1;
  if (pathname === participantRoutes.registrationConfirmation) return 2;
  return 0;
}

export function ParticipantRegistrationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentStep = getCurrentStep(location.pathname);

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">Pendaftaran</p>
          <h1>Daftar program Diklat Pembentukan</h1>
          <p>
            Pilih kegiatan dan program yang sesuai, lalu periksa kembali
            pilihan sebelum mengonfirmasi pendaftaran.
          </p>
        </div>

        <div className="participant-page-header__meta participant-page-header__meta--progress">
          <span>Langkah</span>
          <strong>{currentStep + 1} / 3</strong>
        </div>
      </header>

      <section className="participant-process-overview" aria-label="Tahapan pendaftaran">
        <ol className="participant-process-overview__steps">
          {registrationSteps.map((step, index) => (
            <li
              key={step.href}
              className="participant-process-overview__step"
              data-state={
                index < currentStep
                  ? "completed"
                  : index === currentStep
                    ? "current"
                    : "upcoming"
              }
            >
              <div className="participant-process-overview__marker">
                {index < currentStep ? (
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

      {currentStep === 0 && (
        <section className="participant-payment-grid">
          <article className="participant-payment-card participant-payment-card--primary">
            <div className="participant-payment-card__heading">
              <div>
                <p>Kegiatan aktif</p>
                <h2>Diklat Pembentukan Kerja Sama CMA CGM</h2>
              </div>
              <Ship aria-hidden="true" />
            </div>

            <div className="participant-payment-card__details">
              <div>
                <span>Gelombang</span>
                <strong>Gelombang II</strong>
              </div>
              <div>
                <span>Tahun Akademik</span>
                <strong>2026/2027</strong>
              </div>
              <div>
                <span>Mitra</span>
                <strong>CMA CGM</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>Pendaftaran Dibuka</strong>
              </div>
            </div>

            <Button
              trailingIcon={<ArrowRight />}
              onClick={() => navigate(participantRoutes.registrationChoice)}
            >
              Pilih Kegiatan Ini
            </Button>
          </article>

          <article className="participant-payment-card participant-payment-card--soft">
            <div className="participant-payment-card__heading">
              <div>
                <p>Periode pendaftaran</p>
                <h2>15–24 Mei 2026</h2>
              </div>
              <CalendarDays aria-hidden="true" />
            </div>
            <p>
              Pastikan Anda membaca persyaratan dan memilih program sebelum
              batas akhir pendaftaran.
            </p>
          </article>
        </section>
      )}

      {currentStep === 1 && (
        <>
          <InlineAlert severity="info" title="Pilih satu program">
            Untuk prototype ini, program Nautika digunakan sebagai pilihan
            canonical peserta Budi Santoso.
          </InlineAlert>

          <section className="participant-payment-grid">
            <article className="participant-payment-card participant-payment-card--primary">
              <div className="participant-payment-card__heading">
                <div>
                  <p>Program dipilih</p>
                  <h2>Nautika</h2>
                </div>
                <GraduationCap aria-hidden="true" />
              </div>

              <div className="participant-payment-card__details">
                <div>
                  <span>Kuota</span>
                  <strong>120 peserta</strong>
                </div>
                <div>
                  <span>Biaya Formulir</span>
                  <strong>Rp500.000</strong>
                </div>
              </div>

              <span className="participant-status participant-status--success">
                Dipilih
              </span>
            </article>

            <article className="participant-payment-card">
              <div className="participant-payment-card__heading">
                <div>
                  <p>Program tersedia</p>
                  <h2>Teknika</h2>
                </div>
                <UsersRound aria-hidden="true" />
              </div>
              <p className="participant-payment-card__muted">
                Tersedia pada Gelombang II. Tidak dipilih pada demo flow ini.
              </p>
            </article>

            <article className="participant-payment-card">
              <div className="participant-payment-card__heading">
                <div>
                  <p>Program tersedia</p>
                  <h2>ETO</h2>
                </div>
                <UsersRound aria-hidden="true" />
              </div>
              <p className="participant-payment-card__muted">
                Tersedia pada Gelombang II. Tidak dipilih pada demo flow ini.
              </p>
            </article>
          </section>
        </>
      )}

      {currentStep === 2 && (
        <>
          <InlineAlert severity="success" title="Pilihan siap dikonfirmasi">
            Periksa kembali kegiatan, program, dan biaya formulir sebelum
            melanjutkan.
          </InlineAlert>

          <section className="participant-info-panel">
            <div className="participant-section-heading">
              <div>
                <p>Ringkasan pilihan</p>
                <h2>Pendaftaran Budi Santoso</h2>
              </div>
              <CheckCircle2 aria-hidden="true" />
            </div>

            <div className="participant-agenda-list">
              <div>
                <span>Kegiatan</span>
                <strong>Diklat Pembentukan Kerja Sama CMA CGM</strong>
              </div>
              <div>
                <span>Gelombang</span>
                <strong>Gelombang II · TA 2026/2027</strong>
              </div>
              <div>
                <span>Program</span>
                <strong>Nautika</strong>
              </div>
              <div>
                <span>Biaya Formulir</span>
                <strong>Rp500.000</strong>
              </div>
            </div>
          </section>
        </>
      )}

      <div className="participant-page-actions">
        {currentStep > 0 ? (
          <Button
            variant="outline"
            leadingIcon={<ArrowLeft />}
            onClick={() => navigate(registrationSteps[currentStep - 1].href)}
          >
            Kembali
          </Button>
        ) : (
          <Button
            variant="outline"
            leadingIcon={<ArrowLeft />}
            onClick={() => navigate(participantRoutes.process)}
          >
            Kembali ke Proses
          </Button>
        )}

        {currentStep === 1 && (
          <Button
            trailingIcon={<ArrowRight />}
            onClick={() => navigate(participantRoutes.registrationConfirmation)}
          >
            Lanjutkan
          </Button>
        )}

        {currentStep === 2 && (
          <Button
            trailingIcon={<ArrowRight />}
            onClick={() => navigate(participantRoutes.payment)}
          >
            Konfirmasi & Lanjut Pembayaran
          </Button>
        )}
      </div>
    </div>
  );
}
