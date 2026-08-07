import {
  Bell,
  Building2,
  CalendarDays,
  CircleHelp,
  ClipboardCheck,
  Home,
  LayoutDashboard,
  Route,
  UserRound,
  UsersRound,
} from "lucide-react";
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
} from "../../../components/navigation";

import "./NavigationComponentsCrossPortal.css";

const ParticipantTabs = () => {
  const [value, setValue] = useState("summary");

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabList aria-label="Detail proses peserta">
        <Tab value="summary">Ringkasan</Tab>

        <Tab value="documents">Dokumen</Tab>

        <Tab value="payment">Pembayaran</Tab>
      </TabList>

      <TabPanel value="summary">Informasi utama proses pendaftaran.</TabPanel>

      <TabPanel value="documents">Dokumen dan status verifikasi.</TabPanel>

      <TabPanel value="payment">Tagihan dan status pembayaran.</TabPanel>
    </Tabs>
  );
};

export const NavigationComponentsCrossPortal = () => {
  const [internalPage, setInternalPage] = useState(4);

  return (
    <>
      <SkipLink>Lewati ke konten utama</SkipLink>

      <main id="main-content" tabIndex={-1} className="navigation-cross-portal">
        <header className="navigation-cross-portal__header">
          <p className="navigation-cross-portal__eyebrow">
            Penerimaan Pembentukan STIP
          </p>

          <h1 className="navigation-cross-portal__title">
            Navigation Components Cross-Portal
          </h1>

          <p className="navigation-cross-portal__intro">
            Satu navigation system digunakan dengan composition, density, dan
            placement yang berbeda.
          </p>
        </header>

        <section
          className="navigation-cross-portal__section"
          aria-labelledby="public-navigation-heading"
        >
          <div className="navigation-cross-portal__section-heading">
            <p className="navigation-cross-portal__area-label">
              Public Website
            </p>

            <h2 id="public-navigation-heading">
              Institutional Editorial Maritime
            </h2>

            <p>
              Top navigation, breadcrumb, dan back navigation untuk struktur
              informasi publik.
            </p>
          </div>

          <div
            className="navigation-cross-portal__public"
            data-density="comfortable"
          >
            <TopNavigation label="Navigasi utama website">
              <TopNavigationItem href="/" icon={<Home />} active>
                Beranda
              </TopNavigationItem>

              <TopNavigationItem href="/kegiatan">Kegiatan</TopNavigationItem>

              <TopNavigationItem href="/panduan">Panduan</TopNavigationItem>

              <TopNavigationItem href="/pengumuman">
                Pengumuman
              </TopNavigationItem>

              <TopNavigationItem href="/bantuan">Bantuan</TopNavigationItem>
            </TopNavigation>

            <Breadcrumb>
              <BreadcrumbItem href="/">Beranda</BreadcrumbItem>

              <BreadcrumbItem href="/kegiatan">Kegiatan</BreadcrumbItem>

              <BreadcrumbItem current>
                Diklat Pembentukan CMA CGM
              </BreadcrumbItem>
            </Breadcrumb>

            <BackNavigation href="/kegiatan">
              Kembali ke daftar kegiatan
            </BackNavigation>
          </div>
        </section>

        <section
          className="navigation-cross-portal__section"
          aria-labelledby="participant-navigation-heading"
        >
          <div className="navigation-cross-portal__section-heading">
            <p className="navigation-cross-portal__area-label">
              Portal Peserta
            </p>

            <h2 id="participant-navigation-heading">Guided Personal Process</h2>

            <p>
              Stepper, tabs, breadcrumb, dan bottom navigation mendukung
              perjalanan peserta.
            </p>
          </div>

          <div
            className="navigation-cross-portal__participant"
            data-density="comfortable"
          >
            <Breadcrumb label="Posisi proses peserta">
              <BreadcrumbItem href="/peserta">Beranda</BreadcrumbItem>

              <BreadcrumbItem href="/peserta/proses">Proses</BreadcrumbItem>

              <BreadcrumbItem current>Lengkapi Biodata</BreadcrumbItem>
            </Breadcrumb>

            <Stepper label="Tahapan pendaftaran">
              <StepperItem step={1} status="completed" title="Pilih kegiatan" />

              <StepperItem step={2} status="completed" title="Pembayaran" />

              <StepperItem step={3} status="current" title="Biodata" />

              <StepperItem step={4} title="Dokumen" hideConnector />
            </Stepper>

            <ParticipantTabs />

            <div className="navigation-cross-portal__mobile-preview">
              <BottomNavigation>
                <BottomNavigationItem href="/peserta" icon={<Home />} active>
                  Beranda
                </BottomNavigationItem>

                <BottomNavigationItem href="/peserta/proses" icon={<Route />}>
                  Proses
                </BottomNavigationItem>

                <BottomNavigationItem
                  href="/peserta/notifikasi"
                  icon={<Bell />}
                  badge="3"
                  accessibleLabel="Notifikasi, 3 belum dibaca"
                >
                  Notifikasi
                </BottomNavigationItem>

                <BottomNavigationItem
                  href="/peserta/bantuan"
                  icon={<CircleHelp />}
                >
                  Bantuan
                </BottomNavigationItem>

                <BottomNavigationItem
                  href="/peserta/profil"
                  icon={<UserRound />}
                >
                  Profil
                </BottomNavigationItem>
              </BottomNavigation>
            </div>
          </div>
        </section>

        <section
          className="navigation-cross-portal__section"
          aria-labelledby="internal-navigation-heading"
        >
          <div className="navigation-cross-portal__section-heading">
            <p className="navigation-cross-portal__area-label">
              Portal Internal
            </p>

            <h2 id="internal-navigation-heading">
              Operational Structured Data
            </h2>

            <p>
              Side navigation, tabs, breadcrumb, dan pagination untuk workspace
              data operasional.
            </p>
          </div>

          <div
            className="navigation-cross-portal__internal"
            data-density="default"
          >
            <SideNavigation label="Navigasi portal internal">
              <SideNavigationGroup label="Utama">
                <SideNavigationItem
                  href="/internal"
                  icon={<LayoutDashboard />}
                  active
                >
                  Dashboard
                </SideNavigationItem>
              </SideNavigationGroup>

              <SideNavigationGroup label="Konfigurasi">
                <SideNavigationItem href="/internal/mitra" icon={<Building2 />}>
                  Mitra
                </SideNavigationItem>

                <SideNavigationItem
                  href="/internal/kegiatan"
                  icon={<CalendarDays />}
                >
                  Kegiatan
                </SideNavigationItem>
              </SideNavigationGroup>

              <SideNavigationGroup label="Peserta">
                <SideNavigationItem
                  href="/internal/peserta"
                  icon={<UsersRound />}
                  badge="128"
                  accessibleLabel="Daftar Peserta, 128 peserta"
                >
                  Daftar Peserta
                </SideNavigationItem>

                <SideNavigationItem
                  href="/internal/verifikasi"
                  icon={<ClipboardCheck />}
                  badge="12"
                  accessibleLabel="Verifikasi Administrasi, 12 tugas"
                >
                  Verifikasi Administrasi
                </SideNavigationItem>
              </SideNavigationGroup>
            </SideNavigation>

            <div className="navigation-cross-portal__internal-content">
              <Breadcrumb label="Lokasi portal internal">
                <BreadcrumbItem href="/internal">Dashboard</BreadcrumbItem>

                <BreadcrumbItem href="/internal/peserta">
                  Peserta
                </BreadcrumbItem>

                <BreadcrumbItem current>Daftar Peserta</BreadcrumbItem>
              </Breadcrumb>

              <ParticipantTabs />

              <Pagination
                page={internalPage}
                totalPages={24}
                onPageChange={(nextPage) => setInternalPage(nextPage)}
                label="Navigasi halaman peserta"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

NavigationComponentsCrossPortal.displayName = "NavigationComponentsCrossPortal";
