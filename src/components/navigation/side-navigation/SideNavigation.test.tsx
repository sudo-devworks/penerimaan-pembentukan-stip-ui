import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
} from "./index";

describe("SideNavigation", () => {
  it("renders navigation and labelled groups", () => {
    render(
      <SideNavigation>
        <SideNavigationGroup label="Peserta">
          <SideNavigationItem href="/peserta">
            Daftar Peserta
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Navigasi utama",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("group", {
        name: "Peserta",
      }),
    ).toBeInTheDocument();
  });

  it("marks active item as current page", () => {
    render(
      <SideNavigation>
        <SideNavigationItem href="/peserta" active>
          Daftar Peserta
        </SideNavigationItem>
      </SideNavigation>,
    );

    expect(
      screen.getByRole("link", {
        name: "Daftar Peserta",
      }),
    ).toHaveAttribute("aria-current", "page");
  });

  it("removes disabled item navigation", () => {
    render(
      <SideNavigation>
        <SideNavigationItem
          href="/seleksi"
          disabled
          accessibleLabel="Seleksi, belum tersedia"
        >
          Seleksi
        </SideNavigationItem>
      </SideNavigation>,
    );

    const item = screen.getByLabelText("Seleksi, belum tersedia");

    expect(item).not.toHaveAttribute("href");
    expect(item).toHaveAttribute("tabindex", "-1");
    expect(item).toHaveAttribute("aria-disabled", "true");
  });
});
