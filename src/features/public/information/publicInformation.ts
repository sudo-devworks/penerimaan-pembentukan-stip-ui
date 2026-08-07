export interface PublicRequirementItem {
  title: string;
  description: string;
  required: boolean;
}

export interface PublicRequirementGroup {
  id: string;
  title: string;
  description: string;
  items: PublicRequirementItem[];
}

export interface PublicRegistrationStep {
  number: string;
  title: string;
  description: string;
  notes: string[];
}

export interface PublicSelectionStage {
  id: string;
  title: string;
  period: string;
  status: "completed" | "current" | "upcoming";
  description: string;
  details: string[];
}

export interface PublicFeeItem {
  id: string;
  title: string;
  amount: string;
  description: string;
  paymentTiming: string;
}

export const publicRequirementGroups: PublicRequirementGroup[] = [
  {
    id: "identitas",
    title: "Data identitas",
    description:
      "Data dasar digunakan untuk membuat akun dan mengidentifikasi peserta selama proses penerimaan.",
    items: [
      {
        title: "Nomor Induk Kependudukan",
        description:
          "Masukkan NIK sesuai Kartu Tanda Penduduk atau Kartu Keluarga.",
        required: true,
      },
      {
        title: "Nama lengkap",
        description:
          "Gunakan nama lengkap sesuai dokumen identitas resmi tanpa gelar.",
        required: true,
      },
      {
        title: "Tempat dan tanggal lahir",
        description:
          "Data harus sesuai dengan dokumen identitas dan dokumen pendidikan.",
        required: true,
      },
      {
        title: "Nomor telepon aktif",
        description:
          "Digunakan sebagai informasi kontak selama proses penerimaan.",
        required: true,
      },
      {
        title: "Alamat email aktif",
        description:
          "Digunakan untuk verifikasi akun dan penyampaian notifikasi resmi.",
        required: true,
      },
    ],
  },
  {
    id: "pendidikan",
    title: "Riwayat pendidikan",
    description:
      "Informasi pendidikan digunakan untuk memastikan kesesuaian peserta dengan ketentuan program.",
    items: [
      {
        title: "Asal sekolah",
        description:
          "Masukkan nama sekolah dan informasi pendidikan terakhir.",
        required: true,
      },
      {
        title: "Ijazah atau surat keterangan lulus",
        description:
          "Dokumen harus jelas, lengkap, dan dapat dibaca oleh petugas verifikasi.",
        required: true,
      },
      {
        title: "Daftar nilai",
        description:
          "Unggah daftar nilai sesuai ketentuan kegiatan yang dipilih.",
        required: true,
      },
    ],
  },
  {
    id: "dokumen",
    title: "Dokumen pendukung",
    description:
      "Dokumen pendukung dapat berbeda pada setiap kegiatan, gelombang, dan program.",
    items: [
      {
        title: "Kartu identitas atau Kartu Keluarga",
        description:
          "Digunakan untuk mencocokkan identitas peserta dengan data pendaftaran.",
        required: true,
      },
      {
        title: "Pas foto terbaru",
        description:
          "Gunakan foto formal dengan latar dan ukuran sesuai ketentuan kegiatan.",
        required: true,
      },
      {
        title: "Surat keterangan kesehatan",
        description:
          "Ketentuan dan masa berlaku dokumen mengikuti kegiatan penerimaan.",
        required: false,
      },
      {
        title: "Dokumen tambahan kegiatan",
        description:
          "Dokumen khusus akan ditampilkan pada akun peserta setelah memilih kegiatan.",
        required: false,
      },
    ],
  },
];

export const publicRegistrationSteps: PublicRegistrationStep[] = [
  {
    number: "01",
    title: "Buat dan verifikasi akun",
    description:
      "Daftarkan akun menggunakan identitas dasar dan alamat email yang masih aktif.",
    notes: [
      "Satu alamat email digunakan untuk satu akun peserta.",
      "Tautan verifikasi dikirim melalui email.",
      "Pastikan nama dan NIK sesuai dokumen resmi.",
    ],
  },
  {
    number: "02",
    title: "Pilih kegiatan dan program",
    description:
      "Pilih kegiatan penerimaan yang masih dibuka, lalu tentukan gelombang dan program.",
    notes: [
      "Peserta hanya dapat memiliki satu pendaftaran aktif.",
      "Nomor Pendaftaran diterbitkan setelah konfirmasi.",
      "Pilihan program mengikuti ketersediaan pada kegiatan.",
    ],
  },
  {
    number: "03",
    title: "Bayar formulir pendaftaran",
    description:
      "Selesaikan pembayaran sesuai tagihan dan batas waktu yang ditampilkan.",
    notes: [
      "Hanya satu tagihan aktif yang tersedia.",
      "Kuota dihitung setelah pembayaran berhasil.",
      "Status pembayaran diperbarui melalui Portal Penerimaan STIP.",
    ],
  },
  {
    number: "04",
    title: "Lengkapi dan finalisasi biodata",
    description:
      "Lengkapi biodata lanjutan dengan teliti sebelum melakukan finalisasi.",
    notes: [
      "Data yang sudah difinalisasi akan dikunci.",
      "Periksa kembali informasi sebelum konfirmasi.",
      "Pembatalan finalisasi memerlukan kewenangan petugas.",
    ],
  },
  {
    number: "05",
    title: "Unggah dokumen persyaratan",
    description:
      "Unggah setiap dokumen pada kategori yang sesuai dan pantau hasil verifikasi.",
    notes: [
      "Status dokumen dapat berupa diterima, ditangguhkan, atau ditolak.",
      "Catatan perbaikan ditampilkan pada dokumen terkait.",
      "Unggahan baru akan menggantikan file sebelumnya.",
    ],
  },
  {
    number: "06",
    title: "Ikuti tahapan seleksi",
    description:
      "Pantau kartu ujian, jadwal, lokasi, kehadiran, dan hasil setiap tahapan.",
    notes: [
      "Nomor Pendaftaran digunakan sebagai identitas proses seleksi.",
      "Tahapan dapat berbeda pada setiap kegiatan.",
      "Pengumuman hasil tersedia sesuai jadwal yang ditetapkan.",
    ],
  },
];

export const publicSelectionStages: PublicSelectionStage[] = [
  {
    id: "pendaftaran",
    title: "Pendaftaran peserta",
    period: "10 Agustus–15 September 2026",
    status: "current",
    description:
      "Pembuatan akun, pemilihan kegiatan, pembayaran formulir, dan finalisasi biodata.",
    details: [
      "Pendaftaran dilakukan secara daring.",
      "Batas pembayaran mengikuti tagihan peserta.",
      "Dokumen dapat diunggah setelah biodata dilengkapi.",
    ],
  },
  {
    id: "administrasi",
    title: "Verifikasi administrasi",
    period: "16–30 September 2026",
    status: "upcoming",
    description:
      "Petugas memeriksa kelengkapan dan kesesuaian setiap dokumen persyaratan.",
    details: [
      "Perbaikan dokumen mengikuti catatan petugas.",
      "Peserta lulus administrasi setelah seluruh dokumen wajib diterima.",
      "Status dapat dipantau melalui portal peserta.",
    ],
  },
  {
    id: "wawancara",
    title: "Seleksi wawancara",
    period: "Oktober 2026",
    status: "upcoming",
    description:
      "Wawancara dilaksanakan sesuai jadwal dan pembagian peserta yang diumumkan.",
    details: [
      "Peserta wajib membawa kartu ujian.",
      "Lokasi dan waktu tampil pada akun peserta.",
      "Kehadiran dicatat melalui sistem.",
    ],
  },
  {
    id: "kesehatan",
    title: "Seleksi kesehatan",
    period: "Oktober–November 2026",
    status: "upcoming",
    description:
      "Pemeriksaan kesehatan dilakukan sesuai ketentuan kegiatan penerimaan.",
    details: [
      "Jadwal dapat berbeda untuk setiap kelompok.",
      "Peserta wajib mengikuti instruksi pemeriksaan.",
      "Hasil ditampilkan sesuai kebijakan kegiatan.",
    ],
  },
  {
    id: "hasil-akhir",
    title: "Penetapan dan pengumuman hasil akhir",
    period: "November 2026",
    status: "upcoming",
    description:
      "Hasil akhir ditetapkan setelah seluruh tahapan seleksi selesai.",
    details: [
      "Pengumuman tersedia melalui kanal resmi.",
      "Status akhir juga ditampilkan pada Portal Penerimaan STIP.",
      "Peserta yang dinyatakan lulus mengikuti instruksi lanjutan.",
    ],
  },
];

export const publicFeeItems: PublicFeeItem[] = [
  {
    id: "formulir",
    title: "Biaya formulir pendaftaran",
    amount: "Akan ditetapkan pada kegiatan",
    description:
      "Biaya formulir dibayarkan setelah peserta memilih kegiatan, gelombang, dan program.",
    paymentTiming:
      "Dibayar sebelum melanjutkan pengisian biodata dan dokumen.",
  },
  {
    id: "seleksi",
    title: "Biaya ujian atau seleksi",
    amount: "Mengikuti ketentuan kegiatan",
    description:
      "Tagihan seleksi hanya diterbitkan bagi peserta yang memenuhi prasyarat administrasi.",
    paymentTiming:
      "Dibayar sebelum kartu ujian atau jadwal seleksi diterbitkan.",
  },
];

export const publicPaymentNotes = [
  "Tagihan resmi hanya ditampilkan melalui Portal Penerimaan STIP.",
  "Peserta hanya memiliki satu tagihan aktif dalam satu waktu.",
  "Pastikan nominal dan identitas tagihan sesuai sebelum melakukan pembayaran.",
  "Status pembayaran akan diperbarui setelah transaksi berhasil diterima sistem.",
  "Jangan melakukan pembayaran ke rekening atau kanal yang tidak diumumkan secara resmi.",
];