import { Outlet } from "react-router-dom";

import { SkipLink } from "../../components";
import { ParticipantBottomNavigation } from "./ParticipantBottomNavigation";
import { ParticipantHeader } from "./ParticipantHeader";
import { ParticipantRouteEffects } from "./ParticipantRouteEffects";
import { ParticipantSidebar } from "./ParticipantSidebar";

import "./ParticipantLayout.css";

export function ParticipantLayout() {
  return (
    <div
      className="participant-layout"
      data-portal="participant"
    >
      <SkipLink href="#participant-main-content">
        Lewati ke konten utama
      </SkipLink>

      <ParticipantRouteEffects />

      <ParticipantHeader />

      <div className="participant-layout__body">
        <ParticipantSidebar />

        <main
          id="participant-main-content"
          className="participant-layout__main"
          tabIndex={-1}
        >
          <Outlet />
        </main>
      </div>

      <ParticipantBottomNavigation />
    </div>
  );
}