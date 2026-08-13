import {
  Bell,
  CircleHelp,
  ClipboardList,
  Home,
  UserRound,
} from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  BottomNavigation,
  BottomNavigationItem,
} from "../../components";
import {
  isParticipantNavigationItemActive,
  participantPrimaryNavigation,
} from "../../routes";

const participantNavigationIcons: Record<string, ReactNode> = {
  Beranda: <Home />,
  Proses: <ClipboardList />,
  Notifikasi: <Bell />,
  Bantuan: <CircleHelp />,
  Profil: <UserRound />,
};

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

export function ParticipantBottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BottomNavigation>
      {participantPrimaryNavigation.map((item) => (
        <BottomNavigationItem
          key={item.href}
          href={item.href}
          icon={participantNavigationIcons[item.label]}
          active={isParticipantNavigationItemActive(
            location.pathname,
            item,
          )}
          onClick={(event) => {
            if (!shouldUseClientNavigation(event)) {
              return;
            }

            event.preventDefault();
            navigate(item.href);
          }}
        >
          {item.label}
        </BottomNavigationItem>
      ))}
    </BottomNavigation>
  );
}