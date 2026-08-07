import { ArrowRight, CalendarDays, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ActionLink } from "../../../components";
import type { PublicAnnouncement } from "./publicAnnouncements";

import "./PublicAnnouncementCard.css";

interface PublicAnnouncementCardProps {
  announcement: PublicAnnouncement;
}

export function PublicAnnouncementCard({
  announcement,
}: PublicAnnouncementCardProps) {
  const navigate = useNavigate();
  const href = `/pengumuman/${announcement.slug}`;

  return (
    <article className="public-announcement-card">
      <div className="public-announcement-card__metadata">
        <span>
          <Megaphone aria-hidden="true" />
          {announcement.category}
        </span>

        <time>
          <CalendarDays aria-hidden="true" />
          {announcement.publishedAt}
        </time>
      </div>

      {announcement.important ? (
        <span className="public-announcement-card__important">
          Informasi penting
        </span>
      ) : null}

      <div className="public-announcement-card__content">
        <h2>{announcement.title}</h2>
        <p>{announcement.summary}</p>
      </div>

      <ActionLink
        href={href}
        variant="standalone"
        trailingIcon={<ArrowRight />}
        onClick={(event) => {
          event.preventDefault();
          navigate(href);
        }}
      >
        Baca pengumuman
      </ActionLink>
    </article>
  );
}