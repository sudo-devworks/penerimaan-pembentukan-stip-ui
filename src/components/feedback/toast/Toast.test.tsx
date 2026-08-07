import { createRef } from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Button, TextAction } from "../../actions";
import { Toast } from "./Toast";

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("renders transient feedback", () => {
    render(
      <Toast title="Data berhasil disimpan" duration={null}>
        Perubahan data peserta telah tersimpan.
      </Toast>,
    );

    expect(screen.getByText("Data berhasil disimpan")).toBeInTheDocument();

    expect(
      screen.getByText("Perubahan data peserta telah tersimpan."),
    ).toBeInTheDocument();
  });

  it("uses polite announcement by default", () => {
    render(<Toast duration={null}>Data berhasil disimpan.</Toast>);

    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
  });

  it("supports assertive announcement explicitly", () => {
    render(
      <Toast announcement="assertive" duration={null}>
        Proses gagal dijalankan.
      </Toast>,
    );

    expect(screen.getByRole("alert")).toHaveAttribute("aria-live", "assertive");
  });

  it("does not steal focus", () => {
    const triggerRef = createRef<HTMLButtonElement>();

    render(
      <>
        <button ref={triggerRef}>Simpan</button>

        <Toast duration={null}>Data berhasil disimpan.</Toast>
      </>,
    );

    triggerRef.current?.focus();

    expect(triggerRef.current).toHaveFocus();
  });

  it("supports manual dismiss", () => {
    const onDismiss = vi.fn();

    render(
      <Toast onDismiss={onDismiss} duration={null}>
        Data berhasil disimpan.
      </Toast>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Tutup notifikasi",
      }),
    );

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("does not render dismiss without onDismiss", () => {
    render(<Toast duration={null}>Data berhasil disimpan.</Toast>);

    expect(
      screen.queryByRole("button", {
        name: "Tutup notifikasi",
      }),
    ).not.toBeInTheDocument();
  });

  it("auto dismisses after duration", () => {
    const onDismiss = vi.fn();

    render(
      <Toast onDismiss={onDismiss} duration={5000}>
        Data berhasil disimpan.
      </Toast>,
    );

    act(() => {
      vi.advanceTimersByTime(4999);
    });

    expect(onDismiss).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("does not auto dismiss when duration is null", () => {
    const onDismiss = vi.fn();

    render(
      <Toast onDismiss={onDismiss} duration={null}>
        Data berhasil disimpan.
      </Toast>,
    );

    act(() => {
      vi.advanceTimersByTime(20000);
    });

    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("pauses auto dismiss while hovered", () => {
    const onDismiss = vi.fn();

    render(
      <Toast onDismiss={onDismiss} duration={5000} data-testid="toast">
        Data berhasil disimpan.
      </Toast>,
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    fireEvent.mouseEnter(screen.getByTestId("toast"));

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(onDismiss).not.toHaveBeenCalled();

    fireEvent.mouseLeave(screen.getByTestId("toast"));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("pauses auto dismiss while focus is inside", () => {
    const onDismiss = vi.fn();

    render(
      <Toast
        onDismiss={onDismiss}
        duration={5000}
        action={<Button>Batalkan</Button>}
      >
        Perubahan berhasil diterapkan.
      </Toast>,
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const action = screen.getByRole("button", {
      name: "Batalkan",
    });

    fireEvent.focus(action);

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(onDismiss).not.toHaveBeenCalled();

    fireEvent.blur(action);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("renders an optional action", () => {
    render(
      <Toast duration={null} action={<TextAction>Lihat rincian</TextAction>}>
        Data berhasil disimpan.
      </Toast>,
    );

    expect(
      screen.getByRole("button", {
        name: "Lihat rincian",
      }),
    ).toBeInTheDocument();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Toast ref={ref} duration={null}>
        Data berhasil disimpan.
      </Toast>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
