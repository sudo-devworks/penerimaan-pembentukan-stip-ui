export interface PublicNavigationItem {
  label: string;
  href: string;
  end?: boolean;
}

export const publicPrimaryNavigation: PublicNavigationItem[] = [
  {
    label: "Beranda",
    href: "/",
    end: true,
  },
  {
    label: "Kegiatan",
    href: "/kegiatan",
  },
  {
    label: "Program",
    href: "/program",
  },
  {
    label: "Persyaratan",
    href: "/persyaratan",
  },
  {
    label: "Pengumuman",
    href: "/pengumuman",
  },
];

export const publicInformationNavigation: PublicNavigationItem[] = [
  {
    label: "Alur Pendaftaran",
    href: "/alur-pendaftaran",
  },
  {
    label: "Jadwal Seleksi",
    href: "/jadwal-seleksi",
  },
  {
    label: "Biaya Pendaftaran",
    href: "/biaya",
  },
  {
    label: "Pertanyaan Umum",
    href: "/faq",
  },
  {
    label: "Bantuan dan Kontak",
    href: "/bantuan",
  },
];

export const participantPortalRoutes = {
  register: "/portal/daftar",
  login: "/portal/masuk",
} as const;