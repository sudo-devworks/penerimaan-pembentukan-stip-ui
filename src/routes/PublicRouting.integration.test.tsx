import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { OverlayTree } from "../components";
import { PublicRouteTree } from "./AppRouter";

let scrollToMock: ReturnType<typeof vi.spyOn>;

beforeAll(() => {
  scrollToMock = vi
    .spyOn(window, "scrollTo")
    .mockImplementation(() => undefined);
});

afterAll(() => {
  scrollToMock.mockRestore();
});

function renderPublicRoute(pathname: string) {
  return render(
    <OverlayTree>
      <MemoryRouter initialEntries={[pathname]}>
        <PublicRouteTree />
      </MemoryRouter>
    </OverlayTree>,
  );
}

describe("Public Website routing", () => {
  it.each([
    ["/", "Persiapkan langkahmu menuju pendidikan dan karier maritim"],
    ["/kegiatan", "Temukan kegiatan penerimaan yang tersedia"],
    ["/program", "Kenali program pendidikan maritim yang tersedia"],
    ["/persyaratan", "Persiapkan data dan dokumen sebelum mendaftar"],
    ["/alur-pendaftaran", "Ikuti proses penerimaan secara bertahap"],
    [
      "/jadwal-seleksi",
      "Pantau agenda penting selama proses penerimaan",
    ],
    ["/biaya", "Informasi biaya yang jelas dan transparan"],
    ["/pengumuman", "Informasi terbaru proses penerimaan"],
    ["/faq", "Temukan jawaban sebelum menghubungi petugas"],
    ["/bantuan", "Dapatkan bantuan melalui kanal resmi STIP"],
  ])("renders %s with its page heading", (pathname, heading) => {
    renderPublicRoute(pathname);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: heading,
      }),
    ).toBeInTheDocument();
  });

  it("renders an activity detail route", () => {
    renderPublicRoute(
      "/kegiatan/diklat-pembentukan-cma-cgm-2026",
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Penerimaan Diklat Pembentukan Kerja Sama CMA CGM",
      }),
    ).toBeInTheDocument();
  });

  it("renders a program detail route", () => {
    renderPublicRoute("/program/nautika");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Diklat Pembentukan Nautika",
      }),
    ).toBeInTheDocument();
  });

  it("renders an announcement detail route", () => {
    renderPublicRoute(
      "/pengumuman/pembukaan-pendaftaran-diklat-pembentukan-cma-cgm-2026",
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name:
          "Pembukaan Pendaftaran Diklat Pembentukan Kerja Sama CMA CGM Tahun 2026",
      }),
    ).toBeInTheDocument();
  });

  it("renders not found for an unknown route", () => {
    renderPublicRoute("/route-yang-tidak-tersedia");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Halaman tidak ditemukan",
      }),
    ).toBeInTheDocument();
  });

  it("renders not found for an unknown activity slug", () => {
    renderPublicRoute("/kegiatan/tidak-tersedia");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Halaman tidak ditemukan",
      }),
    ).toBeInTheDocument();
  });

  it("renders not found for an unknown program slug", () => {
    renderPublicRoute("/program/tidak-tersedia");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Halaman tidak ditemukan",
      }),
    ).toBeInTheDocument();
  });

  it("renders not found for an unknown announcement slug", () => {
    renderPublicRoute("/pengumuman/tidak-tersedia");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Halaman tidak ditemukan",
      }),
    ).toBeInTheDocument();
  });
});