import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("renders accessible navigation semantics", () => {
    render(
      <Pagination page={4} totalPages={10} onPageChange={() => undefined} />,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Pagination",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Halaman saat ini, 4",
      }),
    ).toHaveAttribute("aria-current", "page");
  });

  it("calls onPageChange in button mode", () => {
    const onPageChange = vi.fn();

    const { container } = render(
      <Pagination page={3} totalPages={8} onPageChange={onPageChange} />,
    );

    const desktop = getDesktopPagination(container);

    fireEvent.click(
      within(desktop).getByRole("button", {
        name: "Halaman berikutnya",
      }),
    );

    expect(onPageChange).toHaveBeenCalledWith(4, expect.anything());
  });

  it("renders page anchors in link mode", () => {
    render(
      <Pagination
        mode="link"
        page={2}
        totalPages={5}
        getPageHref={(page) => `/peserta?page=${page}`}
      />,
    );

    expect(
      screen.getByRole("link", {
        name: "Halaman 3",
      }),
    ).toHaveAttribute("href", "/peserta?page=3");
  });

  it("disables previous navigation on first page", () => {
    const { container } = render(
      <Pagination page={1} totalPages={5} onPageChange={() => undefined} />,
    );

    const desktop = getDesktopPagination(container);

    expect(
      within(desktop).getByRole("button", {
        name: "Halaman sebelumnya",
      }),
    ).toBeDisabled();

    expect(
      within(desktop).getByRole("button", {
        name: "Halaman pertama",
      }),
    ).toBeDisabled();
  });

  it("disables next navigation on last page", () => {
    const { container } = render(
      <Pagination page={5} totalPages={5} onPageChange={() => undefined} />,
    );

    const desktop = getDesktopPagination(container);

    expect(
      within(desktop).getByRole("button", {
        name: "Halaman berikutnya",
      }),
    ).toBeDisabled();

    expect(
      within(desktop).getByRole("button", {
        name: "Halaman terakhir",
      }),
    ).toBeDisabled();
  });

  it("clamps a page outside the valid range", () => {
    render(
      <Pagination page={20} totalPages={5} onPageChange={() => undefined} />,
    );

    expect(
      screen.getByRole("button", {
        name: "Halaman saat ini, 5",
      }),
    ).toBeInTheDocument();
  });

  it("renders ellipsis for a large page range", () => {
    const { container } = render(
      <Pagination page={10} totalPages={20} onPageChange={() => undefined} />,
    );

    expect(
      container.querySelectorAll(".stip-pagination__ellipsis").length,
    ).toBeGreaterThan(0);
  });

  it("supports custom navigation label", () => {
    render(
      <Pagination
        label="Navigasi halaman peserta"
        page={1}
        totalPages={3}
        onPageChange={() => undefined}
      />,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Navigasi halaman peserta",
      }),
    ).toBeInTheDocument();
  });

  it("prevents disabled link navigation", () => {
    const { container } = render(
      <Pagination
        mode="link"
        page={1}
        totalPages={3}
        getPageHref={(page) => `/page/${page}`}
      />,
    );

    const desktop = getDesktopPagination(container);

    const previous = within(desktop).getByLabelText("Halaman sebelumnya");

    expect(previous.tagName).toBe("A");

    expect(previous).toHaveAttribute("aria-disabled", "true");

    expect(previous).toHaveAttribute("tabindex", "-1");

    expect(previous).not.toHaveAttribute("href");
  });

  it("renders mobile pagination summary", () => {
    const { container } = render(
      <Pagination page={4} totalPages={12} onPageChange={() => undefined} />,
    );

    const mobile = container.querySelector(".stip-pagination__mobile");

    expect(mobile).toHaveTextContent("Halaman 4 dari 12");
  });
});

const getDesktopPagination = (container: HTMLElement): HTMLElement => {
  const desktop = container.querySelector(".stip-pagination__desktop");

  if (!(desktop instanceof HTMLElement)) {
    throw new Error("Desktop pagination container was not rendered.");
  }

  return desktop;
};
