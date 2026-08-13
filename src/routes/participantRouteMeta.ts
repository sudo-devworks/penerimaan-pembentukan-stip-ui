const siteName = "Portal Penerimaan STIP";

const participantStaticRouteTitles: Record<string, string> = {
  "/portal": "Beranda",
  "/portal/masuk": "Masuk",
  "/portal/daftar": "Daftar Akun",
  "/portal/verifikasi-email": "Verifikasi Email",
  "/portal/lupa-password": "Lupa Password",
  "/portal/reset-password": "Reset Password",

  "/portal/proses": "Proses Penerimaan",

  "/portal/pendaftaran": "Pendaftaran",
  "/portal/pendaftaran/kegiatan": "Pilih Kegiatan",
  "/portal/pendaftaran/pilihan": "Pilihan Pendaftaran",
  "/portal/pendaftaran/konfirmasi": "Konfirmasi Pendaftaran",

  "/portal/pembayaran": "Pembayaran Formulir",
  "/portal/biodata": "Biodata",
  "/portal/dokumen": "Dokumen",
  "/portal/administrasi": "Verifikasi Administrasi",

  "/portal/seleksi": "Seleksi",
  "/portal/seleksi/kartu-ujian": "Kartu Ujian",
  "/portal/seleksi/jadwal": "Jadwal Seleksi",
  "/portal/seleksi/hasil": "Hasil Seleksi",

  "/portal/notifikasi": "Notifikasi",
  "/portal/bantuan": "Bantuan",
  "/portal/profil": "Profil",
  "/portal/riwayat": "Riwayat Pendaftaran",

  "/portal/pengunduran-diri": "Pengunduran Diri",
  "/portal/refund": "Status Refund",
};

function normalizePathname(pathname: string) {
  if (pathname === "/portal") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

export function getParticipantRouteTitle(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);

  const staticTitle =
    participantStaticRouteTitles[normalizedPathname];

  if (staticTitle) {
    return `${staticTitle} | ${siteName}`;
  }

  if (
    normalizedPathname.startsWith(
      "/portal/pendaftaran/kegiatan/",
    )
  ) {
    return `Detail Kegiatan | ${siteName}`;
  }

  return `Portal Peserta | ${siteName}`;
}