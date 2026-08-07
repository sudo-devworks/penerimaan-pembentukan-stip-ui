import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TopNavigation, TopNavigationItem } from "./index";

describe("TopNavigation", () => {
  it("renders horizontal page navigation", () => {
    render(
      <TopNavigation>
        <TopNavigationItem href="/" active>
          Beranda
        </TopNavigationItem>

        <TopNavigationItem href="/kegiatan">Kegiatan</TopNavigationItem>
      </TopNavigation>,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Navigasi utama",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Beranda",
      }),
    ).toHaveAttribute("aria-current", "page");
  });
});
