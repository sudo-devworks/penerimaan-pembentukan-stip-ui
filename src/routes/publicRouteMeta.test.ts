import { describe, expect, it } from "vitest";

import { getPublicRouteTitle } from "./publicRouteMeta";

describe("getPublicRouteTitle", () => {
  it.each([
    ["/", "Beranda | Penerimaan Pembentukan STIP"],
    [
      "/kegiatan",
      "Kegiatan Penerimaan | Penerimaan Pembentukan STIP",
    ],
    [
      "/program",
      "Program Diklat Pembentukan | Penerimaan Pembentukan STIP",
    ],
    [
      "/persyaratan",
      "Persyaratan Pendaftaran | Penerimaan Pembentukan STIP",
    ],
    [
      "/alur-pendaftaran",
      "Alur Pendaftaran | Penerimaan Pembentukan STIP",
    ],
    [
      "/jadwal-seleksi",
      "Jadwal dan Tahapan Seleksi | Penerimaan Pembentukan STIP",
    ],
    [
      "/biaya",
      "Biaya Pendaftaran | Penerimaan Pembentukan STIP",
    ],
    [
      "/pengumuman",
      "Pengumuman | Penerimaan Pembentukan STIP",
    ],
    [
      "/faq",
      "Pertanyaan Umum | Penerimaan Pembentukan STIP",
    ],
    [
      "/bantuan",
      "Bantuan dan Kontak | Penerimaan Pembentukan STIP",
    ],
  ])("returns a title for %s", (pathname, expectedTitle) => {
    expect(getPublicRouteTitle(pathname)).toBe(expectedTitle);
  });

  it("normalizes a trailing slash", () => {
    expect(getPublicRouteTitle("/persyaratan/")).toBe(
      "Persyaratan Pendaftaran | Penerimaan Pembentukan STIP",
    );
  });

  it("returns an activity title for a known slug", () => {
    expect(
      getPublicRouteTitle(
        "/kegiatan/diklat-pembentukan-cma-cgm-2026",
      ),
    ).toBe(
      "Penerimaan Diklat Pembentukan Kerja Sama CMA CGM | Penerimaan Pembentukan STIP",
    );
  });

  it("returns a program title for a known slug", () => {
    expect(getPublicRouteTitle("/program/nautika")).toBe(
      "Diklat Pembentukan Nautika | Penerimaan Pembentukan STIP",
    );
  });

  it("returns an announcement title for a known slug", () => {
    expect(
      getPublicRouteTitle(
        "/pengumuman/pembukaan-pendaftaran-diklat-pembentukan-cma-cgm-2026",
      ),
    ).toBe(
      "Pembukaan Pendaftaran Diklat Pembentukan Kerja Sama CMA CGM Tahun 2026 | Penerimaan Pembentukan STIP",
    );
  });

  it("returns a not-found title for an unknown route", () => {
    expect(getPublicRouteTitle("/tidak-tersedia")).toBe(
      "Halaman Tidak Ditemukan | Penerimaan Pembentukan STIP",
    );
  });
});