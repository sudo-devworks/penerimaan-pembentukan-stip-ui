import { ArrowLeft, CalendarDays, Megaphone } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { ActionLink } from "../../components";
import { findPublicAnnouncement } from "../../features/public/announcement";
import { NotFoundPage } from "./NotFoundPage";

import "./PublicAnnouncementDetailPage.css";

export function PublicAnnouncementDetailPage() {
  const navigate = useNavigate();
  const { announcementSlug } = useParams();
  const announcement = findPublicAnnouncement(announcementSlug);

  if (!announcement) {
    return <NotFoundPage />;
  }

  return (
    <article className="public-announcement-detail">
      <header className="public-announcement-detail__header">
        <div className="public-shell-container public-announcement-detail__header-inner">
          <ActionLink
            href="/pengumuman"
            variant="standalone"
            leadingIcon={<ArrowLeft />}
            onClick={(event) => {
              event.preventDefault();
              navigate("/pengumuman");
            }}
          >
            Kembali ke pengumuman
          </ActionLink>

          <div className="public-announcement-detail__metadata">
            <span>
              <Megaphone aria-hidden="true" />
              {announcement.category}
            </span>

            <time>
              <CalendarDays aria-hidden="true" />
              {announcement.publishedAt}
            </time>
          </div>

          <h1>{announcement.title}</h1>
          <p>{announcement.summary}</p>
        </div>
      </header>

      <section
        className="public-announcement-detail__content"
        aria-label="Isi pengumuman"
      >
        <div className="public-shell-container">
          <div className="public-announcement-detail__article">
            {announcement.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}