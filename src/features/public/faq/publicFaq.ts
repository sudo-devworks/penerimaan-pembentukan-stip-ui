export interface PublicFaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const publicFaqItems: PublicFaqItem[] = [
  {
    id: "akun-email",
    category: "Akun",
    question: "Apakah peserta harus menggunakan email aktif?",
    answer:
      "Ya. Email digunakan untuk verifikasi akun, notifikasi, dan pemulihan akses. Pastikan peserta dapat membuka email tersebut.",
  },
  {
    id: "satu-pendaftaran",
    category: "Pendaftaran",
    question: "Apakah peserta dapat mendaftar lebih dari satu kegiatan?",
    answer:
      "Peserta hanya dapat memiliki satu pendaftaran aktif. Peserta baru dapat mengikuti kegiatan lain sesuai status dan ketentuan proses sebelumnya.",
  },
  {
    id: "nomor-pendaftaran",
    category: "Pendaftaran",
    question: "Kapan Nomor Pendaftaran diterbitkan?",
    answer:
      "Nomor Pendaftaran diterbitkan setelah peserta mengonfirmasi kegiatan, gelombang, dan program yang dipilih.",
  },
  {
    id: "status-dokumen",
    category: "Dokumen",
    question: "Apa arti status dokumen ditangguhkan?",
    answer:
      "Status ditangguhkan berarti dokumen memerlukan perbaikan atau penjelasan. Peserta perlu membaca catatan petugas dan mengunggah ulang file.",
  },
  {
    id: "tagihan-aktif",
    category: "Pembayaran",
    question: "Berapa banyak tagihan yang dapat aktif?",
    answer:
      "Peserta hanya memiliki satu tagihan aktif dalam satu waktu. Detail nominal dan batas pembayaran tampil pada akun peserta.",
  },
  {
    id: "jadwal-pribadi",
    category: "Seleksi",
    question: "Di mana peserta melihat jadwal seleksi pribadi?",
    answer:
      "Jadwal hari, waktu, lokasi, dan kelompok seleksi ditampilkan melalui Portal Penerimaan STIP setelah persyaratan terpenuhi.",
  },
];