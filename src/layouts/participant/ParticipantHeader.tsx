import { Bell, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

import stipEmblem from "../../assets/brand/stip-emblem.png";
import { IconButton } from "../../components";
import { participantRoutes } from "../../routes";

export function ParticipantHeader() {
  const navigate = useNavigate();

  return (
    <header className="participant-header">
      <button
        className="participant-header__brand"
        type="button"
        onClick={() => navigate(participantRoutes.home)}
      >
        <img
          src={stipEmblem}
          alt=""
          className="participant-header__emblem"
        />

        <span className="participant-header__copy">
          <strong>Portal Penerimaan STIP</strong>
          <span>Sekolah Tinggi Ilmu Pelayaran Jakarta</span>
        </span>
      </button>

      <div className="participant-header__actions">
        <IconButton
          aria-label="Buka notifikasi"
          icon={<Bell />}
          variant="ghost"
          onClick={() => navigate(participantRoutes.notifications)}
        />

        <button
          className="participant-header__profile"
          type="button"
          onClick={() => navigate(participantRoutes.profile)}
        >
          <span className="participant-header__avatar">BS</span>

          <span>
            <strong>Budi Santoso</strong>
            <small>Peserta</small>
          </span>

          <ChevronDown aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}