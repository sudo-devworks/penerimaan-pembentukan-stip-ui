import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { BackNavigation } from "./BackNavigation";

describe("BackNavigation", () => {
  it("renders anchor mode when href exists", () => {
    render(
      <BackNavigation href="/peserta">
        Kembali ke daftar peserta
      </BackNavigation>,
    );

    expect(
      screen.getByRole("link", {
        name: "Kembali ke daftar peserta",
      }),
    ).toHaveAttribute("href", "/peserta");
  });

  it("renders button mode for callback navigation", () => {
    const onClick = vi.fn();

    render(
      <BackNavigation onClick={onClick}>Kembali ke dashboard</BackNavigation>,
    );

    const button = screen.getByRole("button", {
      name: "Kembali ke dashboard",
    });

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveAttribute("type", "button");
  });

  it("supports disabled button mode", () => {
    render(
      <BackNavigation onClick={() => undefined} disabled>
        Kembali ke halaman sebelumnya
      </BackNavigation>,
    );

    expect(
      screen.getByRole("button", {
        name: "Kembali ke halaman sebelumnya",
      }),
    ).toBeDisabled();
  });

  it("does not expose decorative icon", () => {
    const { container } = render(
      <BackNavigation href="/">Kembali ke beranda</BackNavigation>,
    );

    expect(
      container.querySelector(".stip-back-navigation__icon"),
    ).toHaveAttribute("aria-hidden", "true");
  });
});
