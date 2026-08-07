import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { ActionLink, Button } from "../../components";
import {
  findPublicProgram,
  publicActivities,
} from "../../features/public/catalog";
import { NotFoundPage } from "./NotFoundPage";

import "./PublicProgramDetailPage.css";

export function PublicProgramDetailPage() {
  const navigate = useNavigate();
  const { programSlug } = useParams();
  const program = findPublicProgram(programSlug);

  if (!program) {
    return <NotFoundPage />;
  }

  const relatedActivities = publicActivities.filter((activity) =>
    activity.programs.some(
      (activityProgram) =>
        activityProgram.programSlug === program.slug,
    ),
  );

  return (
    <div className="public-program-detail">
      <section className="public-program-detail__hero">
        <div className="public-shell-container public-program-detail__hero-inner">
          <ActionLink
            href="/program"
            variant="standalone"
            leadingIcon={<ArrowLeft />}
            onClick={(event) => {
              event.preventDefault();
              navigate("/program");
            }}
          >
            Kembali ke daftar program
          </ActionLink>

          <div className="public-program-detail__hero-content">
            <span aria-hidden="true">
              <Compass />
            </span>

            <div>
              <p>{program.shortName}</p>
              <h1>{program.name}</h1>
              <span>{program.description}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="public-program-detail__section"
        aria-labelledby="competency-focus-title"
      >
        <div className="public-shell-container public-program-detail__content-grid">
          <div>
            <p>Fokus kompetensi</p>
            <h2 id="competency-focus-title">
              Kompetensi utama yang dipelajari
            </h2>
          </div>

          <ul>
            {program.competencyFocus.map((competency) => (
              <li key={competency}>
                <CheckCircle2 aria-hidden="true" />
                <span>{competency}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="public-program-detail__section public-program-detail__career"
        aria-labelledby="career-overview-title"
      >
        <div className="public-shell-container">
          <p>Gambaran karier</p>
          <h2 id="career-overview-title">
            Arah pengembangan profesional
          </h2>
          <span>{program.careerOverview}</span>
        </div>
      </section>

      <section
        className="public-program-detail__section"
        aria-labelledby="related-activities-title"
      >
        <div className="public-shell-container">
          <div className="public-program-detail__section-heading">
            <div>
              <p>Kegiatan terkait</p>
              <h2 id="related-activities-title">
                Kegiatan yang menyediakan program ini
              </h2>
            </div>

            <ActionLink
              href="/kegiatan"
              variant="standalone"
              trailingIcon={<ArrowRight />}
              onClick={(event) => {
                event.preventDefault();
                navigate("/kegiatan");
              }}
            >
              Lihat semua kegiatan
            </ActionLink>
          </div>

          <div className="public-program-detail__activities">
            {relatedActivities.map((activity) => (
              <article key={activity.slug}>
                <span data-status={activity.status}>
                  {activity.statusLabel}
                </span>
                <h3>{activity.title}</h3>
                <p>{activity.registrationPeriod}</p>

                <Button
                  variant="outline"
                  trailingIcon={<ArrowRight />}
                  onClick={() =>
                    navigate(`/kegiatan/${activity.slug}`)
                  }
                >
                  Lihat Kegiatan
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}