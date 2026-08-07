import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";
import { publicRequirementGroups } from "../../features/public/information";
import { participantPortalRoutes } from "../../routes";

import "./PublicRequirementsPage.css";

export function PublicRequirementsPage() {
  const navigate = useNavigate();

  return (
    <div className="public-requirements-page">
      <header className="public-information-hero">
        <div className="public-shell-container public-information-hero__inner">
          <p>Persyaratan pendaftaran</p>
          <h1>Persiapkan data dan dokumen sebelum mendaftar</h1>
          <span>
            Ketentuan akhir dapat berbeda pada setiap kegiatan dan program.
            Selalu periksa persyaratan yang tampil pada akun peserta.
          </span>
        </div>
      </header>

      <section
        className="public-requirements-page__intro"
        aria-labelledby="requirements-intro-title"
      >
        <div className="public-shell-container public-requirements-page__intro-grid">
          <div className="public-requirements-page__intro-icon">
            <FileCheck2 aria-hidden="true" />
          </div>

          <div>
            <h2 id="requirements-intro-title">
              Pastikan setiap dokumen jelas dan masih berlaku
            </h2>
            <p>
              File yang tidak lengkap, tidak terbaca, atau tidak sesuai dapat
              ditangguhkan maupun ditolak saat proses verifikasi administrasi.
            </p>
          </div>
        </div>
      </section>

      <section
        className="public-requirements-page__content"
        aria-labelledby="requirements-list-title"
      >
        <div className="public-shell-container">
          <div className="public-information-heading">
            <p>Daftar persiapan</p>
            <h2 id="requirements-list-title">
              Persyaratan umum calon peserta
            </h2>
          </div>

          <div className="public-requirements-page__groups">
            {publicRequirementGroups.map((group) => (
              <article
                key={group.id}
                className="public-requirement-group"
              >
                <div className="public-requirement-group__header">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>

                <ul>
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <CheckCircle2 aria-hidden="true" />

                      <div>
                        <div className="public-requirement-item__title">
                          <strong>{item.title}</strong>

                          <span data-required={item.required}>
                            {item.required ? "Wajib" : "Sesuai kegiatan"}
                          </span>
                        </div>

                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="public-requirements-page__notice">
        <div className="public-shell-container public-requirements-page__notice-inner">
          <Info aria-hidden="true" />

          <div>
            <h2>Perhatikan ketentuan pada kegiatan yang dipilih</h2>
            <p>
              Persyaratan yang tampil di halaman ini merupakan gambaran umum.
              Dokumen final mengikuti konfigurasi kegiatan, gelombang, dan
              program pada akun peserta.
            </p>
          </div>
        </div>
      </section>

      <section className="public-information-cta">
        <div className="public-shell-container public-information-cta__inner">
          <div>
            <p>Dokumen sudah siap?</p>
            <h2>Buat akun untuk memulai pendaftaran</h2>
          </div>

          <Button
            size="lg"
            trailingIcon={<ArrowRight />}
            onClick={() =>
              navigate(participantPortalRoutes.register)
            }
          >
            Daftar Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
}