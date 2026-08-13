import {
  BadgeCheck,
  Banknote,
  CalendarRange,
  ClipboardList,
  FileBarChart,
  Handshake,
  LayoutDashboard,
  ListChecks,
  ScrollText,
  ShieldCheck,
  UsersRound,
  Waves,
} from "lucide-react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import stipEmblem from "../../assets/brand/stip-emblem.png";
import {
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
} from "../../components";
import {
  internalRoutes,
  isInternalNavigationItemActive,
} from "../../routes";

function shouldUseClientNavigation(
  event: MouseEvent<HTMLAnchorElement>,
) {
  return (
    event.button === 0 &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

export function InternalSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo =
    (href: string) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!shouldUseClientNavigation(event)) {
        return;
      }

      event.preventDefault();
      navigate(href);
    };

  const active = (
    href: string,
    match: "exact" | "prefix" = "prefix",
  ) =>
    isInternalNavigationItemActive(
      location.pathname,
      {
        label: "",
        href,
        match,
      },
    );

  return (
    <aside className="internal-sidebar">
      <button
        type="button"
        className="internal-sidebar__brand"
        onClick={() => navigate(internalRoutes.dashboard)}
      >
        <img src={stipEmblem} alt="" />

        <span>
          <strong>Portal Internal</strong>
          <small>Penerimaan STIP</small>
        </span>
      </button>

      <SideNavigation label="Navigasi Portal Internal">
        <SideNavigationGroup label="Operasional">
          <SideNavigationItem
            href={internalRoutes.dashboard}
            icon={<LayoutDashboard />}
            active={active(
              internalRoutes.dashboard,
              "exact",
            )}
            onClick={navigateTo(internalRoutes.dashboard)}
          >
            Dashboard
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.partners}
            icon={<Handshake />}
            active={active(internalRoutes.partners)}
            onClick={navigateTo(internalRoutes.partners)}
          >
            Mitra
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.activities}
            icon={<CalendarRange />}
            active={active(internalRoutes.activities)}
            onClick={navigateTo(internalRoutes.activities)}
          >
            Kegiatan
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.waves}
            icon={<Waves />}
            active={active(internalRoutes.waves)}
            onClick={navigateTo(internalRoutes.waves)}
          >
            Gelombang
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.programs}
            icon={<ClipboardList />}
            active={active(internalRoutes.programs)}
            onClick={navigateTo(internalRoutes.programs)}
          >
            Program
          </SideNavigationItem>
        </SideNavigationGroup>

        <SideNavigationGroup label="Peserta">
          <SideNavigationItem
            href={internalRoutes.participants}
            icon={<UsersRound />}
            active={active(internalRoutes.participants)}
            onClick={navigateTo(internalRoutes.participants)}
          >
            Peserta
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.verification}
            icon={<BadgeCheck />}
            active={active(internalRoutes.verification)}
            onClick={navigateTo(internalRoutes.verification)}
          >
            Verifikasi
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.payments}
            icon={<Banknote />}
            active={active(internalRoutes.payments)}
            onClick={navigateTo(internalRoutes.payments)}
          >
            Pembayaran
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.selection}
            icon={<ListChecks />}
            active={active(internalRoutes.selection)}
            onClick={navigateTo(internalRoutes.selection)}
          >
            Seleksi
          </SideNavigationItem>
        </SideNavigationGroup>

        <SideNavigationGroup label="Monitoring">
          <SideNavigationItem
            href={internalRoutes.reports}
            icon={<FileBarChart />}
            active={active(internalRoutes.reports)}
            onClick={navigateTo(internalRoutes.reports)}
          >
            Laporan
          </SideNavigationItem>

          <SideNavigationItem
            href={internalRoutes.audit}
            icon={<ScrollText />}
            active={active(internalRoutes.audit)}
            onClick={navigateTo(internalRoutes.audit)}
          >
            Audit
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>

      <div className="internal-sidebar__security">
        <ShieldCheck aria-hidden="true" />

        <span>
          Akses internal terlindungi
        </span>
      </div>
    </aside>
  );
}