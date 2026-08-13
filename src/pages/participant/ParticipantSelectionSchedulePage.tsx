import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Stethoscope,
  UserRound,
} from "lucide-react";

import "./ParticipantPages.css";

const schedules = [
  {
    title: "Wawancara",
    date: "15 Juni 2026",
    time: "09:00–09:30 WIB",
    location: "Gedung Seleksi STIP",
    status: "scheduled",
    icon: <UserRound />,
  },
  {
    title: "Pemeriksaan Kesehatan",
    date: "17 Juni 2026",
    time: "08:00 WIB",
    location: "Unit Kesehatan STIP",
    status: "upcoming",
    icon: <Stethoscope />,
  },
  {
    title: "Seleksi Administrasi",
    date: "10 Juni 2026",
    time: "Selesai",
    location: "Verifikasi Sistem",
    status: "completed",
    icon: <CheckCircle2 />,
  },
] as const;

export function ParticipantSelectionSchedulePage() {
  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Jadwal Seleksi
          </p>

          <h1>Agenda seleksi Anda</h1>

          <p>
            Pastikan Anda hadir sesuai tanggal, waktu, dan lokasi
            yang telah ditentukan.
          </p>
        </div>

        <CalendarDays aria-hidden="true" />
      </header>

      <section className="participant-selection-schedule">
        {schedules.map((item) => (
          <article
            key={item.title}
            className="participant-selection-schedule__item"
            data-status={item.status}
          >
            <span className="participant-selection-schedule__icon">
              {item.icon}
            </span>

            <div>
              <div className="participant-selection-schedule__heading">
                <h2>{item.title}</h2>

                <span
                  className={`participant-status participant-status--${item.status}`}
                >
                  {item.status === "completed"
                    ? "Selesai"
                    : item.status === "scheduled"
                      ? "Terjadwal"
                      : "Akan Datang"}
                </span>
              </div>

              <div className="participant-selection-schedule__meta">
                <span>
                  <CalendarDays aria-hidden="true" />
                  {item.date}
                </span>

                <span>
                  <Clock3 aria-hidden="true" />
                  {item.time}
                </span>

                <span>
                  <MapPin aria-hidden="true" />
                  {item.location}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}