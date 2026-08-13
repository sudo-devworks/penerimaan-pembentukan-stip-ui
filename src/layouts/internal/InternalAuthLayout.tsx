import { Outlet } from "react-router-dom";

import loginBackground from "../../assets/participant/auth/login-background.jpg";
import stipEmblem from "../../assets/brand/stip-emblem.png";
import { SkipLink } from "../../components";

import "./InternalLayout.css";

export function InternalAuthLayout() {
  return (
    <div
      className="internal-auth-layout"
      data-portal="internal"
    >
      <SkipLink href="#internal-auth-main-content">
        Lewati ke konten utama
      </SkipLink>

      <div className="internal-auth-layout__background">
        <img
          src={loginBackground}
          alt=""
          className="internal-auth-layout__background-image"
        />

        <div className="internal-auth-layout__background-overlay" />
        <div className="internal-auth-layout__background-pattern" />
      </div>

      <div className="internal-auth-layout__shell">
        <header className="internal-auth-layout__brand">
          <img src={stipEmblem} alt="" />

          <div>
            <strong>Portal Internal Penerimaan STIP</strong>
            <span>Sekolah Tinggi Ilmu Pelayaran Jakarta</span>
          </div>
        </header>

        <main
          id="internal-auth-main-content"
          className="internal-auth-layout__main"
          tabIndex={-1}
        >
          <Outlet />
        </main>

        <footer className="internal-auth-layout__footer">
          <span>
            Akses internal terlindungi. Aktivitas sistem dapat
            tercatat untuk kebutuhan audit.
          </span>

          <small>
            © 2026 Sekolah Tinggi Ilmu Pelayaran Jakarta
          </small>
        </footer>
      </div>
    </div>
  );
}