import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "../../actions";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders title and message content", () => {
    render(
      <Alert title="Dokumen perlu diperbaiki" severity="warning">
        Unggah ulang dokumen yang dapat dibaca dengan jelas.
      </Alert>,
    );

    expect(screen.getByText("Dokumen perlu diperbaiki")).toBeInTheDocument();

    expect(
      screen.getByText("Unggah ulang dokumen yang dapat dibaca dengan jelas."),
    ).toBeInTheDocument();
  });

  it("uses neutral severity by default", () => {
    const { container } = render(<Alert>Data sedang tersedia.</Alert>);

    expect(container.firstChild).toHaveAttribute("data-severity", "neutral");
  });

  it("supports every severity", () => {
    const { container } = render(
      <Alert severity="danger">Data peserta belum dapat dimuat.</Alert>,
    );

    expect(container.firstChild).toHaveAttribute("data-severity", "danger");
  });

  it("does not announce static content aggressively", () => {
    render(<Alert>Informasi pendaftaran.</Alert>);

    const message = screen
      .getByText("Informasi pendaftaran.")
      .closest(".stip-alert");

    expect(message).not.toHaveAttribute("role");
    expect(message).not.toHaveAttribute("aria-live");
  });

  it("supports polite announcement", () => {
    render(<Alert announcement="polite">Pembayaran masih diproses.</Alert>);

    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
  });

  it("supports assertive announcement", () => {
    render(<Alert announcement="assertive">Pembayaran gagal diproses.</Alert>);

    expect(screen.getByRole("alert")).toHaveAttribute("aria-live", "assertive");
  });

  it("renders an action", () => {
    render(
      <Alert action={<Button variant="secondary">Lihat dokumen</Button>}>
        Dokumen perlu diperbaiki.
      </Alert>,
    );

    expect(
      screen.getByRole("button", {
        name: "Lihat dokumen",
      }),
    ).toBeInTheDocument();
  });

  it("supports dismiss behavior", () => {
    const onDismiss = vi.fn();

    render(
      <Alert dismissible onDismiss={onDismiss}>
        Data berhasil disimpan.
      </Alert>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Tutup pesan",
      }),
    );

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("does not render dismiss without onDismiss", () => {
    render(<Alert dismissible>Data berhasil disimpan.</Alert>);

    expect(
      screen.queryByRole("button", {
        name: "Tutup pesan",
      }),
    ).not.toBeInTheDocument();
  });

  it("supports a custom dismiss label", () => {
    render(
      <Alert
        dismissible
        onDismiss={() => undefined}
        dismissLabel="Tutup peringatan dokumen"
      >
        Dokumen perlu diperbaiki.
      </Alert>,
    );

    expect(
      screen.getByRole("button", {
        name: "Tutup peringatan dokumen",
      }),
    ).toBeInTheDocument();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLDivElement>();

    render(<Alert ref={ref}>Data berhasil disimpan.</Alert>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("supports custom className and native attributes", () => {
    render(
      <Alert className="custom-alert" data-testid="alert">
        Informasi kegiatan.
      </Alert>,
    );

    expect(screen.getByTestId("alert")).toHaveClass(
      "stip-alert",
      "custom-alert",
    );
  });

  it("supports long content", () => {
    render(
      <Alert title="Informasi proses pendaftaran">
        Informasi ini menjelaskan proses pendaftaran yang membutuhkan konten
        lebih panjang dan tetap harus terbaca dengan baik pada ukuran layar
        sempit.
      </Alert>,
    );

    expect(screen.getByText(/Informasi ini menjelaskan/)).toBeInTheDocument();
  });
});
