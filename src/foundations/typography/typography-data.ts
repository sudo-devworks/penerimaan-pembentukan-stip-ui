export type TypographyToken = {
  name: string;
  sample: string;
  fontSizeVariable: string;
  lineHeightVariable: string;
  fontWeightVariable: string;
  letterSpacingVariable?: string;
  usage: string;
};

export type TypographyGroup = {
  name: string;
  description: string;
  tokens: TypographyToken[];
};

export const typographyGroups: TypographyGroup[] = [
  {
    name: "Display",
    description: "Digunakan untuk hero utama dan terminal state tertentu.",
    tokens: [
      {
        name: "Display Large",
        sample: "Penerimaan Pembentukan STIP",
        fontSizeVariable: "--text-display-large-font-size",
        lineHeightVariable: "--text-display-large-line-height",
        fontWeightVariable: "--text-display-large-font-weight",
        letterSpacingVariable: "--text-display-large-letter-spacing",
        usage: "Hero utama Public Website",
      },
    ],
  },
  {
    name: "Heading",
    description: "Membentuk hierarchy halaman, section, dan komponen.",
    tokens: [
      {
        name: "Page Heading",
        sample: "Pendaftaran Diklat Pembentukan",
        fontSizeVariable: "--text-heading-page-font-size",
        lineHeightVariable: "--text-heading-page-line-height",
        fontWeightVariable: "--text-heading-page-font-weight",
        letterSpacingVariable: "--text-heading-page-letter-spacing",
        usage: "Judul utama halaman",
      },
      {
        name: "Section Heading",
        sample: "Status dan Tahapan Pendaftaran",
        fontSizeVariable: "--text-heading-section-font-size",
        lineHeightVariable: "--text-heading-section-line-height",
        fontWeightVariable: "--text-heading-section-font-weight",
        letterSpacingVariable: "--text-heading-section-letter-spacing",
        usage: "Judul section utama",
      },
      {
        name: "Component Heading",
        sample: "Pembayaran Formulir",
        fontSizeVariable: "--text-heading-component-font-size",
        lineHeightVariable: "--text-heading-component-line-height",
        fontWeightVariable: "--text-heading-component-font-weight",
        usage: "Judul panel dan composite component",
      },
    ],
  },
  {
    name: "Title",
    description: "Digunakan pada card, list, modal, dan elemen data.",
    tokens: [
      {
        name: "Title Large",
        sample: "Diklat Pembentukan CMA CGM",
        fontSizeVariable: "--text-title-large-font-size",
        lineHeightVariable: "--text-title-large-line-height",
        fontWeightVariable: "--text-title-large-font-weight",
        usage: "Card utama atau feature title",
      },
      {
        name: "Title Medium",
        sample: "Dokumen Persyaratan",
        fontSizeVariable: "--text-title-medium-font-size",
        lineHeightVariable: "--text-title-medium-line-height",
        fontWeightVariable: "--text-title-medium-font-weight",
        usage: "Card dan panel title",
      },
      {
        name: "Title Small",
        sample: "Nomor Pendaftaran",
        fontSizeVariable: "--text-title-small-font-size",
        lineHeightVariable: "--text-title-small-line-height",
        fontWeightVariable: "--text-title-small-font-weight",
        usage: "List group dan compact title",
      },
    ],
  },
  {
    name: "Body",
    description: "Digunakan untuk paragraf, deskripsi, dan informasi utama.",
    tokens: [
      {
        name: "Body Large",
        sample:
          "Informasi penting mengenai proses penerimaan peserta Diklat Pembentukan STIP.",
        fontSizeVariable: "--text-body-large-font-size",
        lineHeightVariable: "--text-body-large-line-height",
        fontWeightVariable: "--text-body-font-weight",
        usage: "Intro dan editorial content",
      },
      {
        name: "Body Default",
        sample:
          "Lengkapi biodata, unggah dokumen, dan lakukan pembayaran sesuai jadwal yang telah ditentukan.",
        fontSizeVariable: "--text-body-default-font-size",
        lineHeightVariable: "--text-body-default-line-height",
        fontWeightVariable: "--text-body-font-weight",
        usage: "Body text default",
      },
      {
        name: "Body Small",
        sample:
          "Dokumen akan diperiksa oleh verifikator setelah berhasil diunggah.",
        fontSizeVariable: "--text-body-small-font-size",
        lineHeightVariable: "--text-body-small-line-height",
        fontWeightVariable: "--text-body-font-weight",
        usage: "Supporting content dan tabel",
      },
    ],
  },
  {
    name: "Label and Caption",
    description: "Digunakan pada control, metadata, helper text, dan status.",
    tokens: [
      {
        name: "Label Large",
        sample: "Daftar Sekarang",
        fontSizeVariable: "--text-label-large-font-size",
        lineHeightVariable: "--text-label-large-line-height",
        fontWeightVariable: "--text-label-font-weight",
        usage: "Large action dan navigation",
      },
      {
        name: "Label Medium",
        sample: "Simpan Perubahan",
        fontSizeVariable: "--text-label-medium-font-size",
        lineHeightVariable: "--text-label-medium-line-height",
        fontWeightVariable: "--text-label-font-weight",
        usage: "Default action dan form label",
      },
      {
        name: "Label Small",
        sample: "MENUNGGU PEMBAYARAN",
        fontSizeVariable: "--text-label-small-font-size",
        lineHeightVariable: "--text-label-small-line-height",
        fontWeightVariable: "--text-label-font-weight",
        usage: "Badge dan compact label",
      },
      {
        name: "Caption",
        sample: "Diperbarui 31 Juli 2026, 14.45 WIB",
        fontSizeVariable: "--text-caption-font-size",
        lineHeightVariable: "--text-caption-line-height",
        fontWeightVariable: "--text-caption-font-weight",
        usage: "Timestamp dan metadata",
      },
    ],
  },
  {
    name: "Numeric",
    description: "Menggunakan tabular numerals untuk angka operasional.",
    tokens: [
      {
        name: "Numeric Large",
        sample: "1.284",
        fontSizeVariable: "--text-numeric-large-font-size",
        lineHeightVariable: "--text-numeric-large-line-height",
        fontWeightVariable: "--text-numeric-font-weight",
        usage: "KPI utama",
      },
      {
        name: "Numeric Medium",
        sample: "Rp1.500.000",
        fontSizeVariable: "--text-numeric-medium-font-size",
        lineHeightVariable: "--text-numeric-medium-line-height",
        fontWeightVariable: "--text-numeric-font-weight",
        usage: "Nominal dan summary",
      },
      {
        name: "Numeric Small",
        sample: "PPSTIP-2026-000184",
        fontSizeVariable: "--text-numeric-small-font-size",
        lineHeightVariable: "--text-numeric-small-line-height",
        fontWeightVariable: "--text-numeric-font-weight",
        usage: "Identifier dan inline numeric",
      },
    ],
  },
];
