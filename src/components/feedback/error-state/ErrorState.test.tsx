import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "../../actions";
import { ErrorState } from "./ErrorState";

describe("ErrorState", () => {
  it("renders understandable error content", () => {
    render(
      <ErrorState
        title="Data peserta belum dapat dimuat"
        description="Periksa koneksi lalu coba kembali."
      />,
    );

    expect(
      screen.getByText("Data peserta belum dapat dimuat"),
    ).toBeInTheDocument();
  });

  it("supports retry action", () => {
    const retry = vi.fn();

    render(
      <ErrorState
        title="Data gagal dimuat"
        primaryAction={<Button onClick={retry}>Coba lagi</Button>}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Coba lagi",
      }),
    );

    expect(retry).toHaveBeenCalledTimes(1);
  });

  it("supports explicit polite announcement", () => {
    render(<ErrorState title="Data gagal dimuat" announcement="polite" />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("does not expose technical error text automatically", () => {
    render(<ErrorState title="Data belum dapat dimuat" />);

    expect(
      screen.queryByText(/500|exception|undefined/i),
    ).not.toBeInTheDocument();
  });
});
