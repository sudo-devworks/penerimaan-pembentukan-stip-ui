import { BellRing } from "lucide-react";

import { PublicAnnouncementCard } from "../../features/public/announcement";
import { publicAnnouncements } from "../../features/public/announcement";

import "./PublicAnnouncementsPage.css";

export function PublicAnnouncementsPage() {
  return (
    <div className="public-announcements-page">
      <header className="public-information-hero">
        <div className="public-shell-container public-information-hero__inner">
          <p>Pengumuman resmi</p>
          <h1>Informasi terbaru proses penerimaan</h1>
          <span>
            Pantau informasi pendaftaran, administrasi, pembayaran, jadwal,
            dan hasil seleksi melalui kanal resmi STIP.
          </span>
        </div>
      </header>

      <section
        className="public-announcements-page__notice"
        aria-labelledby="announcement-notice-title"
      >
        <div className="public-shell-container public-announcements-page__notice-inner">
          <BellRing aria-hidden="true" />

          <div>
            <h2 id="announcement-notice-title">
              Selalu periksa tanggal penerbitan
            </h2>
            <p>
              Gunakan pengumuman terbaru apabila terdapat perubahan informasi
              atau jadwal kegiatan.
            </p>
          </div>
        </div>
      </section>

      <section
        className="public-announcements-page__content"
        aria-labelledby="announcement-list-title"
      >
        <div className="public-shell-container">
          <div className="public-information-heading">
            <p>Daftar informasi</p>
            <h2 id="announcement-list-title">Pengumuman penerimaan</h2>
          </div>

          <div className="public-announcements-page__grid">
            {publicAnnouncements.map((announcement) => (
              <PublicAnnouncementCard
                key={announcement.slug}
                announcement={announcement}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}