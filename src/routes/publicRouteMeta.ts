import {
  findPublicActivity,
  findPublicProgram,
} from "../features/public/catalog";
import { findPublicAnnouncement } from "../features/public/announcement";

const siteName = "Penerimaan Pembentukan STIP";

const staticRouteTitles: Record<string, string> = {
  "/": "Beranda",
  "/kegiatan": "Kegiatan Penerimaan",
  "/program": "Program Diklat Pembentukan",
  "/persyaratan": "Persyaratan Pendaftaran",
  "/alur-pendaftaran": "Alur Pendaftaran",
  "/jadwal-seleksi": "Jadwal dan Tahapan Seleksi",
  "/biaya": "Biaya Pendaftaran",
  "/pengumuman": "Pengumuman",
  "/faq": "Pertanyaan Umum",
  "/bantuan": "Bantuan dan Kontak",
};

function normalizePathname(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

function getLastPathSegment(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.at(-1);
}

export function getPublicRouteTitle(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);
  const staticTitle = staticRouteTitles[normalizedPathname];

  if (staticTitle) {
    return `${staticTitle} | ${siteName}`;
  }

  if (normalizedPathname.startsWith("/kegiatan/")) {
    const activity = findPublicActivity(
      getLastPathSegment(normalizedPathname),
    );

    if (activity) {
      return `${activity.title} | ${siteName}`;
    }
  }

  if (normalizedPathname.startsWith("/program/")) {
    const program = findPublicProgram(
      getLastPathSegment(normalizedPathname),
    );

    if (program) {
      return `${program.name} | ${siteName}`;
    }
  }

  if (normalizedPathname.startsWith("/pengumuman/")) {
    const announcement = findPublicAnnouncement(
      getLastPathSegment(normalizedPathname),
    );

    if (announcement) {
      return `${announcement.title} | ${siteName}`;
    }
  }

  return `Halaman Tidak Ditemukan | ${siteName}`;
}