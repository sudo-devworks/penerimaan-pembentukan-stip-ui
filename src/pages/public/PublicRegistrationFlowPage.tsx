import {
  ArrowRight,
  Check,
  CircleUserRound,
  ClipboardList,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";
import { publicRegistrationSteps } from "../../features/public/information";
import { participantPortalRoutes } from "../../routes";

import "./PublicRegistrationFlowPage.css";

export function PublicRegistrationFlowPage() {
  const navigate = useNavigate();

  return (
    <div className="public-registration-flow-page">
      <header className="public-information-hero">
        <div className="public-shell-container public-information-hero__inner">
          <p>Alur pendaftaran</p>
          <h1>Ikuti proses penerimaan secara bertahap</h1>
          <span>
            Setiap tahap dapat dipantau melalui Portal Penerimaan STIP mulai
            dari pembuatan akun hingga pengumuman hasil akhir.
          </span>
        </div>
      </header>

      <section
        className="public-registration-flow-page__overview"
        aria-labelledby="registration-overview-title"
      >
        <div className="public-shell-container public-registration-flow-page__overview-grid">
          <CircleUserRound aria-hidden="true" />

          <div>
            <h2 id="registration-overview-title">
              Satu akun untuk seluruh proses penerimaan
            </h2>
            <p>
              Gunakan akun peserta untuk memilih kegiatan, mengunggah dokumen,
              memantau tagihan, melihat jadwal, dan menerima pengumuman.
            </p>
          </div>
        </div>
      </section>

      <section
        className="public-registration-flow-page__content"
        aria-labelledby="registration-steps-title"
      >
        <div className="public-shell-container">
          <div className="public-information-heading">
            <p>Tahapan utama</p>
            <h2 id="registration-steps-title">
              Proses dari pendaftaran sampai hasil akhir
            </h2>
          </div>

          <ol className="public-registration-flow">
            {publicRegistrationSteps.map((step) => (
              <li key={step.number}>
                <div className="public-registration-flow__marker">
                  <span>{step.number}</span>
                </div>

                <article>
                  <div className="public-registration-flow__title">
                    <ClipboardList aria-hidden="true" />
                    <h3>{step.title}</h3>
                  </div>

                  <p>{step.description}</p>

                  <ul>
                    {step.notes.map((note) => (
                      <li key={note}>
                        <Check aria-hidden="true" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="public-information-cta">
        <div className="public-shell-container public-information-cta__inner">
          <div>
            <p>Mulai langkah pertama</p>
            <h2>Buat akun Portal Penerimaan STIP</h2>
          </div>

          <Button
            size="lg"
            trailingIcon={<ArrowRight />}
            onClick={() =>
              navigate(participantPortalRoutes.register)
            }
          >
            Buat Akun
          </Button>
        </div>
      </section>
    </div>
  );
}