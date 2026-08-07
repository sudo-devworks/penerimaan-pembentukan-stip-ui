import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../actions/button";
import { SearchInput } from "../forms/search-input";
import { BulkActionBar } from "./bulk-action-bar";
import { FilterToolbar } from "./filter-toolbar";
import { TableToolbar } from "./table-toolbar";

describe("Composite toolbar composition", () => {
  it("composes filtering, table controls, and bulk actions", () => {
    render(
      <section aria-label="Daftar peserta">
        <FilterToolbar
          mobileFilterTrigger={<Button variant="outline">Filter</Button>}
          resultsSummary="128 peserta ditemukan"
          search={
            <SearchInput aria-label="Cari peserta" placeholder="Cari peserta" />
          }
        />

        <TableToolbar
          actions={<Button variant="outline">Atur Kolom</Button>}
          description="Menampilkan 1–20 dari 128 data"
          title="Daftar peserta"
        />

        <BulkActionBar
          actions={<Button variant="secondary">Ubah Status</Button>}
          clearAction={<Button variant="text">Batalkan Pilihan</Button>}
          summary="3 peserta dipilih"
        />
      </section>,
    );

    expect(
      screen.getByRole("searchbox", { name: "Cari peserta" }),
    ).toBeInTheDocument();

    expect(screen.getByText("128 peserta ditemukan")).toBeInTheDocument();

    expect(
      screen.getByText("Menampilkan 1–20 dari 128 data"),
    ).toBeInTheDocument();

    expect(screen.getByText("3 peserta dipilih")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Ubah Status" }),
    ).toBeInTheDocument();
  });
});
