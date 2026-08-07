import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Button } from "../../actions/button";
import { SearchInput } from "../../forms/search-input";
import { Breadcrumb, BreadcrumbItem } from "../../navigation/breadcrumb";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../overlay/drawer";
import { DescriptionList, DescriptionListItem } from "../description-list";
import { DetailSummary } from "../detail-summary";
import { FilterToolbar } from "../filter-toolbar";
import { NotificationItem } from "../notification-item";
import { PageHeader } from "../page-header";
import { StatGroup, StatItem } from "../stat-group";
import { TimelineEvent } from "../timeline-event";

describe("Composite cross-portal integration", () => {
  it("composes a public website information page", () => {
    render(
      <main>
        <PageHeader
          actions={<Button>Daftar Sekarang</Button>}
          description="Informasi penerimaan peserta."
          navigation={
            <Breadcrumb>
              <BreadcrumbItem href="/">Beranda</BreadcrumbItem>
              <BreadcrumbItem current>Penerimaan</BreadcrumbItem>
            </Breadcrumb>
          }
          title="Penerimaan Pembentukan STIP"
        />

        <StatGroup columns={2}>
          <StatItem label="Program" value="3" />
          <StatItem label="Kuota" value="300" />
        </StatGroup>

        <ol aria-label="Alur pendaftaran">
          <TimelineEvent last title="Registrasi akun" />
        </ol>
      </main>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Penerimaan Pembentukan STIP",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("navigation", {
        name: "Breadcrumb",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Daftar Sekarang",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("300")).toBeInTheDocument();
    const timeline = screen.getByRole("list", {
      name: "Alur pendaftaran",
    });

    expect(within(timeline).getByRole("listitem")).toBeInTheDocument();
  });

  it("composes a participant portal summary", () => {
    render(
      <main>
        <PageHeader
          description="Lengkapi proses pendaftaran."
          status={<span>Menunggu kelengkapan</span>}
          title="Pendaftaran Diklat Pembentukan"
        />

        <NotificationItem
          description="Dokumen masih perlu dilengkapi."
          title="Tindakan diperlukan"
          unread
        />

        <DetailSummary title="Ringkasan Biodata">
          <DescriptionList>
            <DescriptionListItem term="Nama">Budi Santoso</DescriptionListItem>
          </DescriptionList>
        </DetailSummary>
      </main>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Pendaftaran Diklat Pembentukan",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Menunggu kelengkapan")).toBeInTheDocument();

    expect(screen.getByLabelText("Belum dibaca")).toBeInTheDocument();

    expect(
      screen.getByRole("region", {
        name: "Ringkasan Biodata",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Budi Santoso")).toBeInTheDocument();
  });

  it("composes internal search with a responsive filter drawer", async () => {
    const user = userEvent.setup();

    render(
      <main>
        <PageHeader title="Daftar Peserta" />

        <FilterToolbar
          mobileFilterTrigger={
            <Drawer>
              <DrawerTrigger variant="outline">Filter Peserta</DrawerTrigger>

              <DrawerContent placement="bottom">
                <DrawerHeader>
                  <DrawerTitle>Filter peserta</DrawerTitle>
                </DrawerHeader>

                <DrawerBody>Konten filter peserta</DrawerBody>

                <DrawerFooter>
                  <DrawerClose variant="outline">Batal</DrawerClose>

                  <Button>Terapkan Filter</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          }
          resultsSummary="128 peserta ditemukan"
          search={
            <SearchInput aria-label="Cari peserta" placeholder="Cari peserta" />
          }
        />
      </main>,
    );

    expect(
      screen.getByRole("searchbox", {
        name: "Cari peserta",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("128 peserta ditemukan")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Filter Peserta",
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: "Filter peserta",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Konten filter peserta")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Batal",
      }),
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
