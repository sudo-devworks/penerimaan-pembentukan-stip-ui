import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarDays,
  ClipboardCheck,
  FileText,
  ListChecks,
  RefreshCw,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
} from "../../components";

import { internalRoutes } from "../../routes/internalRoutes";

import "./InternalPages.css";

const stats = [
  {
    label: "Total Peserta",
    value: "1.248",
    helper: "12,5% dari minggu lalu",
    type: "primary",
    icon: <UsersRound />,
  },
  {
    label: "Verifikasi Menunggu",
    value: "312",
    helper: "4,3% dari minggu lalu",
    type: "warning",
    icon: <ClipboardCheck />,
  },
  {
    label: "Pembayaran Masuk",
    value: "876",
    helper: "8,7% dari minggu lalu",
    type: "success",
    icon: <Banknote />,
  },
  {
    label: "Seleksi Berjalan",
    value: "3",
    helper: "Program aktif",
    type: "info",
    icon: <ListChecks />,
  },
] as const;

const attentionItems = [
  {
    title: "312 peserta menunggu verifikasi dokumen",
    badge: "Prioritas Tinggi",
    state: "danger",
  },
  {
    title: "57 pembayaran terkonfirmasi otomatis",
    badge: "Baru",
    state: "info",
  },
  {
    title: "19 peserta belum memilih gelombang",
    badge: "Perlu Tindak Lanjut",
    state: "warning",
  },
  {
    title: "9 pembayaran gagal karena batas waktu habis",
    badge: "Perlu Tindak Lanjut",
    state: "warning",
  },
  {
    title: "Laporan harian verifikasi belum dibuat",
    badge: "Buat Laporan",
    state: "info",
  },
] as const;

const agenda = [
  {
    date: "24",
    month: "MEI",
    title: "Batas akhir verifikasi Gel. II",
    meta: "Diklat Pembentukan · CMA CGM",
    time: "23:59 WIB",
  },
  {
    date: "25",
    month: "MEI",
    title: "Tes Akademik",
    meta: "Diklat Pembentukan · Gel. II",
    time: "08:00 WIB",
  },
  {
    date: "27",
    month: "MEI",
    title: "Wawancara",
    meta: "Diklat Pembentukan · Gel. II",
    time: "09:00 WIB",
  },
  {
    date: "31",
    month: "MEI",
    title: "Pengumuman Hasil Seleksi Tahap I",
    meta: "Diklat Pembentukan · Gel. II",
    time: "16:00 WIB",
  },
];

export function InternalDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="internal-dashboard">
      <header className="internal-page-header">
        <div>
          <p className="internal-page-header__eyebrow">
            Operasional
          </p>

          <h1>Dashboard Operasional</h1>

          <p>
            Ringkasan kegiatan penerimaan pada konteks aktif.
          </p>
        </div>

        <div className="internal-page-header__actions">
          <span>
            Terakhir diperbarui: 23 Mei 2026 · 09:30 WIB
          </span>

          <Button
            variant="outline"
            size="sm"
            leadingIcon={<RefreshCw />}
          >
            Perbarui
          </Button>
        </div>
      </header>

      <section
        className="internal-stat-grid"
        aria-label="Ringkasan statistik"
      >
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="internal-stat-card"
            data-type={stat.type}
          >
            <span className="internal-stat-card__icon">
              {stat.icon}
            </span>

            <div>
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
              <span>{stat.helper}</span>
            </div>
          </article>
        ))}
      </section>

      <div className="internal-dashboard__operations">
        <section className="internal-dashboard-panel">
          <div className="internal-panel-heading">
            <div>
              <p>Perhatian</p>
              <h2>Daftar Tugas</h2>
            </div>

            <ActionLink
              href={internalRoutes.verification}
              trailingIcon={<ArrowRight />}
              onClick={(event) => {
                event.preventDefault();
                navigate(internalRoutes.verification);
              }}
            >
              Lihat semua
            </ActionLink>
          </div>

          <div className="internal-attention-list">
            {attentionItems.map((item) => (
              <div
                key={item.title}
                data-state={item.state}
              >
                <FileText aria-hidden="true" />

                <span>{item.title}</span>

                <strong>{item.badge}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="internal-dashboard-panel">
          <div className="internal-panel-heading">
            <div>
              <p>Jadwal</p>
              <h2>Agenda Mendatang</h2>
            </div>

            <CalendarDays aria-hidden="true" />
          </div>

          <div className="internal-agenda-list">
            {agenda.map((item) => (
              <div key={`${item.date}-${item.title}`}>
                <span className="internal-agenda-list__date">
                  <strong>{item.date}</strong>
                  <small>{item.month}</small>
                </span>

                <span>
                  <strong>{item.title}</strong>
                  <small>{item.meta}</small>
                </span>

                <time>{item.time}</time>
              </div>
            ))}
          </div>
        </section>

        <section className="internal-dashboard-panel internal-dashboard-panel--selection">
          <div className="internal-panel-heading">
            <div>
              <p>Seleksi</p>
              <h2>Progress Tahap Seleksi</h2>
            </div>

            <ActionLink
              href={internalRoutes.selection}
              trailingIcon={<ArrowRight />}
              onClick={(event) => {
                event.preventDefault();
                navigate(internalRoutes.selection);
              }}
            >
              Lihat detail
            </ActionLink>
          </div>

          <ol className="internal-selection-progress">
            <li data-state="completed">
              <span>1</span>
              <strong>Pendaftaran</strong>
              <small>1.248</small>
            </li>

            <li data-state="completed">
              <span>2</span>
              <strong>Verifikasi</strong>
              <small>876</small>
            </li>

            <li data-state="completed">
              <span>3</span>
              <strong>Pembayaran</strong>
              <small>760</small>
            </li>

            <li data-state="current">
              <span>4</span>
              <strong>Seleksi</strong>
              <small>312</small>
            </li>

            <li data-state="upcoming">
              <BadgeCheck aria-hidden="true" />
              <strong>Selesai</strong>
              <small>86</small>
            </li>
          </ol>
        </section>

        <section className="internal-dashboard-panel internal-dashboard-panel--quick">
          <div className="internal-panel-heading">
            <div>
              <p>Shortcut</p>
              <h2>Aksi Cepat</h2>
            </div>
          </div>

          <div className="internal-quick-actions">
            <button
              type="button"
              onClick={() => navigate(internalRoutes.verification)}
            >
              <ClipboardCheck />
              <span>Verifikasi Dokumen</span>
            </button>

            <button
              type="button"
              onClick={() => navigate(internalRoutes.payments)}
            >
              <Banknote />
              <span>Konfirmasi Pembayaran</span>
            </button>

            <button
              type="button"
              onClick={() => navigate(internalRoutes.waves)}
            >
              <CalendarDays />
              <span>Kelola Gelombang</span>
            </button>

            <button
              type="button"
              onClick={() => navigate(internalRoutes.reports)}
            >
              <FileText />
              <span>Lihat Laporan</span>
            </button>
          </div>
        </section>
      </div>

      <section className="internal-dashboard-panel internal-program-summary">
        <div className="internal-panel-heading">
          <div>
            <p>Ringkasan</p>
            <h2>Ringkasan per Program</h2>
          </div>

          <ActionLink
            href={internalRoutes.reports}
            trailingIcon={<ArrowRight />}
            onClick={(event) => {
              event.preventDefault();
              navigate(internalRoutes.reports);
            }}
          >
            Lihat laporan
          </ActionLink>
        </div>

        <div className="internal-program-summary__table-wrap">
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Total Peserta</th>
                <th>Verifikasi</th>
                <th>Pembayaran Masuk</th>
                <th>Seleksi Berjalan</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Diklat Pembentukan Nautika</td>
                <td>512</td>
                <td>342 (66%)</td>
                <td>298 (58%)</td>
                <td>2 Program</td>
              </tr>

              <tr>
                <td>Diklat Pembentukan Teknika</td>
                <td>436</td>
                <td>289 (66%)</td>
                <td>246 (56%)</td>
                <td>1 Program</td>
              </tr>

              <tr>
                <td>Electro-Technical Officer</td>
                <td>185</td>
                <td>122 (66%)</td>
                <td>108 (58%)</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}