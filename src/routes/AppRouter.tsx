import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import {
  InternalAuthLayout,
  InternalLayout,
} from "../layouts/internal";
import {
  ParticipantAuthLayout,
  ParticipantLayout,
} from "../layouts/participant";
import { PublicLayout } from "../layouts/public";

import {
  InternalActivitiesPage,
  InternalDashboardPage,
  InternalLoginPage,
  InternalPartnersPage,
  InternalParticipantsPage,
  InternalPaymentsPage,
  InternalProgramsPage,
  InternalSelectionPage,
  InternalVerificationPage,
  InternalWavesPage,
  InternalAuditPage,
  InternalReportsPage,
} from "../pages/internal";

import {
  ParticipantBiodataPage,
  ParticipantDashboardPage,
  ParticipantDocumentsPage,
  ParticipantExamCardPage,
  ParticipantHelpPage,
  ParticipantHistoryPage,
  ParticipantLoginPage,
  ParticipantNotificationsPage,
  ParticipantPaymentPage,
  ParticipantProcessPage,
  ParticipantProfilePage,
  ParticipantRegisterPage,
  ParticipantSelectionPage,
  ParticipantSelectionResultPage,
  ParticipantSelectionSchedulePage,
} from "../pages/participant";

import {
  NotFoundPage,
  PublicActivitiesPage,
  PublicActivityDetailPage,
  PublicAnnouncementDetailPage,
  PublicAnnouncementsPage,
  PublicFaqPage,
  PublicFeesPage,
  PublicHelpPage,
  PublicHomePage,
  PublicProgramDetailPage,
  PublicProgramsPage,
  PublicRegistrationFlowPage,
  PublicRequirementsPage,
  PublicSelectionSchedulePage,
} from "../pages/public";

function ParticipantPlaceholderPage() {
  return (
    <div className="participant-placeholder">
      <p className="participant-placeholder__eyebrow">
        Portal Peserta
      </p>

      <h1>Halaman sedang disiapkan</h1>

      <p>
        Halaman ini akan dilengkapi pada batch Portal Peserta
        berikutnya.
      </p>
    </div>
  );
}

function InternalPlaceholderPage() {
  return (
    <div
      style={{
        padding: "2rem",
        border: "1px solid var(--color-border-subtle)",
        borderRadius: "0.75rem",
        background: "var(--color-surface-default)",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#a97f28",
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        Portal Internal
      </p>

      <h1>Workspace sedang disiapkan</h1>

      <p>
        Modul ini akan dibangun pada batch Portal Internal
        berikutnya.
      </p>
    </div>
  );
}

function createInternalRouteElement() {
  return (
    <Route path="internal">
      <Route element={<InternalAuthLayout />}>
        <Route
          path="masuk"
          element={<InternalLoginPage />}
        />
      </Route>

      <Route element={<InternalLayout />}>
        <Route
          index
          element={<InternalDashboardPage />}
        />

        <Route
          path="mitra"
          element={<InternalPartnersPage />}
        />

        <Route
          path="kegiatan"
          element={<InternalActivitiesPage />}
        />

        <Route
          path="gelombang"
          element={<InternalWavesPage />}
        />

        <Route
          path="program"
          element={<InternalProgramsPage />}
        />

        <Route
          path="peserta"
          element={<InternalParticipantsPage />}
        />

        <Route
          path="verifikasi"
          element={<InternalVerificationPage />}
        />

        <Route
          path="pembayaran"
          element={<InternalPaymentsPage />}
        />

        <Route
          path="seleksi"
          element={<InternalSelectionPage />}
        />

        <Route
          path="laporan"
          element={<InternalReportsPage />}
        />

        <Route
          path="audit"
          element={<InternalAuditPage />}
        />

        <Route
          path="*"
          element={<InternalPlaceholderPage />}
        />
      </Route>
    </Route>
  );
}

function createPublicRouteElement() {
  return (
    <Route element={<PublicLayout />}>
      <Route index element={<PublicHomePage />} />

      <Route
        path="kegiatan"
        element={<PublicActivitiesPage />}
      />

      <Route
        path="kegiatan/:activitySlug"
        element={<PublicActivityDetailPage />}
      />

      <Route
        path="program"
        element={<PublicProgramsPage />}
      />

      <Route
        path="program/:programSlug"
        element={<PublicProgramDetailPage />}
      />

      <Route
        path="persyaratan"
        element={<PublicRequirementsPage />}
      />

      <Route
        path="alur-pendaftaran"
        element={<PublicRegistrationFlowPage />}
      />

      <Route
        path="jadwal-seleksi"
        element={<PublicSelectionSchedulePage />}
      />

      <Route
        path="biaya"
        element={<PublicFeesPage />}
      />

      <Route
        path="pengumuman"
        element={<PublicAnnouncementsPage />}
      />

      <Route
        path="pengumuman/:announcementSlug"
        element={<PublicAnnouncementDetailPage />}
      />

      <Route
        path="faq"
        element={<PublicFaqPage />}
      />

      <Route
        path="bantuan"
        element={<PublicHelpPage />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  );
}

function createParticipantRouteElement() {
  return (
    <Route path="portal">
      <Route element={<ParticipantAuthLayout />}>
        <Route
          path="masuk"
          element={<ParticipantLoginPage />}
        />

        <Route
          path="daftar"
          element={<ParticipantRegisterPage />}
        />

        <Route
          path="verifikasi-email"
          element={<ParticipantPlaceholderPage />}
        />

        <Route
          path="lupa-password"
          element={<ParticipantPlaceholderPage />}
        />

        <Route
          path="reset-password"
          element={<ParticipantPlaceholderPage />}
        />
      </Route>

      <Route element={<ParticipantLayout />}>
        <Route
          index
          element={<ParticipantDashboardPage />}
        />

        <Route
          path="proses"
          element={<ParticipantProcessPage />}
        />

        <Route
          path="pendaftaran/*"
          element={<ParticipantPlaceholderPage />}
        />

        <Route
          path="pembayaran"
          element={<ParticipantPaymentPage />}
        />

        <Route
          path="biodata"
          element={<ParticipantBiodataPage />}
        />

        <Route
          path="dokumen"
          element={<ParticipantDocumentsPage />}
        />

        <Route
          path="administrasi"
          element={<ParticipantPlaceholderPage />}
        />

        <Route
          path="seleksi"
          element={<ParticipantSelectionPage />}
        />

        <Route
          path="seleksi/hasil"
          element={<ParticipantSelectionResultPage />}
        />

        <Route
          path="seleksi/kartu-ujian"
          element={<ParticipantExamCardPage />}
        />

        <Route
          path="seleksi/jadwal"
          element={<ParticipantSelectionSchedulePage />}
        />

        <Route
          path="notifikasi"
          element={<ParticipantNotificationsPage />}
        />

        <Route
          path="bantuan"
          element={<ParticipantHelpPage />}
        />

        <Route
          path="profil"
          element={<ParticipantProfilePage />}
        />

        <Route
          path="riwayat"
          element={<ParticipantHistoryPage />}
        />

        <Route
          path="pengunduran-diri"
          element={<ParticipantPlaceholderPage />}
        />

        <Route
          path="refund"
          element={<ParticipantPlaceholderPage />}
        />

        <Route
          path="*"
          element={<ParticipantPlaceholderPage />}
        />
      </Route>
    </Route>
  );
}

export function PublicRouteTree() {
  return (
    <Routes>
      {createPublicRouteElement()}
    </Routes>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {createInternalRouteElement()}
        {createParticipantRouteElement()}
        {createPublicRouteElement()}
      </Routes>
    </BrowserRouter>
  );
}