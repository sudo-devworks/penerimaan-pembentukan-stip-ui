import { Anchor } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        <span
          className="participant-header__mark"
          aria-hidden="true"
        >
          <Anchor />
        </span>

        <span className="participant-header__copy">
          <strong>Portal Penerimaan STIP</strong>
          <span>Penerimaan Pembentukan</span>
        </span>
      </button>
    </header>
  );
}