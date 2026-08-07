import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Bell, Home } from "lucide-react";

import { BottomNavigation, BottomNavigationItem } from "./index";

describe("BottomNavigation", () => {
  it("renders participant mobile navigation", () => {
    render(
      <BottomNavigation>
        <BottomNavigationItem href="/" icon={<Home />} active>
          Beranda
        </BottomNavigationItem>

        <BottomNavigationItem
          href="/notifikasi"
          icon={<Bell />}
          badge="3"
          accessibleLabel="Notifikasi, 3 belum dibaca"
        >
          Notifikasi
        </BottomNavigationItem>
      </BottomNavigation>,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Navigasi utama peserta",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Beranda",
      }),
    ).toHaveAttribute("aria-current", "page");

    expect(
      screen.getByRole("link", {
        name: "Notifikasi, 3 belum dibaca",
      }),
    ).toBeInTheDocument();
  });

  it("hides visible icons from assistive technology", () => {
    const { container } = render(
      <BottomNavigation>
        <BottomNavigationItem href="/" icon={<Home />}>
          Beranda
        </BottomNavigationItem>
      </BottomNavigation>,
    );

    expect(
      container.querySelector(".stip-bottom-navigation__item-icon"),
    ).toHaveAttribute("aria-hidden", "true");
  });
});
