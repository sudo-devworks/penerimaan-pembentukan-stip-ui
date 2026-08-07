import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BulkActionBar } from "./BulkActionBar";

describe("BulkActionBar", () => {
  it("renders selection summary and actions", () => {
    render(
      <BulkActionBar
        actions={<button>Ubah Status</button>}
        clearAction={<button>Batalkan Pilihan</button>}
        description="Aksi akan diterapkan pada seluruh peserta terpilih."
        summary="3 peserta dipilih"
      />,
    );

    expect(screen.getByText("3 peserta dipilih")).toHaveAttribute(
      "aria-live",
      "polite",
    );

    expect(
      screen.getByText("Aksi akan diterapkan pada seluruh peserta terpilih."),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Ubah Status" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Batalkan Pilihan" }),
    ).toBeInTheDocument();
  });

  it("forwards HTML attributes", () => {
    render(
      <BulkActionBar
        aria-label="Aksi data terpilih"
        actions={<button>Arsipkan</button>}
        summary="2 data dipilih"
      />,
    );

    expect(screen.getByLabelText("Aksi data terpilih")).toBeInTheDocument();
  });
});
