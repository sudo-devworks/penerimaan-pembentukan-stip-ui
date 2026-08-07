import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, Home, LayoutDashboard, Route, UserRound } from "lucide-react";
import { useState } from "react";

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

const meta = {
  title: "Components/Navigation/Accessibility Review",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const KeyboardTabs = ({
  activationMode,
}: {
  activationMode: "automatic" | "manual";
}) => {
  const [value, setValue] = useState("summary");

  return (
    <Tabs
      value={value}
      onValueChange={setValue}
      activationMode={activationMode}
    >
      <TabList aria-label={`Tabs ${activationMode}`}>
        <Tab value="summary">Ringkasan</Tab>

        <Tab value="profile">Biodata</Tab>

        <Tab value="documents" disabled>
          Dokumen
        </Tab>

        <Tab value="history">Riwayat</Tab>
      </TabList>

      <TabPanel value="summary">Konten ringkasan.</TabPanel>

      <TabPanel value="profile">Konten biodata.</TabPanel>

      <TabPanel value="history">Konten riwayat.</TabPanel>
    </Tabs>
  );
};

export const KeyboardNavigation: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "40px",
      }}
    >
      <section>
        <h2>Automatic activation</h2>
        <KeyboardTabs activationMode="automatic" />
      </section>

      <section>
        <h2>Manual activation</h2>
        <KeyboardTabs activationMode="manual" />
      </section>

      <section>
        <h2>Pagination</h2>

        <Pagination page={4} totalPages={12} onPageChange={() => undefined} />
      </section>

      <section>
        <h2>Back navigation</h2>

        <BackNavigation href="/peserta">
          Kembali ke daftar peserta
        </BackNavigation>
      </section>
    </div>
  ),
};

export const CurrentSemantics: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "32px",
      }}
    >
      <Breadcrumb>
        <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

        <BreadcrumbItem current>Detail Peserta</BreadcrumbItem>
      </Breadcrumb>

      <Stepper orientation="vertical">
        <StepperItem step={1} status="completed" title="Pilih kegiatan" />

        <StepperItem
          step={2}
          status="current"
          title="Pembayaran"
          hideConnector
        />
      </Stepper>

      <TopNavigation label="Navigasi contoh">
        <TopNavigationItem href="/" active>
          Beranda
        </TopNavigationItem>

        <TopNavigationItem href="/kegiatan">Kegiatan</TopNavigationItem>
      </TopNavigation>
    </div>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "32px",
      }}
    >
      <SideNavigation>
        <SideNavigationGroup label="Proses">
          <SideNavigationItem href="/peserta" active>
            Daftar Peserta
          </SideNavigationItem>

          <SideNavigationItem
            href="/seleksi"
            disabled
            accessibleLabel="Seleksi, belum tersedia"
          >
            Seleksi
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>

      <Stepper orientation="vertical">
        <StepperItem step={1} status="completed" title="Pembayaran" />

        <StepperItem
          step={2}
          title="Seleksi"
          onClick={() => undefined}
          disabled
          hideConnector
        />
      </Stepper>

      <Pagination
        page={1}
        totalPages={4}
        onPageChange={() => undefined}
        disabled
      />
    </div>
  ),
};

export const SkipLinkReview: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <>
      <SkipLink>Lewati ke konten utama</SkipLink>

      <header
        style={{
          minHeight: "160px",
          padding: "24px",
        }}
      >
        Tekan Tab untuk menampilkan SkipLink.
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        style={{
          minHeight: "480px",
          padding: "24px",
        }}
      >
        <h1>Konten utama</h1>

        <p>Target SkipLink berada pada elemen ini.</p>
      </main>
    </>
  ),
};

export const MobileBottomNavigation: Story = {
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobilePrimary",
    },
  },
  render: () => (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px 16px 120px",
      }}
    >
      <h1>Portal Peserta</h1>

      <p>Gunakan Tab untuk memeriksa focus order pada bottom navigation.</p>

      <BottomNavigation>
        <BottomNavigationItem href="/" icon={<Home />} active>
          Beranda
        </BottomNavigationItem>

        <BottomNavigationItem href="/proses" icon={<Route />}>
          Proses
        </BottomNavigationItem>

        <BottomNavigationItem
          href="/notifikasi"
          icon={<Bell />}
          badge="3"
          accessibleLabel="Notifikasi, 3 belum dibaca"
        >
          Notifikasi
        </BottomNavigationItem>

        <BottomNavigationItem href="/profil" icon={<UserRound />}>
          Profil
        </BottomNavigationItem>
      </BottomNavigation>
    </div>
  ),
};

export const DensityReview: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "40px",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <section
          key={density}
          data-density={density}
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <strong>{density}</strong>

          <TopNavigation label={`Top navigation ${density}`}>
            <TopNavigationItem href="/" icon={<Home />} active>
              Beranda
            </TopNavigationItem>

            <TopNavigationItem href="/kegiatan">Kegiatan</TopNavigationItem>
          </TopNavigation>

          <Breadcrumb label={`Breadcrumb ${density}`}>
            <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

            <BreadcrumbItem current>Detail</BreadcrumbItem>
          </Breadcrumb>

          <SideNavigation label={`Side navigation ${density}`}>
            <SideNavigationGroup label="Utama">
              <SideNavigationItem
                href="/internal"
                icon={<LayoutDashboard />}
                active
              >
                Dashboard
              </SideNavigationItem>
            </SideNavigationGroup>
          </SideNavigation>
        </section>
      ))}
    </div>
  ),
};
