import {
  Anchor,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  CreditCard,
  FileText,
  HelpCircle,
  Home,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  ShipWheel,
  User,
  Users,
} from "lucide-react";

function PublicWebsiteExample() {
  return (
    <section
      className="cross-portal-example"
      data-portal="public"
      data-density="comfortable"
      aria-labelledby="public-example-title"
    >
      <header className="cross-portal-example__heading">
        <div>
          <p className="cross-portal-example__eyebrow">Public Website</p>

          <h2 id="public-example-title" className="cross-portal-example__title">
            Institutional Editorial Maritime
          </h2>

          <p className="cross-portal-example__description">
            Informasi publik yang resmi, mudah dipahami, lapang, dan tidak
            mencampurkan proses personal peserta.
          </p>
        </div>

        <span className="cross-portal-example__density-label">Comfortable</span>
      </header>

      <div className="cross-portal-public">
        <header className="cross-portal-public__header">
          <a
            href="#"
            className="cross-portal-public__brand"
            aria-label="Penerimaan Pembentukan STIP"
          >
            <span
              className="cross-portal-public__brand-icon"
              aria-hidden="true"
            >
              <ShipWheel size={22} />
            </span>

            <span>
              <strong>Penerimaan Pembentukan</strong>
              <small>STIP Jakarta</small>
            </span>
          </a>

          <nav
            className="cross-portal-public__navigation"
            aria-label="Navigasi utama"
          >
            <a href="#">Beranda</a>
            <a href="#">Kegiatan</a>
            <a href="#">Program</a>
            <a href="#">Jadwal</a>
            <a href="#">Bantuan</a>
          </nav>

          <button
            type="button"
            className="cross-portal-public__menu"
            aria-label="Buka navigasi"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="cross-portal-public__hero">
          <div className="cross-portal-public__hero-content">
            <p className="cross-portal-public__hero-label">
              Diklat Pembentukan 2026
            </p>

            <h3 className="cross-portal-public__hero-title">
              Wujudkan Karier Maritim Bersama Sekolah Tinggi Ilmu Pelayaran
            </h3>

            <p className="cross-portal-public__hero-description">
              Informasi pendaftaran Diklat Pembentukan kerja sama STIP dengan
              CMA CGM untuk program Nautika, Teknika, dan Electro-Technical
              Officer.
            </p>

            <div className="cross-portal-public__actions">
              <button
                type="button"
                className="cross-portal-button cross-portal-button--primary"
              >
                Daftar Sekarang
                <ChevronRight size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="cross-portal-button cross-portal-button--secondary"
              >
                Lihat Persyaratan
              </button>
            </div>
          </div>

          <aside className="cross-portal-public__feature">
            <Anchor size={28} aria-hidden="true" />

            <p>Program tersedia</p>

            <strong>Nautika, Teknika, dan Electro-Technical Officer</strong>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ParticipantPortalExample() {
  return (
    <section
      className="cross-portal-example"
      data-portal="participant"
      data-density="comfortable"
      aria-labelledby="participant-example-title"
    >
      <header className="cross-portal-example__heading">
        <div>
          <p className="cross-portal-example__eyebrow">Portal Peserta</p>

          <h2
            id="participant-example-title"
            className="cross-portal-example__title"
          >
            Guided Personal Process
          </h2>

          <p className="cross-portal-example__description">
            Satu primary task, status proses yang jelas, dan navigasi
            mobile-first.
          </p>
        </div>

        <span className="cross-portal-example__density-label">Comfortable</span>
      </header>

      <div className="cross-portal-participant">
        <header className="cross-portal-participant__header">
          <div>
            <small>Portal Penerimaan STIP</small>
            <strong>Selamat datang, Ahmad</strong>
          </div>

          <button
            type="button"
            className="cross-portal-icon-button"
            aria-label="Buka notifikasi"
          >
            <Bell size={20} aria-hidden="true" />
          </button>
        </header>

        <main className="cross-portal-participant__content">
          <section className="cross-portal-participant__identity">
            <div>
              <p>Nomor Pendaftaran</p>
              <strong>PPSTIP-2026-000184</strong>
            </div>

            <span className="cross-portal-status cross-portal-status--warning">
              <Clock3 size={16} aria-hidden="true" />
              Menunggu Pembayaran
            </span>
          </section>

          <section className="cross-portal-participant__task">
            <div
              className="cross-portal-participant__task-icon"
              aria-hidden="true"
            >
              <CreditCard size={24} />
            </div>

            <div className="cross-portal-participant__task-content">
              <p className="cross-portal-participant__task-label">
                Tugas utama
              </p>

              <h3>Selesaikan pembayaran formulir</h3>

              <p>
                Bayar sebelum Jumat, 15 Agustus 2026 pukul 23.59 WIB agar kuota
                tetap tersedia.
              </p>

              <dl>
                <div>
                  <dt>Nominal</dt>
                  <dd>Rp1.500.000</dd>
                </div>

                <div>
                  <dt>Invoice</dt>
                  <dd>INV-PPSTIP-2026-000184-FORM</dd>
                </div>
              </dl>

              <button
                type="button"
                className="cross-portal-button cross-portal-button--primary cross-portal-button--full"
              >
                Lihat Instruksi Pembayaran
              </button>
            </div>
          </section>

          <section className="cross-portal-participant__progress">
            <h3>Progress Pendaftaran</h3>

            <div className="cross-portal-participant__progress-list">
              <div className="is-complete">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Registrasi akun</span>
              </div>

              <div className="is-active">
                <CreditCard size={18} aria-hidden="true" />
                <span>Pembayaran formulir</span>
              </div>

              <div>
                <FileText size={18} aria-hidden="true" />
                <span>Finalisasi biodata</span>
              </div>
            </div>
          </section>
        </main>

        <nav
          className="cross-portal-participant__bottom-navigation"
          aria-label="Navigasi Portal Peserta"
        >
          <a href="#" className="is-active">
            <Home size={20} aria-hidden="true" />
            <span>Beranda</span>
          </a>

          <a href="#">
            <ClipboardCheck size={20} aria-hidden="true" />
            <span>Proses</span>
          </a>

          <a href="#">
            <Bell size={20} aria-hidden="true" />
            <span>Notifikasi</span>
          </a>

          <a href="#">
            <HelpCircle size={20} aria-hidden="true" />
            <span>Bantuan</span>
          </a>

          <a href="#">
            <User size={20} aria-hidden="true" />
            <span>Profil</span>
          </a>
        </nav>
      </div>
    </section>
  );
}

function InternalPortalExample() {
  return (
    <section
      className="cross-portal-example"
      data-portal="internal"
      data-density="default"
      aria-labelledby="internal-example-title"
    >
      <header className="cross-portal-example__heading">
        <div>
          <p className="cross-portal-example__eyebrow">Portal Internal</p>

          <h2
            id="internal-example-title"
            className="cross-portal-example__title"
          >
            Operational Structured Data
          </h2>

          <p className="cross-portal-example__description">
            Desktop-first, context-driven, berbasis modul, permission, dan data
            operasional.
          </p>
        </div>

        <span className="cross-portal-example__density-label">Default</span>
      </header>

      <div className="cross-portal-internal">
        <aside className="cross-portal-internal__sidebar">
          <div className="cross-portal-internal__brand">
            <span aria-hidden="true">
              <ShipWheel size={22} />
            </span>

            <div>
              <strong>Penerimaan Pembentukan</strong>
              <small>Portal Internal</small>
            </div>
          </div>

          <nav aria-label="Navigasi Portal Internal">
            <a href="#" className="is-active">
              <LayoutDashboard size={20} aria-hidden="true" />
              Dashboard
            </a>

            <a href="#">
              <Users size={20} aria-hidden="true" />
              Peserta
            </a>

            <a href="#">
              <ClipboardCheck size={20} aria-hidden="true" />
              Verifikasi
            </a>

            <a href="#">
              <CreditCard size={20} aria-hidden="true" />
              Pembayaran
            </a>

            <a href="#">
              <CalendarDays size={20} aria-hidden="true" />
              Seleksi
            </a>

            <a href="#">
              <Settings size={20} aria-hidden="true" />
              Pengaturan
            </a>
          </nav>
        </aside>

        <div className="cross-portal-internal__workspace">
          <header className="cross-portal-internal__topbar">
            <div>
              <small>Konteks aktif</small>
              <strong>Diklat Pembentukan CMA CGM 2026</strong>
            </div>

            <div className="cross-portal-internal__topbar-actions">
              <button
                type="button"
                className="cross-portal-icon-button"
                aria-label="Cari data"
              >
                <Search size={20} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="cross-portal-icon-button"
                aria-label="Buka notifikasi"
              >
                <Bell size={20} aria-hidden="true" />
              </button>
            </div>
          </header>

          <main className="cross-portal-internal__content">
            <header className="cross-portal-internal__page-header">
              <div>
                <p>Verifikasi Administrasi</p>
                <h3>Antrean Verifikasi Peserta</h3>
              </div>

              <button
                type="button"
                className="cross-portal-button cross-portal-button--primary"
              >
                Claim Peserta
              </button>
            </header>

            <section className="cross-portal-internal__statistics">
              <article>
                <span>Total Antrean</span>
                <strong>128</strong>
              </article>

              <article>
                <span>Sedang Diverifikasi</span>
                <strong>14</strong>
              </article>

              <article>
                <span>Perlu Perbaikan</span>
                <strong>23</strong>
              </article>
            </section>

            <section className="cross-portal-internal__table-card">
              <div className="cross-portal-internal__toolbar">
                <label>
                  <Search size={18} aria-hidden="true" />

                  <input
                    type="search"
                    placeholder="Cari nama atau nomor pendaftaran"
                  />
                </label>

                <button
                  type="button"
                  className="cross-portal-button cross-portal-button--secondary"
                >
                  Filter Status
                </button>
              </div>

              <div className="cross-portal-internal__table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Peserta</th>
                      <th>Program</th>
                      <th>Status</th>
                      <th>Dokumen</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <strong>Ahmad Fauzan</strong>
                        <span>PPSTIP-2026-000184</span>
                      </td>

                      <td>Nautika</td>

                      <td>
                        <span className="cross-portal-status cross-portal-status--warning">
                          Perlu Perbaikan
                        </span>
                      </td>

                      <td>5 dari 6 diterima</td>

                      <td>
                        <button
                          type="button"
                          className="cross-portal-text-action"
                        >
                          Buka
                          <ChevronRight size={16} aria-hidden="true" />
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Siti Rahmawati</strong>
                        <span>PPSTIP-2026-000185</span>
                      </td>

                      <td>Teknika</td>

                      <td>
                        <span className="cross-portal-status cross-portal-status--information">
                          Dalam Verifikasi
                        </span>
                      </td>

                      <td>6 dari 6 diunggah</td>

                      <td>
                        <button
                          type="button"
                          className="cross-portal-text-action"
                        >
                          Buka
                          <ChevronRight size={16} aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}

export function CrossPortalShowcase() {
  return (
    <article className="cross-portal">
      <header className="cross-portal__header">
        <p className="cross-portal__eyebrow">11 Cross-Portal Examples</p>

        <h1 className="cross-portal__title">
          Shared System, Different Composition
        </h1>

        <p className="cross-portal__description">
          Seluruh contoh memakai font, icon, color, status, button, focus,
          radius, dan accessibility foundation yang sama. Perbedaannya hanya
          berada pada layout, density, navigation, dan information emphasis.
        </p>
      </header>

      <PublicWebsiteExample />
      <ParticipantPortalExample />
      <InternalPortalExample />
    </article>
  );
}
