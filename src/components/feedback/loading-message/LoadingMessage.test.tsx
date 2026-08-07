import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LoadingMessage } from "./LoadingMessage";

describe("LoadingMessage", () => {
  it("renders title and description", () => {
    render(
      <LoadingMessage
        title="Memuat data peserta…"
        description="Mohon tunggu sebentar."
      />,
    );

    expect(screen.getByText("Memuat data peserta…")).toBeInTheDocument();

    expect(screen.getByText("Mohon tunggu sebentar.")).toBeInTheDocument();
  });

  it("uses polite status by default", () => {
    render(<LoadingMessage title="Memproses pembayaran…" />);

    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
  });

  it("supports disabled announcement", () => {
    render(<LoadingMessage title="Memuat data…" announcement="none" />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLDivElement>();

    render(<LoadingMessage ref={ref} title="Memuat data…" />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
