export interface PublicAnnouncement {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
  important: boolean;
  content: string[];
}

export const publicAnnouncements: PublicAnnouncement[] = [
  {
    slug: "pembukaan-pendaftaran-diklat-pembentukan-cma-cgm-2026",
    title:
      "Pembukaan Pendaftaran Diklat Pembentukan Kerja Sama CMA CGM Tahun 2026",
    summary:
      "Pendaftaran program Nautika, Teknika, dan ETO dibuka melalui Portal Penerimaan STIP.",
    publishedAt: "7 Agustus 2026",
    category: "Pendaftaran",
    important: true,
    content: [
      "Sekolah Tinggi Ilmu Pelayaran Jakarta membuka penerimaan peserta Diklat Pembentukan kerja sama CMA CGM tahun 2026.",
      "Calon peserta dapat mempelajari program, persyaratan, biaya, dan jadwal sebelum membuat akun pada Portal Penerimaan STIP.",
      "Seluruh proses pendaftaran dilakukan melalui layanan resmi. Peserta diminta memastikan data identitas dan alamat email yang digunakan masih aktif.",
    ],
  },
  {
    slug: "jadwal-verifikasi-administrasi-2026",
    title: "Jadwal Verifikasi Administrasi Penerimaan Tahun 2026",
    summary:
      "Verifikasi dokumen administrasi dilaksanakan setelah periode pendaftaran selesai.",
    publishedAt: "5 Agustus 2026",
    category: "Administrasi",
    important: false,
    content: [
      "Verifikasi administrasi dilakukan terhadap setiap dokumen wajib yang telah diunggah peserta.",
      "Peserta dapat melihat status diterima, ditangguhkan, atau ditolak pada dokumen terkait.",
      "Apabila diperlukan perbaikan, peserta harus mengikuti catatan petugas sebelum batas waktu yang ditentukan.",
    ],
  },
  {
    slug: "imbauan-keamanan-pembayaran",
    title: "Imbauan Keamanan Pembayaran Penerimaan STIP",
    summary:
      "Peserta diminta hanya melakukan pembayaran berdasarkan tagihan resmi pada portal.",
    publishedAt: "1 Agustus 2026",
    category: "Pembayaran",
    important: true,
    content: [
      "Tagihan resmi hanya ditampilkan pada akun peserta Portal Penerimaan STIP.",
      "STIP tidak meminta kode OTP, kata sandi, atau informasi rahasia akun melalui telepon maupun pesan pribadi.",
      "Segera hubungi kanal bantuan resmi apabila menerima permintaan pembayaran yang mencurigakan.",
    ],
  },
];

export function findPublicAnnouncement(slug: string | undefined) {
  if (!slug) {
    return undefined;
  }

  return publicAnnouncements.find(
    (announcement) => announcement.slug === slug,
  );
}