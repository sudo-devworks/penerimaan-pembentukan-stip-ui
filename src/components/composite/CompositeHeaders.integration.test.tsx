import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../actions/button";
import { ButtonGroup } from "../actions/button-group";
import { Breadcrumb, BreadcrumbItem } from "../navigation/breadcrumb";
import { PageHeader } from "./page-header";
import { SectionHeader } from "./section-header";

describe("Composite header composition", () => {
  it("composes navigation, page actions, and section actions", () => {
    render(
      <main>
        <PageHeader
          actions={
            <ButtonGroup>
              <Button variant="outline">Ekspor</Button>
              <Button variant="primary">Tambah Peserta</Button>
            </ButtonGroup>
          }
          navigation={
            <Breadcrumb>
              <BreadcrumbItem href="/">Beranda</BreadcrumbItem>
              <BreadcrumbItem current>Peserta</BreadcrumbItem>
            </Breadcrumb>
          }
          title="Daftar Peserta"
        />

        <section>
          <SectionHeader
            actions={<Button variant="outline">Atur Kolom</Button>}
            headingLevel={2}
            title="Peserta Aktif"
          />

          <p>Konten peserta</p>
        </section>
      </main>,
    );

    expect(
      screen.getByRole("navigation", {
        name: "Breadcrumb",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Daftar Peserta",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Peserta Aktif",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Tambah Peserta",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Atur Kolom",
      }),
    ).toBeInTheDocument();
  });
});
