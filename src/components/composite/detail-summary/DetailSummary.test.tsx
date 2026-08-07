import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DetailSummary } from "./DetailSummary";

describe("DetailSummary", () => {
  it("renders a labelled detail section", () => {
    render(
      <DetailSummary title="Informasi Peserta">
        <p>Detail peserta</p>
      </DetailSummary>,
    );

    expect(
      screen.getByRole("region", {
        name: "Informasi Peserta",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Informasi Peserta",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Detail peserta")).toBeInTheDocument();
  });

  it("renders supporting content and actions", () => {
    render(
      <DetailSummary
        actions={<button>Edit</button>}
        description="Ringkasan data utama peserta."
        metadata={<span>Diperbarui hari ini</span>}
        status={<span>Aktif</span>}
        title="Informasi Peserta"
      >
        <p>Konten</p>
      </DetailSummary>,
    );

    expect(
      screen.getByText("Ringkasan data utama peserta."),
    ).toBeInTheDocument();
    expect(screen.getByText("Diperbarui hari ini")).toBeInTheDocument();
    expect(screen.getByText("Aktif")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
  });
});
