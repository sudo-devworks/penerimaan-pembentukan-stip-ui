import { Outlet } from "react-router-dom";

import { SkipLink } from "../../components";
import { PublicFooter } from "./PublicFooter";
import { PublicHeader } from "./PublicHeader";
import { PublicRouteEffects } from "./PublicRouteEffects";

import "./PublicLayout.css";

export function PublicLayout() {
  return (
    <div className="public-layout" data-portal="public">
      <SkipLink href="#main-content">Lewati ke konten utama</SkipLink>

      <PublicRouteEffects />
      <PublicHeader />

      <main id="main-content" className="public-layout__main" tabIndex={-1}>
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}