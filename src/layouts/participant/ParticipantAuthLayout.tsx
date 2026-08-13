import { Anchor } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

import { SkipLink } from "../../components";
import { participantRoutes } from "../../routes";
import { ParticipantRouteEffects } from "./ParticipantRouteEffects";

import "./ParticipantLayout.css";

export function ParticipantAuthLayout() {
  const navigate = useNavigate();

  return (
    <div
      className="participant-auth-layout"
      data-portal="participant-auth"
    >
      <SkipLink href="#participant-main-content">
        Lewati ke konten utama
      </SkipLink>

      <ParticipantRouteEffects />

      <header className="participant-auth-layout__header">
        <button
          className="participant-auth-layout__brand"
          type="button"
          onClick={() => navigate(participantRoutes.login)}
        >
          <span
            className="participant-auth-layout__mark"
            aria-hidden="true"
          >
            <Anchor />
          </span>

          <span>
            <strong>Portal Penerimaan STIP</strong>
            <small>Penerimaan Pembentukan</small>
          </span>
        </button>
      </header>

      <main
        id="participant-main-content"
        className="participant-auth-layout__main"
        tabIndex={-1}
      >
        <Outlet />
      </main>

      <footer className="participant-auth-layout__footer">
        <span>Penerimaan Pembentukan STIP</span>
      </footer>
    </div>
  );
}