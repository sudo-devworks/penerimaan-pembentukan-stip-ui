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
  UsersRound,
  Waves,
} from "lucide-react";

import type {
  MouseEvent,
  ReactNode,
} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../../components";

import {
  internalRoutes,
  isInternalNavigationItemActive,
} from "../../routes/internalRoutes";

import type {
  InternalNavigationItem,
} from "../../routes/internalRoutes";

interface InternalMobileNavigationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface InternalMobileNavigationGroup {
  label: string;
  items: Array<
    InternalNavigationItem & {
      icon: ReactNode;
    }
  >;
}

const groups: InternalMobileNavigationGroup[] = [
  {
    label: "Operasional",
    items: [
      {
        label: "Dashboard",
        href: internalRoutes.dashboard,
        icon: <LayoutDashboard />,
      },
      {
        label: "Mitra",
        href: internalRoutes.partners,
        icon: <Handshake />,
      },
      {
        label: "Kegiatan",
        href: internalRoutes.activities,
        icon: <CalendarRange />,
      },
      {
        label: "Gelombang",
        href: internalRoutes.waves,
        icon: <Waves />,
      },
      {
        label: "Program",
        href: internalRoutes.programs,
        icon: <ClipboardList />,
      },
    ],
  },
  {
    label: "Peserta",
    items: [
      {
        label: "Peserta",
        href: internalRoutes.participants,
        icon: <UsersRound />,
      },
      {
        label: "Verifikasi",
        href: internalRoutes.verification,
        icon: <BadgeCheck />,
      },
      {
        label: "Pembayaran",
        href: internalRoutes.payments,
        icon: <Banknote />,
      },
      {
        label: "Seleksi",
        href: internalRoutes.selection,
        icon: <ListChecks />,
      },
    ],
  },
  {
    label: "Monitoring",
    items: [
      {
        label: "Laporan",
        href: internalRoutes.reports,
        icon: <FileBarChart />,
      },
      {
        label: "Audit",
        href: internalRoutes.audit,
        icon: <ScrollText />,
      },
    ],
  },
];

export function InternalMobileNavigation({
  open,
  onOpenChange,
}: InternalMobileNavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo =
    (href: string) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigate(href);
      onOpenChange(false);
    };

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
    >
      <DrawerContent
        placement="left"
        size="md"
        className="internal-mobile-navigation"
      >
        <DrawerHeader>
          <DrawerTitle>Menu Utama</DrawerTitle>

          <DrawerClose
            variant="ghost"
            aria-label="Tutup menu"
          >
            Tutup
          </DrawerClose>
        </DrawerHeader>

        <DrawerBody>
          <nav
            className="internal-mobile-navigation__nav"
            aria-label="Navigasi Portal Internal"
          >
            {groups.map((group) => (
              <section
                key={group.label}
                className="internal-mobile-navigation__group"
              >
                <p>{group.label}</p>

                <div>
                  {group.items.map((item) => {
                    const active =
                      isInternalNavigationItemActive(
                        location.pathname,
                        {
                          label: item.label,
                          href: item.href,
                          match: item.match ?? "prefix",
                        },
                      );

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        data-active={active || undefined}
                        onClick={navigateTo(item.href)}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </section>
            ))}
          </nav>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}