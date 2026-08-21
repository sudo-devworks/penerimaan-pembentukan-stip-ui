import { participantPortalRoutes } from "./publicRoutes";

export interface ParticipantNavigationItem {
  label: string;
  href: string;
  match?: "exact" | "process" | "prefix";
}

export const participantRoutes = {
  login: participantPortalRoutes.login,
  register: participantPortalRoutes.register,
  verifyEmail: "/portal/verifikasi-email",
  forgotPassword: "/portal/lupa-password",
  resetPassword: "/portal/reset-password",

  home: "/portal",
  process: "/portal/proses",

  registration: "/portal/pendaftaran",
  activities: "/portal/pendaftaran/kegiatan",
  registrationChoice: "/portal/pendaftaran/pilihan",
  registrationConfirmation: "/portal/pendaftaran/konfirmasi",

  payment: "/portal/pembayaran",
  biodata: "/portal/biodata",
  documents: "/portal/dokumen",
  administration: "/portal/administrasi",

  selection: "/portal/seleksi",
  examCard: "/portal/seleksi/kartu-ujian",
  selectionSchedule: "/portal/seleksi/jadwal",
  selectionResult: "/portal/seleksi/hasil",

  notifications: "/portal/notifikasi",
  help: "/portal/bantuan",
  profile: "/portal/profil",
  history: "/portal/riwayat",

  withdrawal: "/portal/pengunduran-diri",
  refund: "/portal/refund",
} as const;

/**
 * Mobile navigation intentionally contains only the five most important
 * destinations. Supporting destinations remain available from the header,
 * profile, process, and selection hubs.
 */
export const participantPrimaryNavigation: ParticipantNavigationItem[] = [
  {
    label: "Beranda",
    href: participantRoutes.home,
    match: "exact",
  },
  {
    label: "Proses",
    href: participantRoutes.process,
    match: "process",
  },
  {
    label: "Keuangan",
    href: participantRoutes.payment,
    match: "prefix",
  },
  {
    label: "Seleksi",
    href: participantRoutes.selection,
    match: "prefix",
  },
  {
    label: "Profil",
    href: participantRoutes.profile,
    match: "prefix",
  },
];

/**
 * Routes that belong to the active registration/process journey.
 * Keuangan and Seleksi are deliberately excluded because they have their own
 * primary navigation destinations.
 */
export const participantProcessPrefixes = [
  participantRoutes.process,
  participantRoutes.registration,
  participantRoutes.biodata,
  participantRoutes.documents,
  participantRoutes.administration,
  participantRoutes.withdrawal,
  participantRoutes.refund,
] as const;

export function isParticipantNavigationItemActive(
  pathname: string,
  item: ParticipantNavigationItem,
) {
  if (item.match === "exact") {
    return pathname === item.href;
  }

  if (item.match === "process") {
    return participantProcessPrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    );
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
