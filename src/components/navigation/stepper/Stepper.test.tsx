import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Stepper, StepperItem } from "./index";

describe("Stepper", () => {
  it("renders an accessible ordered process", () => {
    const { container } = render(
      <Stepper label="Tahapan pendaftaran">
        <StepperItem step={1} status="completed" title="Pilih kegiatan" />

        <StepperItem step={2} status="current" title="Pembayaran formulir" />

        <StepperItem step={3} title="Lengkapi biodata" hideConnector />
      </Stepper>,
    );

    const stepper = screen.getByRole("list", {
      name: "Tahapan pendaftaran",
    });

    expect(stepper.tagName).toBe("OL");

    expect(container.querySelectorAll(".stip-stepper-item")).toHaveLength(3);
  });

  it("marks the current step correctly", () => {
    render(
      <Stepper>
        <StepperItem step={1} status="current" title="Pembayaran formulir" />
      </Stepper>,
    );

    expect(
      screen
        .getByText("Pembayaran formulir")
        .closest(".stip-stepper-item__control"),
    ).toHaveAttribute("aria-current", "step");
  });

  it("is non-interactive by default", () => {
    render(
      <Stepper>
        <StepperItem step={1} title="Pilih kegiatan" />
      </Stepper>,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("supports link interaction", () => {
    render(
      <Stepper>
        <StepperItem
          step={1}
          status="completed"
          title="Pilih kegiatan"
          href="/pendaftaran/kegiatan"
        />
      </Stepper>,
    );

    expect(
      screen.getByRole("link", {
        name: "Pilih kegiatan",
      }),
    ).toHaveAttribute("href", "/pendaftaran/kegiatan");
  });

  it("supports button interaction", () => {
    const onClick = vi.fn();

    render(
      <Stepper>
        <StepperItem step={1} title="Lengkapi biodata" onClick={onClick} />
      </Stepper>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Lengkapi biodata",
      }),
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports disabled button interaction", () => {
    render(
      <Stepper>
        <StepperItem
          step={1}
          title="Seleksi"
          onClick={() => undefined}
          disabled
        />
      </Stepper>,
    );

    expect(
      screen.getByRole("button", {
        name: "Seleksi",
      }),
    ).toBeDisabled();
  });

  it.each(["upcoming", "current", "completed", "error"] as const)(
    "renders status %s",
    (status) => {
      const { container } = render(
        <Stepper>
          <StepperItem step={1} status={status} title="Tahapan" />
        </Stepper>,
      );

      expect(container.querySelector(".stip-stepper-item")).toHaveAttribute(
        "data-status",
        status,
      );
    },
  );

  it("supports vertical orientation", () => {
    render(
      <Stepper orientation="vertical">
        <StepperItem step={1} title="Pilih kegiatan" />
      </Stepper>,
    );

    expect(screen.getByRole("list")).toHaveAttribute(
      "data-orientation",
      "vertical",
    );
  });

  it("hides decorative indicator from assistive technology", () => {
    const { container } = render(
      <Stepper>
        <StepperItem step={1} title="Pilih kegiatan" />
      </Stepper>,
    );

    expect(
      container.querySelector(".stip-stepper-item__indicator"),
    ).toHaveAttribute("aria-hidden", "true");
  });

  it("does not render connector when hidden", () => {
    const { container } = render(
      <Stepper>
        <StepperItem step={1} title="Hasil akhir" hideConnector />
      </Stepper>,
    );

    expect(
      container.querySelector(".stip-stepper-item__connector"),
    ).not.toBeInTheDocument();
  });
});
