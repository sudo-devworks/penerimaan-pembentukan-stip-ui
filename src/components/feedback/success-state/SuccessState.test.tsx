import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../../actions";
import { SuccessState } from "./SuccessState";

describe("SuccessState", () => {
  it("renders successful result content", () => {
    render(
      <SuccessState
        title="Pendaftaran berhasil dibuat"
        description="Proses berikutnya dapat dilanjutkan."
      />,
    );

    expect(screen.getByText("Pendaftaran berhasil dibuat")).toBeInTheDocument();
  });

  it("renders supporting content", () => {
    render(
      <SuccessState
        title="Pembayaran berhasil"
        supportingContent={<span>Referensi: DUMMY-001</span>}
      />,
    );

    expect(screen.getByText("Referensi: DUMMY-001")).toBeInTheDocument();
  });

  it("supports primary action", () => {
    render(
      <SuccessState
        title="Biodata telah difinalisasi"
        primaryAction={<Button>Lanjutkan</Button>}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Lanjutkan",
      }),
    ).toBeInTheDocument();
  });
});
