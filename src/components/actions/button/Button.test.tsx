import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ArrowRight, Save } from "lucide-react";

import { Button } from "./Button";
import type { ButtonVariant } from "./Button.types";

describe("Button", () => {
  it("renders the visible label", () => {
    render(<Button>Daftar Sekarang</Button>);

    expect(
      screen.getByRole("button", {
        name: "Daftar Sekarang",
      }),
    ).toBeInTheDocument();
  });

  it("uses a native button element", () => {
    render(<Button>Simpan Perubahan</Button>);

    const button = screen.getByRole("button", {
      name: "Simpan Perubahan",
    });

    expect(button.tagName).toBe("BUTTON");
  });

  it("defaults the button type to button", () => {
    render(<Button>Buka Detail</Button>);

    expect(
      screen.getByRole("button", {
        name: "Buka Detail",
      }),
    ).toHaveAttribute("type", "button");
  });

  it("supports the submit button type", () => {
    render(<Button type="submit">Simpan Biodata</Button>);

    expect(
      screen.getByRole("button", {
        name: "Simpan Biodata",
      }),
    ).toHaveAttribute("type", "submit");
  });

  it("calls the click handler", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Claim Peserta</Button>);

    await user.click(
      screen.getByRole("button", {
        name: "Claim Peserta",
      }),
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports keyboard activation", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Tetapkan Hasil</Button>);

    const button = screen.getByRole("button", {
      name: "Tetapkan Hasil",
    });

    button.focus();

    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("uses native disabled behavior", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Finalisasi Biodata
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: "Finalisasi Biodata",
    });

    expect(button).toBeDisabled();

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("disables interaction while loading", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button loading loadingLabel="Menyimpan..." onClick={handleClick}>
        Simpan Perubahan
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: /menyimpan/i,
    });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("uses the original label when loadingLabel is omitted", () => {
    render(<Button loading>Mengunggah Dokumen</Button>);

    expect(
      screen.getByRole("button", {
        name: "Mengunggah Dokumen",
      }),
    ).toBeDisabled();
  });

  it("renders a decorative leading icon", () => {
    const { container } = render(
      <Button leadingIcon={<Save data-testid="save-icon" />}>
        Simpan Perubahan
      </Button>,
    );

    expect(screen.getByTestId("save-icon")).toBeInTheDocument();

    expect(
      container.querySelector(".stip-button__icon--leading"),
    ).toHaveAttribute("aria-hidden", "true");
  });

  it("renders a decorative trailing icon", () => {
    const { container } = render(
      <Button trailingIcon={<ArrowRight data-testid="arrow-icon" />}>
        Lanjutkan Pembayaran
      </Button>,
    );

    expect(screen.getByTestId("arrow-icon")).toBeInTheDocument();

    expect(
      container.querySelector(".stip-button__icon--trailing"),
    ).toHaveAttribute("aria-hidden", "true");
  });

  it("replaces the leading icon with a spinner while loading", () => {
    const { container } = render(
      <Button
        leadingIcon={<Save data-testid="save-icon" />}
        loading
        loadingLabel="Menyimpan..."
      >
        Simpan Perubahan
      </Button>,
    );

    expect(screen.queryByTestId("save-icon")).not.toBeInTheDocument();

    expect(container.querySelector(".stip-button__spinner")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("supports the full-width layout class", () => {
    render(<Button fullWidth>Unggah Dokumen</Button>);

    expect(
      screen.getByRole("button", {
        name: "Unggah Dokumen",
      }),
    ).toHaveClass("stip-button", "stip-button--full-width");
  });

  it("forwards native attributes", () => {
    render(
      <Button
        id="refund-action"
        name="intent"
        value="refund"
        aria-describedby="refund-helper"
        data-testid="refund-button"
      >
        Ajukan Refund
      </Button>,
    );

    const button = screen.getByTestId("refund-button");

    expect(button).toHaveAttribute("id", "refund-action");
    expect(button).toHaveAttribute("name", "intent");
    expect(button).toHaveAttribute("value", "refund");
    expect(button).toHaveAttribute("aria-describedby", "refund-helper");
  });

  it("merges a custom class name", () => {
    render(<Button className="custom-layout-class">Unduh Laporan</Button>);

    expect(
      screen.getByRole("button", {
        name: "Unduh Laporan",
      }),
    ).toHaveClass("stip-button", "custom-layout-class");
  });

  it("forwards the button ref", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Buka Instruksi</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("exposes the selected variant and size", () => {
    render(
      <Button variant="secondary" size="lg">
        Lihat Instruksi Pembayaran
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: "Lihat Instruksi Pembayaran",
    });

    expect(button).toHaveAttribute("data-variant", "secondary");
    expect(button).toHaveAttribute("data-size", "lg");
  });

  it("does not trigger a disabled button through fireEvent", () => {
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Batalkan Pendaftaran
      </Button>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Batalkan Pendaftaran",
      }),
    );

    expect(handleClick).not.toHaveBeenCalled();
  });

  it.each<ButtonVariant>([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "text",
    "destructive",
  ])("exposes the %s variant contract", (variant) => {
    render(<Button variant={variant}>Action Button</Button>);

    expect(
      screen.getByRole("button", {
        name: "Action Button",
      }),
    ).toHaveAttribute("data-variant", variant);
  });

  it("uses primary as the default variant", () => {
    render(<Button>Daftar Sekarang</Button>);

    expect(
      screen.getByRole("button", {
        name: "Daftar Sekarang",
      }),
    ).toHaveAttribute("data-variant", "primary");
  });

  it("preserves the selected variant while loading", () => {
    render(
      <Button variant="destructive" loading loadingLabel="Membatalkan...">
        Batalkan Pendaftaran
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: /membatalkan/i,
    });

    expect(button).toHaveAttribute("data-variant", "destructive");
    expect(button).toHaveAttribute("data-loading", "true");
    expect(button).toBeDisabled();
  });

  it("does not expose data-loading when idle", () => {
    render(<Button>Simpan Perubahan</Button>);

    expect(
      screen.getByRole("button", {
        name: "Simpan Perubahan",
      }),
    ).not.toHaveAttribute("data-loading");
  });

  it("allows focus when enabled", () => {
    render(<Button>Claim Peserta</Button>);

    const button = screen.getByRole("button", {
      name: "Claim Peserta",
    });

    button.focus();

    expect(button).toHaveFocus();
  });

  it("does not receive focus when disabled", () => {
    render(<Button disabled>Finalisasi Biodata</Button>);

    const button = screen.getByRole("button", {
      name: "Finalisasi Biodata",
    });

    button.focus();

    expect(button).not.toHaveFocus();
  });

  it("keeps an existing aria-describedby while loading", () => {
    render(
      <>
        <span id="payment-helper">Proses membutuhkan koneksi aktif.</span>

        <Button
          loading
          loadingLabel="Memproses Pembayaran..."
          aria-describedby="payment-helper"
        >
          Lanjutkan Pembayaran
        </Button>
      </>,
    );

    const button = screen.getByRole("button", {
      name: /memproses pembayaran/i,
    });

    const describedBy = button.getAttribute("aria-describedby");

    expect(describedBy).toContain("payment-helper");
    expect(describedBy?.split(" ").length).toBe(2);
  });

  it("hides both decorative icons while loading", () => {
    render(
      <Button
        leadingIcon={<Save data-testid="leading-save-icon" />}
        trailingIcon={<ArrowRight data-testid="trailing-arrow-icon" />}
        loading
        loadingLabel="Menyimpan..."
      >
        Simpan Perubahan
      </Button>,
    );

    expect(screen.queryByTestId("leading-save-icon")).not.toBeInTheDocument();

    expect(screen.queryByTestId("trailing-arrow-icon")).not.toBeInTheDocument();
  });
});
