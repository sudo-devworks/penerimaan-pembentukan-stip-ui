import {
  Clock3,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Phone,
  ShieldAlert,
} from "lucide-react";

import "./PublicHelpPage.css";

export function PublicHelpPage() {
  return (
    <div className="public-help-page">
      <header className="public-information-hero">
        <div className="public-shell-container public-information-hero__inner">
          <p>Bantuan dan kontak</p>
          <h1>Dapatkan bantuan melalui kanal resmi STIP</h1>
          <span>
            Siapkan Nomor Pendaftaran dan penjelasan masalah agar petugas
            dapat membantu dengan lebih cepat.
          </span>
        </div>
      </header>

      <section
        className="public-help-page__content"
        aria-labelledby="help-channels-title"
      >
        <div className="public-shell-container">
          <div className="public-information-heading">
            <p>Kanal bantuan</p>
            <h2 id="help-channels-title">Hubungi layanan penerimaan</h2>
          </div>

          <div className="public-help-page__grid">
            <article>
              <Mail aria-hidden="true" />
              <h3>Email</h3>
              <p>Alamat email layanan akan diperbarui.</p>
            </article>

            <article>
              <Phone aria-hidden="true" />
              <h3>Telepon</h3>
              <p>Nomor telepon layanan akan diperbarui.</p>
            </article>

            <article>
              <MapPin aria-hidden="true" />
              <h3>Lokasi</h3>
              <p>Sekolah Tinggi Ilmu Pelayaran Jakarta, Jakarta Utara.</p>
            </article>

            <article>
              <Clock3 aria-hidden="true" />
              <h3>Jam layanan</h3>
              <p>Informasi jam layanan akan diperbarui.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="public-help-page__preparation">
        <div className="public-shell-container public-help-page__preparation-grid">
          <MessageCircleQuestion aria-hidden="true" />

          <div>
            <h2>Sebelum menghubungi petugas</h2>

            <ul>
              <li>Periksa terlebih dahulu halaman Pertanyaan Umum.</li>
              <li>Siapkan nama lengkap dan Nomor Pendaftaran.</li>
              <li>Jelaskan halaman, tahap, dan pesan masalah yang muncul.</li>
              <li>Jangan mengirim kata sandi atau kode OTP.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="public-help-page__security">
        <div className="public-shell-container public-help-page__security-inner">
          <ShieldAlert aria-hidden="true" />

          <div>
            <h2>Jaga kerahasiaan akun</h2>
            <p>
              Petugas tidak pernah meminta kata sandi, kode OTP, atau akses
              langsung ke akun peserta.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}