import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button, TextAction } from "../actions";
import {
  Alert,
  EmptyState,
  ErrorState,
  InlineAlert,
  LoadingIndicator,
  LoadingMessage,
  ProgressIndicator,
  SkeletonBlock,
  SuccessState,
  Toast,
  ToastRegion,
} from "./index";

describe("Feedback Components integration", () => {
  it("keeps static feedback non-aggressive by default", () => {
    render(
      <>
        <Alert>Informasi pendaftaran belum tersedia.</Alert>

        <InlineAlert>Pembayaran masih menunggu konfirmasi.</InlineAlert>

        <EmptyState title="Belum ada kegiatan aktif" />

        <ErrorState title="Data belum dapat dimuat" />

        <SuccessState title="Pendaftaran berhasil dibuat" />
      </>,
    );

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    expect(screen.queryAllByRole("status")).toHaveLength(0);
  });

  it("announces dynamic feedback only once per component", () => {
    render(
      <>
        <Alert announcement="polite">Pembayaran masih diproses.</Alert>

        <ToastRegion>
          <Toast duration={null}>Data berhasil disimpan.</Toast>
        </ToastRegion>
      </>,
    );

    expect(screen.getAllByRole("status")).toHaveLength(2);

    expect(
      screen.getByRole("region", {
        name: "Notifikasi",
      }),
    ).not.toHaveAttribute("aria-live");
  });

  it("distinguishes assertive and polite announcements", () => {
    render(
      <>
        <LoadingMessage title="Memuat data peserta…" />

        <Toast announcement="assertive" duration={null}>
          Proses gagal dijalankan.
        </Toast>
      </>,
    );

    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");

    expect(screen.getByRole("alert")).toHaveAttribute("aria-live", "assertive");
  });

  it("keeps decorative indicators hidden from assistive technology", () => {
    const { container } = render(
      <>
        <LoadingIndicator decorative />

        <SkeletonBlock height="120px" />
      </>,
    );

    const decorativeElements = container.querySelectorAll(
      '[aria-hidden="true"]',
    );

    expect(decorativeElements.length).toBeGreaterThanOrEqual(2);
  });

  it("supports complete keyboard-accessible feedback actions", () => {
    const retry = vi.fn();
    const dismiss = vi.fn();

    render(
      <>
        <ErrorState
          title="Data peserta belum dapat dimuat"
          primaryAction={<Button onClick={retry}>Coba lagi</Button>}
          secondaryAction={<TextAction>Kembali</TextAction>}
        />

        <Toast duration={null} onDismiss={dismiss}>
          Proses belum berhasil.
        </Toast>
      </>,
    );

    const retryButton = screen.getByRole("button", {
      name: "Coba lagi",
    });

    const secondaryAction = screen.getByRole("button", {
      name: "Kembali",
    });

    const dismissButton = screen.getByRole("button", {
      name: "Tutup notifikasi",
    });

    retryButton.focus();
    expect(retryButton).toHaveFocus();

    fireEvent.keyDown(retryButton, {
      key: "Enter",
    });
    fireEvent.click(retryButton);

    expect(retry).toHaveBeenCalledTimes(1);

    secondaryAction.focus();
    expect(secondaryAction).toHaveFocus();

    dismissButton.focus();
    expect(dismissButton).toHaveFocus();

    fireEvent.click(dismissButton);

    expect(dismiss).toHaveBeenCalledTimes(1);
  });

  it("does not move focus when transient feedback appears", () => {
    render(
      <>
        <Button>Simpan perubahan</Button>

        <Toast duration={null}>Perubahan berhasil disimpan.</Toast>
      </>,
    );

    const trigger = screen.getByRole("button", {
      name: "Simpan perubahan",
    });

    trigger.focus();

    expect(trigger).toHaveFocus();
  });

  it("exposes determinate progress values correctly", () => {
    render(
      <ProgressIndicator
        label="Mengunggah dokumen"
        value={75}
        valueText="3 dari 4 bagian"
      />,
    );

    const progress = screen.getByRole("progressbar", {
      name: "Mengunggah dokumen",
    });

    expect(progress).toHaveAttribute("aria-valuenow", "75");

    expect(progress).toHaveAttribute("aria-valuetext", "3 dari 4 bagian");
  });

  it("does not expose a false value in indeterminate progress", () => {
    render(
      <ProgressIndicator mode="indeterminate" label="Memproses pembayaran" />,
    );

    expect(
      screen.getByRole("progressbar", {
        name: "Memproses pembayaran",
      }),
    ).not.toHaveAttribute("aria-valuenow");
  });

  it("supports feedback composition across inherited densities", () => {
    const { container } = render(
      <>
        <div data-density="comfortable">
          <Alert>Comfortable feedback</Alert>
        </div>

        <div data-density="default">
          <InlineAlert>Default feedback</InlineAlert>
        </div>

        <div data-density="compact">
          <SuccessState variant="compact" title="Compact feedback" />
        </div>
      </>,
    );

    expect(
      container.querySelector('[data-density="comfortable"] .stip-alert'),
    ).toBeInTheDocument();

    expect(
      container.querySelector('[data-density="default"] .stip-inline-alert'),
    ).toBeInTheDocument();

    expect(
      container.querySelector('[data-density="compact"] .stip-success-state'),
    ).toBeInTheDocument();
  });
});
