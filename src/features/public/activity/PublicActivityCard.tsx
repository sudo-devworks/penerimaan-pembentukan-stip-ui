import {
  ArrowRight,
  CalendarDays,
  MapPin,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ActionLink } from "../../../components";
import type { PublicActivity } from "../catalog";

import "./PublicActivityCard.css";

interface PublicActivityCardProps {
  activity: PublicActivity;
}

export function PublicActivityCard({
  activity,
}: PublicActivityCardProps) {
  const navigate = useNavigate();

  return (
    <article className="public-activity-card">
      <div className="public-activity-card__header">
        <span
          className="public-activity-card__status"
          data-status={activity.status}
        >
          {activity.statusLabel}
        </span>

        <span className="public-activity-card__partner">
          {activity.partner}
        </span>
      </div>

      <div className="public-activity-card__content">
        <h2>{activity.title}</h2>
        <p>{activity.summary}</p>
      </div>

      <dl className="public-activity-card__metadata">
        <div>
          <dt>
            <CalendarDays aria-hidden="true" />
            Pendaftaran
          </dt>
          <dd>{activity.registrationPeriod}</dd>
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
            <UsersRound aria-hidden="true" />
            Program
          </dt>
          <dd>{activity.programs.length} program tersedia</dd>
        </div>
      </dl>

      <ActionLink
        href={`/kegiatan/${activity.slug}`}
        variant="standalone"
        trailingIcon={<ArrowRight />}
        onClick={(event) => {
          event.preventDefault();
          navigate(`/kegiatan/${activity.slug}`);
        }}
      >
        Lihat detail kegiatan
      </ActionLink>
    </article>
  );
}