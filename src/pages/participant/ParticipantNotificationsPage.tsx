import {
  Bell,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  Info,
} from "lucide-react";

import "./ParticipantPages.css";

const notifications = [
  {
    title: "Jadwal wawancara telah diterbitkan",
    description:
      "Wawancara Anda dijadwalkan pada 15 Juni 2026 pukul 09:00 WIB.",
    time: "10 menit yang lalu",
    type: "info",
    icon: <CalendarDays />,
    unread: true,
  },
  {
    title: "Dokumen Pas Foto diterima",
    description:
      "Dokumen terbaru Anda telah selesai diverifikasi dan dinyatakan diterima.",
    time: "2 jam yang lalu",
    type: "success",
    icon: <FileCheck2 />,
    unread: true,
  },
  {
    title: "Pembayaran berhasil diverifikasi",
    description:
      "Pembayaran formulir telah diterima dan status pendaftaran diperbarui.",
    time: "2 hari yang lalu",
    type: "success",
    icon: <CheckCircle2 />,
    unread: false,
  },
  {
    title: "Informasi proses penerimaan",
    description:
      "Pastikan seluruh data dan dokumen tetap sesuai dengan ketentuan kegiatan.",
    time: "4 hari yang lalu",
    type: "neutral",
    icon: <Info />,
    unread: false,
  },
];

export function ParticipantNotificationsPage() {
  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Notifikasi
          </p>

          <h1>Pembaruan untuk Anda</h1>

          <p>
            Informasi penting terkait status, jadwal, pembayaran,
            dokumen, dan tahapan seleksi akan muncul di sini.
          </p>
        </div>

        <div className="participant-page-header__meta">
          <span>Belum dibaca</span>
          <strong>2 notifikasi</strong>
        </div>
      </header>

      <section className="participant-notifications-page">
        <div className="participant-section-heading">
          <div>
            <p>Terbaru</p>
            <h2>Semua notifikasi</h2>
          </div>

          <Bell aria-hidden="true" />
        </div>

        <div className="participant-notifications-page__list">
          {notifications.map((notification) => (
            <article
              key={notification.title}
              className="participant-notification-card"
              data-unread={notification.unread || undefined}
              data-type={notification.type}
            >
              <span className="participant-notification-card__icon">
                {notification.icon}
              </span>

              <div>
                <div className="participant-notification-card__heading">
                  <h3>{notification.title}</h3>

                  {notification.unread && (
                    <span aria-label="Belum dibaca" />
                  )}
                </div>

                <p>{notification.description}</p>
                <time>{notification.time}</time>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}