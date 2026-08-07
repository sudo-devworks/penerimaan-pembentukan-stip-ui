import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FilterToolbar } from "./FilterToolbar";

describe("FilterToolbar", () => {
  it("renders search, filters, actions, and supporting content", () => {
    render(
      <FilterToolbar
        actions={<button>Simpan Tampilan</button>}
        activeFilters={<span>Status: Aktif</span>}
        filters={<select aria-label="Program" />}
        mobileFilterTrigger={<button>Filter</button>}
        resultsSummary="128 peserta ditemukan"
        search={<input aria-label="Cari peserta" />}
      />,
    );

    expect(
      screen.getByRole("textbox", { name: "Cari peserta" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("combobox", { name: "Program" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Filter" })).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Simpan Tampilan" }),
    ).toBeInTheDocument();

    expect(screen.getByText("128 peserta ditemukan")).toHaveAttribute(
      "aria-live",
      "polite",
    );

    expect(screen.getByText("Status: Aktif")).toBeInTheDocument();
  });

  it("forwards HTML attributes", () => {
    render(
      <FilterToolbar
        aria-label="Filter peserta"
        data-testid="toolbar"
        search={<input aria-label="Cari" />}
      />,
    );

    expect(screen.getByTestId("toolbar")).toHaveAttribute(
      "aria-label",
      "Filter peserta",
    );
  });
});
