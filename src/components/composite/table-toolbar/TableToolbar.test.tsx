import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TableToolbar } from "./TableToolbar";

describe("TableToolbar", () => {
  it("renders context, controls, and actions", () => {
    render(
      <TableToolbar
        actions={<button>Atur Kolom</button>}
        controls={<select aria-label="Jumlah baris" />}
        description="Menampilkan 1–20 dari 128 data"
        title="Daftar peserta"
      />,
    );

    expect(screen.getByLabelText("Daftar peserta")).toBeInTheDocument();

    expect(
      screen.getByText("Menampilkan 1–20 dari 128 data"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("combobox", { name: "Jumlah baris" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Atur Kolom" }),
    ).toBeInTheDocument();
  });

  it("supports an explicit accessible label without a title", () => {
    render(
      <TableToolbar
        aria-label="Pengaturan tabel"
        actions={<button>Ekspor</button>}
      />,
    );

    expect(screen.getByLabelText("Pengaturan tabel")).toBeInTheDocument();
  });
});
