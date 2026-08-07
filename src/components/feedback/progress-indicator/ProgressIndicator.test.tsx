import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProgressIndicator } from "./ProgressIndicator";

describe("ProgressIndicator", () => {
  it("renders determinate progress semantics", () => {
    render(<ProgressIndicator label="Mengunggah dokumen" value={65} />);

    const progressbar = screen.getByRole("progressbar", {
      name: "Mengunggah dokumen",
    });

    expect(progressbar).toHaveAttribute("aria-valuemin", "0");

    expect(progressbar).toHaveAttribute("aria-valuemax", "100");

    expect(progressbar).toHaveAttribute("aria-valuenow", "65");
  });

  it("supports custom minimum and maximum", () => {
    render(
      <ProgressIndicator label="Memproses data" min={10} max={20} value={15} />,
    );

    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).toHaveAttribute("aria-valuemin", "10");

    expect(progressbar).toHaveAttribute("aria-valuemax", "20");

    expect(progressbar).toHaveAttribute("aria-valuenow", "15");
  });

  it("clamps invalid determinate value", () => {
    render(<ProgressIndicator label="Mengunggah dokumen" value={140} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "100",
    );
  });

  it("supports indeterminate mode", () => {
    render(
      <ProgressIndicator mode="indeterminate" label="Memproses pembayaran" />,
    );

    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).not.toHaveAttribute("aria-valuenow");
  });

  it("supports accessible value text", () => {
    render(
      <ProgressIndicator
        label="Mengunggah dokumen"
        value={50}
        valueText="Setengah selesai"
      />,
    );

    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuetext",
      "Setengah selesai",
    );
  });

  it("uses aria-label when visible label is hidden", () => {
    render(
      <ProgressIndicator label="Memuat peserta" showLabel={false} value={25} />,
    );

    expect(
      screen.getByRole("progressbar", {
        name: "Memuat peserta",
      }),
    ).toBeInTheDocument();
  });

  it("renders description relationship", () => {
    render(
      <ProgressIndicator
        label="Mengunggah dokumen"
        value={25}
        description="Jangan tutup halaman ini."
      />,
    );

    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-describedby");
  });
});
