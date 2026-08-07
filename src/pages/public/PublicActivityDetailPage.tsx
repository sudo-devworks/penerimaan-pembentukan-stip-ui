import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  WalletCards,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { ActionLink, Button } from "../../components";
import {
  findPublicActivity,
  getActivityPrograms,
} from "../../features/public/catalog";
import { participantPortalRoutes } from "../../routes";
import { NotFoundPage } from "./NotFoundPage";

import "./PublicActivityDetailPage.css";

export function PublicActivityDetailPage() {
  const navigate = useNavigate();
  const { activitySlug } = useParams();
  const activity = findPublicActivity(activitySlug);

  if (!activity) {
    return <NotFoundPage />;
  }

  const programs = getActivityPrograms(activity);
  const registrationOpen = activity.status === "open";

  return (
    <div className="public-activity-detail">
      <section className="public-activity-detail__hero">
        <div className="public-shell-container public-activity-detail__hero-inner">
          <ActionLink
            href="/kegiatan"
            variant="standalone"
            leadingIcon={<ArrowLeft />}
            onClick={(event) => {
              event.preventDefault();
              navigate("/kegiatan");
            }}
          >
            Kembali ke daftar kegiatan
          </ActionLink>

          <div className="public-activity-detail__hero-grid">
            <div className="public-activity-detail__hero-content">
              <span
                className="public-activity-detail__status"
                data-status={activity.status}
              >
                {activity.statusLabel}
              </span>

              <p>{activity.partner}</p>
              <h1>{activity.title}</h1>
              <span>{activity.description}</span>
            </div>

            <aside
              className="public-activity-detail__registration"
              aria-labelledby="registration-summary-title"
            >
              <h2 id="registration-summary-title">
                Ringkasan pendaftaran
              </h2>

              <dl>
                <div>
                  <dt>
                    <CalendarDays aria-hidden="true" />
                    Periode pendaftaran
                  </dt>
                  <dd>{activity.registrationPeriod}</dd>
                </div>

                <div>
                  <dt>
                    <CalendarDays aria-hidden="true" />
                    Periode seleksi
                  </dt>
                  <dd>{activity.selectionPeriod}</dd>
                </div>

                <div>
                  <dt>
                    <MapPin aria-hidden="true" />
                    Lokasi
                  </dt>
                  <dd>{activity.location}</dd>
                </div>

                <div>
                  <dt>
                    <WalletCards aria-hidden="true" />
                    Biaya
                  </dt>
                  <dd>{activity.registrationFee}</dd>
                </div>
              </dl>

              <Button
                fullWidth
                disabled={!registrationOpen}
                trailingIcon={<ArrowRight />}
                onClick={() =>
                  navigate(participantPortalRoutes.register)
                }
              >
                {registrationOpen
                  ? "Daftar pada Kegiatan Ini"
                  : "Pendaftaran Belum Dibuka"}
              </Button>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="public-activity-detail__section"
        aria-labelledby="activity-programs-title"
      >
        <div className="public-shell-container">
          <div className="public-activity-detail__section-heading">
            <p>Program tersedia</p>
            <h2 id="activity-programs-title">
              Pilih program sesuai tujuan pendidikanmu
            </h2>
          </div>

          <div className="public-activity-detail__programs">
            {programs.map((program) => (
              <article
                key={program.slug}
                className="public-activity-program"
              >
                <div>
                  <p>{program.shortName}</p>
                  <h3>{program.name}</h3>
                  <span>{program.summary}</span>
                </div>

                <dl>
                  <div>
                    <dt>Kuota</dt>
                    <dd>
                      {program.quota > 0
                        ? `${program.quota} peserta`
                        : "Belum ditetapkan"}
                    </dd>
                  </div>

                  <div>
                    <dt>Ketersediaan</dt>
                    <dd>{program.availabilityLabel}</dd>
                  </div>
                </dl>

                <ActionLink
                  href={`/program/${program.slug}`}
                  variant="standalone"
                  trailingIcon={<ArrowRight />}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(`/program/${program.slug}`);
                  }}
                >
                  Lihat informasi program
                </ActionLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="public-activity-detail__section public-activity-detail__highlights"
        aria-labelledby="activity-highlights-title"
      >
        <div className="public-shell-container public-activity-detail__highlights-grid">
          <div className="public-activity-detail__section-heading">
            <p>Informasi penting</p>
            <h2 id="activity-highlights-title">
              Hal yang perlu diketahui
            </h2>
          </div>

          <ul>
            {activity.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}