import { useState } from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Bell, Home, LayoutDashboard } from "lucide-react";

import {
  BackNavigation,
  BottomNavigation,
  BottomNavigationItem,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  SkipLink,
  Stepper,
  StepperItem,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TopNavigation,
  TopNavigationItem,
} from "./index";

const ControlledTabs = ({
  activationMode = "automatic",
}: {
  activationMode?: "automatic" | "manual";
}) => {
  const [value, setValue] = useState("summary");

  return (
    <Tabs
      value={value}
      onValueChange={setValue}
      activationMode={activationMode}
    >
      <TabList aria-label="Detail peserta">
        <Tab value="summary">Ringkasan</Tab>

        <Tab value="profile">Biodata</Tab>

        <Tab value="documents" disabled>
          Dokumen
        </Tab>
      </TabList>

      <TabPanel value="summary">Isi ringkasan</TabPanel>

      <TabPanel value="profile">Isi biodata</TabPanel>
    </Tabs>
  );
};

describe("Navigation Components integration", () => {
  it("uses page-current semantics consistently", () => {
    render(
      <>
        <Breadcrumb>
          <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

          <BreadcrumbItem current>Detail Peserta</BreadcrumbItem>
        </Breadcrumb>

        <SideNavigation label="Navigasi internal">
          <SideNavigationItem href="/internal" active>
            Dashboard
          </SideNavigationItem>
        </SideNavigation>

        <TopNavigation label="Navigasi publik">
          <TopNavigationItem href="/" active>
            Beranda Publik
          </TopNavigationItem>
        </TopNavigation>

        <BottomNavigation label="Navigasi peserta">
          <BottomNavigationItem href="/peserta" icon={<Home />} active>
            Beranda Peserta
          </BottomNavigationItem>
        </BottomNavigation>
      </>,
    );

    expect(screen.getByText("Detail Peserta")).toHaveAttribute(
      "aria-current",
      "page",
    );

    expect(
      screen.getByRole("link", {
        name: "Dashboard",
      }),
    ).toHaveAttribute("aria-current", "page");

    expect(
      screen.getByRole("link", {
        name: "Beranda Publik",
      }),
    ).toHaveAttribute("aria-current", "page");

    expect(
      screen.getByRole("link", {
        name: "Beranda Peserta",
      }),
    ).toHaveAttribute("aria-current", "page");
  });

  it("distinguishes tab selection from current-page semantics", () => {
    render(<ControlledTabs />);

    const selectedTab = screen.getByRole("tab", {
      name: "Ringkasan",
    });

    expect(selectedTab).toHaveAttribute("aria-selected", "true");

    expect(selectedTab).not.toHaveAttribute("aria-current");
  });

  it("uses current-step semantics only for process navigation", () => {
    render(
      <Stepper label="Tahapan pendaftaran">
        <StepperItem step={1} status="completed" title="Pilih kegiatan" />

        <StepperItem
          step={2}
          status="current"
          title="Pembayaran"
          hideConnector
        />
      </Stepper>,
    );

    expect(
      screen.getByText("Pembayaran").closest(".stip-stepper-item__control"),
    ).toHaveAttribute("aria-current", "step");
  });

  it("keeps disabled navigation outside keyboard order", () => {
    render(
      <>
        <SideNavigation>
          <SideNavigationItem
            href="/seleksi"
            disabled
            accessibleLabel="Seleksi, belum tersedia"
          >
            Seleksi
          </SideNavigationItem>
        </SideNavigation>

        <TopNavigation>
          <TopNavigationItem
            href="/hasil"
            disabled
            accessibleLabel="Hasil, belum tersedia"
          >
            Hasil
          </TopNavigationItem>
        </TopNavigation>

        <BottomNavigation>
          <BottomNavigationItem
            href="/notifikasi"
            icon={<Bell />}
            disabled
            accessibleLabel="Notifikasi, belum tersedia"
          >
            Notifikasi
          </BottomNavigationItem>
        </BottomNavigation>
      </>,
    );

    [
      "Seleksi, belum tersedia",
      "Hasil, belum tersedia",
      "Notifikasi, belum tersedia",
    ].forEach((label) => {
      const item = screen.getByLabelText(label);

      expect(item).toHaveAttribute("aria-disabled", "true");

      expect(item).toHaveAttribute("tabindex", "-1");

      expect(item).not.toHaveAttribute("href");
    });
  });

  it("supports complete automatic tab keyboard navigation", () => {
    render(<ControlledTabs />);

    const summary = screen.getByRole("tab", {
      name: "Ringkasan",
    });

    const profile = screen.getByRole("tab", {
      name: "Biodata",
    });

    summary.focus();

    fireEvent.keyDown(summary, {
      key: "ArrowRight",
    });

    expect(profile).toHaveFocus();

    expect(profile).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(profile, {
      key: "Home",
    });

    expect(summary).toHaveFocus();
  });

  it("supports manual tab activation", () => {
    render(<ControlledTabs activationMode="manual" />);

    const summary = screen.getByRole("tab", {
      name: "Ringkasan",
    });

    const profile = screen.getByRole("tab", {
      name: "Biodata",
    });

    summary.focus();

    fireEvent.keyDown(summary, {
      key: "ArrowRight",
    });

    expect(profile).toHaveFocus();

    expect(profile).toHaveAttribute("aria-selected", "false");

    fireEvent.keyDown(profile, {
      key: "Enter",
    });

    expect(profile).toHaveAttribute("aria-selected", "true");
  });

  it("keeps static stepper items out of tab order", () => {
    render(
      <Stepper>
        <StepperItem step={1} title="Pilih kegiatan" />

        <StepperItem step={2} title="Pembayaran" hideConnector />
      </Stepper>,
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("supports optional interactive stepper items", () => {
    const onClick = vi.fn();

    render(
      <Stepper>
        <StepperItem
          step={1}
          status="completed"
          title="Pilih kegiatan"
          href="/pendaftaran/kegiatan"
        />

        <StepperItem
          step={2}
          status="current"
          title="Pembayaran"
          onClick={onClick}
          hideConnector
        />
      </Stepper>,
    );

    expect(
      screen.getByRole("link", {
        name: "Pilih kegiatan",
      }),
    ).toHaveAttribute("href", "/pendaftaran/kegiatan");

    fireEvent.click(
      screen.getByRole("button", {
        name: "Pembayaran",
      }),
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports button pagination without changing focus automatically", () => {
    const onPageChange = vi.fn();

    const { container } = render(
      <Pagination page={4} totalPages={12} onPageChange={onPageChange} />,
    );

    const desktop = container.querySelector(".stip-pagination__desktop");

    if (!(desktop instanceof HTMLElement)) {
      throw new Error("Desktop pagination was not rendered.");
    }

    const next = within(desktop).getByRole("button", {
      name: "Halaman berikutnya",
    });

    next.focus();

    fireEvent.click(next);

    expect(onPageChange).toHaveBeenCalledWith(5, expect.anything());

    expect(next).toHaveFocus();
  });

  it("uses native links for known destinations", () => {
    render(
      <>
        <BackNavigation href="/peserta">
          Kembali ke daftar peserta
        </BackNavigation>

        <Breadcrumb>
          <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

          <BreadcrumbItem current>Detail</BreadcrumbItem>
        </Breadcrumb>
      </>,
    );

    expect(
      screen.getByRole("link", {
        name: "Kembali ke daftar peserta",
      }),
    ).toHaveAttribute("href", "/peserta");

    expect(
      screen.getByRole("link", {
        name: "Beranda",
      }),
    ).toHaveAttribute("href", "/");
  });

  it("keeps navigation icons decorative when labels are visible", () => {
    const { container } = render(
      <>
        <SideNavigation>
          <SideNavigationItem href="/internal" icon={<LayoutDashboard />}>
            Dashboard
          </SideNavigationItem>
        </SideNavigation>

        <BottomNavigation>
          <BottomNavigationItem href="/" icon={<Home />}>
            Beranda
          </BottomNavigationItem>
        </BottomNavigation>
      </>,
    );

    const decorativeIcons = container.querySelectorAll('[aria-hidden="true"]');

    expect(decorativeIcons.length).toBeGreaterThanOrEqual(2);
  });

  it("renders a native skip link target", () => {
    render(
      <>
        <SkipLink>Lewati ke konten utama</SkipLink>

        <main id="main-content" tabIndex={-1}>
          Konten utama
        </main>
      </>,
    );

    expect(
      screen.getByRole("link", {
        name: "Lewati ke konten utama",
      }),
    ).toHaveAttribute("href", "#main-content");

    expect(screen.getByText("Konten utama")).toHaveAttribute("tabindex", "-1");
  });

  it("supports navigation composition across inherited densities", () => {
    const { container } = render(
      <>
        <div data-density="comfortable">
          <TopNavigation>
            <TopNavigationItem href="/">Beranda</TopNavigationItem>
          </TopNavigation>
        </div>

        <div data-density="default">
          <Breadcrumb>
            <BreadcrumbItem current>Detail</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div data-density="compact">
          <SideNavigation>
            <SideNavigationGroup label="Peserta">
              <SideNavigationItem href="/peserta">
                Daftar Peserta
              </SideNavigationItem>
            </SideNavigationGroup>
          </SideNavigation>
        </div>
      </>,
    );

    expect(
      container.querySelector(
        '[data-density="comfortable"] .stip-top-navigation',
      ),
    ).toBeInTheDocument();

    expect(
      container.querySelector('[data-density="default"] .stip-breadcrumb'),
    ).toBeInTheDocument();

    expect(
      container.querySelector('[data-density="compact"] .stip-side-navigation'),
    ).toBeInTheDocument();
  });
});
