import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Breadcrumb, BreadcrumbItem } from "./index";

describe("Breadcrumb", () => {
  it("renders accessible navigation semantics", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

        <BreadcrumbItem current>Detail Peserta</BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Breadcrumb",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Beranda",
      }),
    ).toHaveAttribute("href", "/");

    expect(screen.getByText("Detail Peserta")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("supports custom navigation label", () => {
    render(
      <Breadcrumb label="Lokasi halaman">
        <BreadcrumbItem current>Detail</BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Lokasi halaman",
      }),
    ).toBeInTheDocument();
  });

  it("does not render current item as a link", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/peserta" current>
          Detail Peserta
        </BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(
      screen.queryByRole("link", {
        name: "Detail Peserta",
      }),
    ).not.toBeInTheDocument();
  });

  it("hides separator from assistive technology", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

        <BreadcrumbItem current>Kegiatan</BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(
      container.querySelector(".stip-breadcrumb__separator"),
    ).toHaveAttribute("aria-hidden", "true");
  });

  it("forwards navigation ref", () => {
    const ref = createRef<HTMLElement>();

    render(
      <Breadcrumb ref={ref}>
        <BreadcrumbItem current>Detail</BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
