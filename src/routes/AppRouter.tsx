import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import {
  ParticipantAuthLayout,
  ParticipantLayout,
} from "../layouts/participant";
import { PublicLayout } from "../layouts/public";

import {
  ParticipantBiodataPage,
  ParticipantDashboardPage,
  ParticipantDocumentsPage,
  ParticipantHistoryPage,
  ParticipantLoginPage,
  ParticipantNotificationsPage,
  ParticipantPaymentPage,
  ParticipantProcessPage,
  ParticipantProfilePage,
  ParticipantSelectionPage,
  ParticipantSelectionResultPage,
  ParticipantRegisterPage,
  ParticipantExamCardPage,
  ParticipantSelectionSchedulePage,
  ParticipantHelpPage,
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
        {createParticipantRouteElement()}
        {createPublicRouteElement()}
      </Routes>
    </BrowserRouter>
  );
}