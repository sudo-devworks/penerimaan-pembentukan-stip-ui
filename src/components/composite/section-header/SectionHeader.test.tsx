import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders a labelled section header", () => {
    render(<SectionHeader title="Dokumen Persyaratan" />);

    expect(
      screen.getByRole("banner", {
        name: "Dokumen Persyaratan",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Dokumen Persyaratan",
      }),
    ).toBeInTheDocument();
  });

  it("renders description, metadata, and actions", () => {
    render(
      <SectionHeader
        actions={<button>Tambah Dokumen</button>}
        description="Atur dokumen wajib untuk peserta."
        metadata={<span>8 dokumen</span>}
        title="Dokumen Persyaratan"
      />,
    );

    expect(
      screen.getByText("Atur dokumen wajib untuk peserta."),
    ).toBeInTheDocument();
    expect(screen.getByText("8 dokumen")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Tambah Dokumen",
      }),
    ).toBeInTheDocument();
  });

  it("supports a configurable heading level", () => {
    render(<SectionHeader headingLevel={3} title="Riwayat Perubahan" />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Riwayat Perubahan",
      }),
    ).toBeInTheDocument();
  });

  it("applies the divided modifier", () => {
    render(<SectionHeader divided title="Ringkasan" />);

    expect(
      screen.getByRole("banner", {
        name: "Ringkasan",
      }),
    ).toHaveClass("section-header--divided");
  });
});
