import { Outlet, useNavigate } from "react-router-dom";

import stipEmblem from "../../assets/brand/stip-emblem.png";
import loginBackground from "../../assets/participant/auth/login-background.jpg";
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

      <div className="participant-auth-layout__shell">
        <aside className="participant-auth-visual">
          <img
            src={loginBackground}
            alt=""
            className="participant-auth-visual__background"
          />

          <div className="participant-auth-visual__overlay" />

          <div className="participant-auth-visual__content">
            <button
              className="participant-auth-visual__brand"
              type="button"
              onClick={() => navigate(participantRoutes.login)}
            >
              <img src={stipEmblem} alt="" />

              <span>
                <strong>Portal Penerimaan STIP</strong>
                <small>Sekolah Tinggi Ilmu Pelayaran Jakarta</small>
              </span>
            </button>

            <div className="participant-auth-visual__message">
              <p>Portal Peserta</p>

              <h1>
                Masuk untuk melanjutkan proses pendaftaran
              </h1>

              <span>
                Lengkapi proses secara bertahap dan pantau
                perkembangan pendaftaran Anda dari satu portal.
              </span>
            </div>

            <div className="participant-auth-visual__principles">
              <span>Disiplin</span>
              <span>Profesional</span>
              <span>Integritas</span>
            </div>
          </div>
        </aside>

        <div className="participant-auth-layout__content">
          <header className="participant-auth-layout__mobile-header">
            <button
              className="participant-auth-layout__brand"
              type="button"
              onClick={() => navigate(participantRoutes.login)}
            >
              <img src={stipEmblem} alt="" />

              <span>
                <strong>Portal Penerimaan STIP</strong>
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
            Penerimaan Pembentukan STIP
          </footer>
        </div>
      </div>
    </div>
  );
}