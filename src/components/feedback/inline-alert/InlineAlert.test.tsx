import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { TextAction } from "../../actions";
import { InlineAlert } from "./InlineAlert";

describe("InlineAlert", () => {
  it("renders contextual content", () => {
    render(
      <InlineAlert severity="warning" title="Dokumen perlu diperbaiki">
        Gunakan file yang dapat dibaca dengan jelas.
      </InlineAlert>,
    );

    expect(screen.getByText("Dokumen perlu diperbaiki")).toBeInTheDocument();

    expect(
      screen.getByText("Gunakan file yang dapat dibaca dengan jelas."),
    ).toBeInTheDocument();
  });

  it("does not replace field error semantics", () => {
    render(
      <InlineAlert>Status upload dokumen tersedia di area ini.</InlineAlert>,
    );

    expect(
      screen.getByText("Status upload dokumen tersedia di area ini."),
    ).not.toHaveAttribute("role", "alert");
  });

  it("supports polite announcement", () => {
    render(
      <InlineAlert announcement="polite">
        Dokumen berhasil dipilih.
      </InlineAlert>,
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders an optional action", () => {
    render(
      <InlineAlert action={<TextAction>Pilih ulang</TextAction>}>
        Dokumen belum sesuai.
      </InlineAlert>,
    );

    expect(
      screen.getByRole("button", {
        name: "Pilih ulang",
      }),
    ).toBeInTheDocument();
  });

  it("supports dismiss behavior", () => {
    const onDismiss = vi.fn();

    render(
      <InlineAlert dismissible onDismiss={onDismiss}>
        Dokumen berhasil dipilih.
      </InlineAlert>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Tutup pesan",
      }),
    );

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLDivElement>();

    render(<InlineAlert ref={ref}>Pembayaran masih diproses.</InlineAlert>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
