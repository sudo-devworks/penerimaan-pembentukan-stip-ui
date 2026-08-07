import { ArrowRight, CalendarSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";
import { PublicActivityCard } from "../../features/public/activity";
import { publicActivities } from "../../features/public/catalog";
import { participantPortalRoutes } from "../../routes";

import "./PublicActivitiesPage.css";

export function PublicActivitiesPage() {
  const navigate = useNavigate();

  return (
    <div className="public-activities-page">
      <header className="public-catalog-hero">
        <div className="public-shell-container public-catalog-hero__inner">
          <p>Kegiatan penerimaan</p>
          <h1>Temukan kegiatan penerimaan yang tersedia</h1>
          <span>
            Pilih kegiatan untuk melihat program, periode pendaftaran,
            persyaratan, biaya, dan jadwal seleksi.
          </span>
        </div>
      </header>

      <section
        className="public-activities-page__content"
        aria-labelledby="available-activities-title"
      >
        <div className="public-shell-container">
          <div className="public-activities-page__heading">
            <div>
              <p>Katalog kegiatan</p>
              <h2 id="available-activities-title">
                Kegiatan penerimaan
              </h2>
            </div>

            <span>
              {publicActivities.length} kegiatan ditampilkan
            </span>
          </div>

          {publicActivities.length > 0 ? (
            <div className="public-activities-page__grid">
              {publicActivities.map((activity) => (
                <PublicActivityCard
                  key={activity.slug}
                  activity={activity}
                />
              ))}
            </div>
          ) : (
            <div className="public-activities-page__empty">
              <CalendarSearch aria-hidden="true" />
              <h2>Belum ada kegiatan tersedia</h2>
              <p>
                Informasi kegiatan penerimaan akan ditampilkan setelah
                diumumkan secara resmi.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="public-catalog-cta">
        <div className="public-shell-container public-catalog-cta__inner">
          <div>
            <p>Sudah menemukan kegiatan yang sesuai?</p>
            <h2>Buat akun untuk memulai proses pendaftaran</h2>
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