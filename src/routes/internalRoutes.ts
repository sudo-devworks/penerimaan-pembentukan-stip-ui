export interface InternalNavigationItem {
  label: string;
  href: string;
  match?: "exact" | "prefix";
}

export const internalRoutes = {
  login: "/internal/masuk",

  dashboard: "/internal",

  partners: "/internal/mitra",
  activities: "/internal/kegiatan",
  waves: "/internal/gelombang",
  programs: "/internal/program",

  participants: "/internal/peserta",
  verification: "/internal/verifikasi",

  payments: "/internal/pembayaran",
  selection: "/internal/seleksi",

  reports: "/internal/laporan",
  audit: "/internal/audit",
} as const;

export const internalPrimaryNavigation: InternalNavigationItem[] = [
  {
    label: "Dashboard",
    href: internalRoutes.dashboard,
    match: "exact",
  },
  {
    label: "Mitra",
    href: internalRoutes.partners,
    match: "prefix",
  },
  {
    label: "Kegiatan",
    href: internalRoutes.activities,
    match: "prefix",
  },
  {
    label: "Gelombang",
    href: internalRoutes.waves,
    match: "prefix",
  },
  {
    label: "Program",
    href: internalRoutes.programs,
    match: "prefix",
  },
  {
    label: "Peserta",
    href: internalRoutes.participants,
    match: "prefix",
  },
  {
    label: "Verifikasi",
    href: internalRoutes.verification,
    match: "prefix",
  },
  {
    label: "Pembayaran",
    href: internalRoutes.payments,
    match: "prefix",
  },
  {
    label: "Seleksi",
    href: internalRoutes.selection,
    match: "prefix",
  },
  {
    label: "Laporan",
    href: internalRoutes.reports,
    match: "prefix",
  },
  {
    label: "Audit",
    href: internalRoutes.audit,
    match: "prefix",
  },
];

export function isInternalNavigationItemActive(
  pathname: string,
  item: InternalNavigationItem,
) {
  if (item.match === "exact") {
    return pathname === item.href;
  }

  return (
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`)
  );
}