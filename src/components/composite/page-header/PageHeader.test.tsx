import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PageHeader } from "./PageHeader";

describe("PageHeader", () => {
  it("renders a labelled page header", () => {
    render(<PageHeader title="Daftar Peserta" />);

    expect(
      screen.getByRole("banner", {
        name: "Daftar Peserta",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Daftar Peserta",
      }),
    ).toBeInTheDocument();
  });

  it("renders supporting content and actions", () => {
    render(
      <PageHeader
        actions={<button>Tambah Peserta</button>}
        description="Kelola seluruh peserta pada kegiatan aktif."
        eyebrow="Portal Internal"
        metadata={<span>128 peserta</span>}
        navigation={<nav aria-label="Breadcrumb">Navigasi</nav>}
        status={<span>Aktif</span>}
        title="Daftar Peserta"
      />,
    );

    expect(screen.getByText("Portal Internal")).toBeInTheDocument();
    expect(
      screen.getByText("Kelola seluruh peserta pada kegiatan aktif."),
    ).toBeInTheDocument();
    expect(screen.getByText("128 peserta")).toBeInTheDocument();
    expect(screen.getByText("Aktif")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", {
        name: "Breadcrumb",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Tambah Peserta",
      }),
    ).toBeInTheDocument();
  });

  it("supports a configurable heading level", () => {
    render(<PageHeader headingLevel={2} title="Ringkasan Pendaftaran" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Ringkasan Pendaftaran",
      }),
    ).toBeInTheDocument();
  });

  it("preserves a consumer-provided accessible label", () => {
    render(
      <PageHeader aria-label="Header detail peserta" title="Budi Santoso" />,
    );

    expect(
      screen.getByRole("banner", {
        name: "Header detail peserta",
      }),
    ).toBeInTheDocument();
  });
});
