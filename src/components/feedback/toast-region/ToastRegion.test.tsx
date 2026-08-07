import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Toast } from "../toast";
import { ToastRegion } from "./ToastRegion";

describe("ToastRegion", () => {
  it("renders an accessible notification region", () => {
    render(
      <ToastRegion>
        <Toast duration={null}>Data berhasil disimpan.</Toast>
      </ToastRegion>,
    );

    expect(
      screen.getByRole("region", {
        name: "Notifikasi",
      }),
    ).toBeInTheDocument();
  });

  it("supports a custom label", () => {
    render(
      <ToastRegion label="Notifikasi sistem">
        <Toast duration={null}>Data berhasil disimpan.</Toast>
      </ToastRegion>,
    );

    expect(
      screen.getByRole("region", {
        name: "Notifikasi sistem",
      }),
    ).toBeInTheDocument();
  });

  it("supports viewport placement", () => {
    render(
      <ToastRegion placement="bottom-center" data-testid="region">
        <Toast duration={null}>Data berhasil disimpan.</Toast>
      </ToastRegion>,
    );

    expect(screen.getByTestId("region")).toHaveAttribute(
      "data-placement",
      "bottom-center",
    );
  });

  it("does not create a duplicate live region", () => {
    render(
      <ToastRegion>
        <Toast duration={null}>Data berhasil disimpan.</Toast>
      </ToastRegion>,
    );

    const region = screen.getByRole("region", {
      name: "Notifikasi",
    });

    expect(region).not.toHaveAttribute("aria-live");
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <ToastRegion ref={ref}>
        <Toast duration={null}>Data berhasil disimpan.</Toast>
      </ToastRegion>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
