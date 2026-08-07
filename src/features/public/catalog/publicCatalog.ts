export type PublicActivityStatus = "open" | "upcoming" | "closed";

export interface PublicProgram {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  competencyFocus: string[];
  careerOverview: string;
}

export interface PublicActivityProgram {
  programSlug: string;
  quota: number;
  availabilityLabel: string;
}

export interface PublicActivity {
  slug: string;
  title: string;
  partner: string;
  summary: string;
  description: string;
  status: PublicActivityStatus;
  statusLabel: string;
  registrationPeriod: string;
  selectionPeriod: string;
  location: string;
  registrationFee: string;
  programs: PublicActivityProgram[];
  highlights: string[];
}

export const publicPrograms: PublicProgram[] = [
  {
    slug: "nautika",
    name: "Diklat Pembentukan Nautika",
    shortName: "Nautika",
    summary:
      "Program pembentukan untuk mempersiapkan kompetensi operasional bagian dek kapal.",
    description:
      "Program Nautika berfokus pada pengetahuan dan keterampilan navigasi, keselamatan pelayaran, pengoperasian kapal, serta tanggung jawab profesional di bagian dek.",
    competencyFocus: [
      "Navigasi dan perencanaan pelayaran",
      "Keselamatan serta penanganan keadaan darurat",
      "Operasional dan pemeliharaan bagian dek",
      "Kepemimpinan dan komunikasi di atas kapal",
    ],
    careerOverview:
      "Lulusan dipersiapkan untuk mengembangkan karier profesional pada bidang operasional dek kapal sesuai jenjang kompetensi dan ketentuan yang berlaku.",
  },
  {
    slug: "teknika",
    name: "Diklat Pembentukan Teknika",
    shortName: "Teknika",
    summary:
      "Program pembentukan untuk mempersiapkan kompetensi operasional mesin dan sistem teknis kapal.",
    description:
      "Program Teknika membekali peserta dengan kompetensi pengoperasian, pemeliharaan, dan pengawasan mesin serta sistem pendukung yang digunakan di kapal.",
    competencyFocus: [
      "Pengoperasian mesin penggerak utama",
      "Sistem permesinan bantu kapal",
      "Pemeliharaan dan perbaikan teknis",
      "Keselamatan kerja di ruang mesin",
    ],
    careerOverview:
      "Lulusan dipersiapkan untuk mengembangkan karier profesional pada bagian mesin kapal dengan mengikuti jenjang sertifikasi dan kompetensi yang berlaku.",
  },
  {
    slug: "eto",
    name: "Electro-Technical Officer",
    shortName: "ETO",
    summary:
      "Program pembentukan untuk kompetensi kelistrikan, elektronika, dan sistem kendali kapal.",
    description:
      "Program Electro-Technical Officer berfokus pada pengoperasian serta pemeliharaan peralatan listrik, elektronika, otomasi, dan sistem kendali di kapal.",
    competencyFocus: [
      "Sistem distribusi listrik kapal",
      "Elektronika dan sistem kendali",
      "Peralatan komunikasi dan navigasi",
      "Pemeliharaan serta keselamatan kelistrikan",
    ],
    careerOverview:
      "Lulusan dipersiapkan untuk menjalankan fungsi profesional kelistrikan dan elektronika kapal sesuai standar kompetensi pelaut.",
  },
];

export const publicActivities: PublicActivity[] = [
  {
    slug: "diklat-pembentukan-cma-cgm-2026",
    title: "Penerimaan Diklat Pembentukan Kerja Sama CMA CGM",
    partner: "CMA CGM",
    summary:
      "Kesempatan mengikuti proses penerimaan Diklat Pembentukan STIP untuk program Nautika, Teknika, dan ETO.",
    description:
      "Kegiatan penerimaan ini diselenggarakan oleh STIP Jakarta bersama CMA CGM untuk menjaring calon peserta Diklat Pembentukan melalui proses administrasi dan tahapan seleksi yang terstruktur.",
    status: "open",
    statusLabel: "Pendaftaran dibuka",
    registrationPeriod: "10 Agustus–15 September 2026",
    selectionPeriod: "Oktober–November 2026",
    location: "STIP Jakarta",
    registrationFee: "Informasi biaya tersedia pada halaman biaya",
    programs: [
      {
        programSlug: "nautika",
        quota: 30,
        availabilityLabel: "Tersedia",
      },
      {
        programSlug: "teknika",
        quota: 30,
        availabilityLabel: "Tersedia",
      },
      {
        programSlug: "eto",
        quota: 20,
        availabilityLabel: "Tersedia",
      },
    ],
    highlights: [
      "Pendaftaran dilakukan melalui Portal Penerimaan STIP",
      "Verifikasi administrasi dilakukan per dokumen",
      "Jadwal seleksi tersedia setelah peserta memenuhi prasyarat",
      "Hasil proses dapat dipantau melalui akun peserta",
    ],
  },
  {
    slug: "penerimaan-diklat-pembentukan-gelombang-berikutnya",
    title: "Penerimaan Diklat Pembentukan Gelombang Berikutnya",
    partner: "STIP Jakarta",
    summary:
      "Informasi awal untuk kegiatan penerimaan Diklat Pembentukan pada gelombang berikutnya.",
    description:
      "Kegiatan ini masih berada pada tahap persiapan. Jadwal, program, kuota, dan ketentuan pendaftaran akan diumumkan setelah seluruh informasi resmi ditetapkan.",
    status: "upcoming",
    statusLabel: "Segera hadir",
    registrationPeriod: "Akan diumumkan",
    selectionPeriod: "Akan diumumkan",
    location: "STIP Jakarta",
    registrationFee: "Akan diumumkan",
    programs: [
      {
        programSlug: "nautika",
        quota: 0,
        availabilityLabel: "Belum dibuka",
      },
      {
        programSlug: "teknika",
        quota: 0,
        availabilityLabel: "Belum dibuka",
      },
    ],
    highlights: [
      "Jadwal resmi belum ditetapkan",
      "Calon peserta dapat memantau halaman pengumuman",
      "Pendaftaran belum dapat dilakukan",
    ],
  },
];

export function findPublicActivity(slug: string | undefined) {
  if (!slug) {
    return undefined;
  }

  return publicActivities.find((activity) => activity.slug === slug);
}

export function findPublicProgram(slug: string | undefined) {
  if (!slug) {
    return undefined;
  }

  return publicPrograms.find((program) => program.slug === slug);
}

export function getActivityPrograms(activity: PublicActivity) {
  return activity.programs
    .map((activityProgram) => {
      const program = findPublicProgram(activityProgram.programSlug);

      if (!program) {
        return undefined;
      }

      return {
        ...program,
        quota: activityProgram.quota,
        availabilityLabel: activityProgram.availabilityLabel,
      };
    })
    .filter(
      (
        program,
      ): program is PublicProgram & {
        quota: number;
        availabilityLabel: string;
      } => Boolean(program),
    );
}