import {
  Bell,
  CircleHelp,
  ClipboardList,
  Home,
  UserRound,
} from "lucide-react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
} from "../../components";
import {
  isParticipantNavigationItemActive,
  participantRoutes,
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

export function ParticipantSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (!shouldUseClientNavigation(event)) {
        return;
      }

      event.preventDefault();
      navigate(href);
    };

  return (
    <aside className="participant-sidebar">
      <div className="participant-sidebar__brand">
        <span className="participant-sidebar__eyebrow">
          Penerimaan Pembentukan STIP
        </span>

        <strong>Portal Penerimaan STIP</strong>
      </div>

      <SideNavigation label="Navigasi Portal Peserta">
        <SideNavigationGroup label="Utama">
          <SideNavigationItem
            href={participantRoutes.home}
            icon={<Home />}
            active={isParticipantNavigationItemActive(
              location.pathname,
              {
                label: "Beranda",
                href: participantRoutes.home,
                match: "exact",
              },
            )}
            onClick={navigateTo(participantRoutes.home)}
          >
            Beranda
          </SideNavigationItem>

          <SideNavigationItem
            href={participantRoutes.process}
            icon={<ClipboardList />}
            active={isParticipantNavigationItemActive(
              location.pathname,
              {
                label: "Proses",
                href: participantRoutes.process,
                match: "process",
              },
            )}
            onClick={navigateTo(participantRoutes.process)}
          >
            Proses
          </SideNavigationItem>
        </SideNavigationGroup>

        <SideNavigationGroup label="Akun">
          <SideNavigationItem
            href={participantRoutes.notifications}
            icon={<Bell />}
            active={isParticipantNavigationItemActive(
              location.pathname,
              {
                label: "Notifikasi",
                href: participantRoutes.notifications,
                match: "prefix",
              },
            )}
            onClick={navigateTo(participantRoutes.notifications)}
          >
            Notifikasi
          </SideNavigationItem>

          <SideNavigationItem
            href={participantRoutes.help}
            icon={<CircleHelp />}
            active={isParticipantNavigationItemActive(
              location.pathname,
              {
                label: "Bantuan",
                href: participantRoutes.help,
                match: "prefix",
              },
            )}
            onClick={navigateTo(participantRoutes.help)}
          >
            Bantuan
          </SideNavigationItem>

          <SideNavigationItem
            href={participantRoutes.profile}
            icon={<UserRound />}
            active={isParticipantNavigationItemActive(
              location.pathname,
              {
                label: "Profil",
                href: participantRoutes.profile,
                match: "prefix",
              },
            )}
            onClick={navigateTo(participantRoutes.profile)}
          >
            Profil
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>
    </aside>
  );
}