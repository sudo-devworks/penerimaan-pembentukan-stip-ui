import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PublicLayout } from "../layouts/public";
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

export function PublicRouteTree() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<PublicHomePage />} />

        <Route path="kegiatan" element={<PublicActivitiesPage />} />

        <Route
          path="kegiatan/:activitySlug"
          element={<PublicActivityDetailPage />}
        />

        <Route path="program" element={<PublicProgramsPage />} />

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

        <Route path="biaya" element={<PublicFeesPage />} />

        <Route
          path="pengumuman"
          element={<PublicAnnouncementsPage />}
        />

        <Route
          path="pengumuman/:announcementSlug"
          element={<PublicAnnouncementDetailPage />}
        />

        <Route path="faq" element={<PublicFaqPage />} />

        <Route path="bantuan" element={<PublicHelpPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <PublicRouteTree />
    </BrowserRouter>
  );
}