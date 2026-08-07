import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";
import {
  publicFeeItems,
  publicPaymentNotes,
} from "../../features/public/information";
import { participantPortalRoutes } from "../../routes";

import "./PublicFeesPage.css";

export function PublicFeesPage() {
  const navigate = useNavigate();

  return (
    <div className="public-fees-page">
      <header className="public-information-hero">
        <div className="public-shell-container public-information-hero__inner">
          <p>Biaya pendaftaran</p>
          <h1>Informasi biaya yang jelas dan transparan</h1>
          <span>
            Nominal final, batas pembayaran, dan kanal pembayaran resmi akan
            ditampilkan pada akun peserta sesuai kegiatan yang dipilih.
          </span>
        </div>
      </header>

      <section
        className="public-fees-page__security"
        aria-labelledby="payment-security-title"
      >
        <div className="public-shell-container public-fees-page__security-grid">
          <ShieldCheck aria-hidden="true" />

          <div>
            <h2 id="payment-security-title">
              Bayar hanya melalui tagihan resmi
            </h2>
            <p>
              Jangan melakukan transfer berdasarkan pesan pribadi atau
              informasi pembayaran yang tidak tampil pada Portal Penerimaan
              STIP.
            </p>
          </div>
        </div>
      </section>

      <section
        className="public-fees-page__content"
        aria-labelledby="fee-items-title"
      >
        <div className="public-shell-container">
          <div className="public-information-heading">
            <p>Komponen biaya</p>
            <h2 id="fee-items-title">
              Biaya dalam proses penerimaan
            </h2>
          </div>

          <div className="public-fees-page__grid">
            {publicFeeItems.map((fee) => (
              <article key={fee.id} className="public-fee-card">
                <CreditCard aria-hidden="true" />

                <div className="public-fee-card__heading">
                  <h3>{fee.title}</h3>
                  <strong>{fee.amount}</strong>
                </div>

                <p>{fee.description}</p>

                <div className="public-fee-card__timing">
                  <span>Waktu pembayaran</span>
                  <p>{fee.paymentTiming}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="public-fees-page__notes"
        aria-labelledby="payment-notes-title"
      >
        <div className="public-shell-container public-fees-page__notes-grid">
          <div className="public-information-heading">
            <p>Keamanan pembayaran</p>
            <h2 id="payment-notes-title">
              Hal yang harus diperhatikan
            </h2>
          </div>

          <ul>
            {publicPaymentNotes.map((note) => (
              <li key={note}>
                <CheckCircle2 aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="public-fees-page__warning">
        <div className="public-shell-container public-fees-page__warning-inner">
          <AlertTriangle aria-hidden="true" />

          <div>
            <h2>Waspadai permintaan pembayaran tidak resmi</h2>
            <p>
              STIP tidak meminta peserta mengirimkan kode OTP, kata sandi,
              atau informasi rahasia akun kepada petugas.
            </p>
          </div>
        </div>
      </section>

      <section className="public-information-cta">
        <div className="public-shell-container public-information-cta__inner">
          <div>
            <p>Lihat tagihan pribadi</p>
            <h2>Masuk ke Portal Penerimaan STIP</h2>
          </div>

          <Button
            size="lg"
            trailingIcon={<ArrowRight />}
            onClick={() =>
              navigate(participantPortalRoutes.login)
            }
          >
            Masuk ke Portal
          </Button>
        </div>
      </section>
    </div>
  );
}