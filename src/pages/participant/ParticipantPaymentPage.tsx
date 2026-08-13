import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Clock3,
  Copy,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
  InlineAlert,
} from "../../components";
import { participantRoutes } from "../../routes";

import "./ParticipantPages.css";

export function ParticipantPaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Pembayaran
          </p>

          <h1>Pembayaran Formulir</h1>

          <p>
            Lihat status tagihan, detail pembayaran, dan riwayat
            transaksi pendaftaran Anda.
          </p>
        </div>

        <span className="participant-payment-status participant-payment-status--paid">
          <CheckCircle2 aria-hidden="true" />
          Lunas
        </span>
      </header>

      <InlineAlert
        severity="success"
        title="Pembayaran berhasil diverifikasi"
      >
        Pembayaran formulir Anda telah diterima. Anda dapat
        melanjutkan ke tahap berikutnya.
      </InlineAlert>

      <section className="participant-payment-grid">
        <article className="participant-payment-card participant-payment-card--primary">
          <div className="participant-payment-card__heading">
            <div>
              <p>Tagihan Formulir</p>
              <h2>Rp500.000</h2>
            </div>

            <ReceiptText aria-hidden="true" />
          </div>

          <div className="participant-payment-card__details">
            <div>
              <span>Status</span>
              <strong>Lunas</strong>
            </div>

            <div>
              <span>Tanggal Pembayaran</span>
              <strong>20 Mei 2026 · 14:35 WIB</strong>
            </div>

            <div>
              <span>Metode</span>
              <strong>Virtual Account</strong>
            </div>

            <div>
              <span>Nomor Referensi</span>
              <strong>TRX-STIP-260520-001</strong>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={() => undefined}
          >
            Unduh Bukti Pembayaran
          </Button>
        </article>

        <article className="participant-payment-card">
          <div className="participant-payment-card__heading">
            <div>
              <p>Virtual Account</p>
              <h2>98888 2405 1234</h2>
            </div>

            <Banknote aria-hidden="true" />
          </div>

          <div className="participant-payment-card__copy-row">
            <span>Bank BNI</span>

            <Button
              size="sm"
              variant="ghost"
              leadingIcon={<Copy />}
            >
              Salin Nomor
            </Button>
          </div>

          <p className="participant-payment-card__muted">
            Nomor Virtual Account ini hanya digunakan untuk
            tagihan pendaftaran terkait.
          </p>
        </article>

        <article className="participant-payment-card participant-payment-card--soft">
          <div className="participant-payment-card__heading">
            <div>
              <p>Keamanan transaksi</p>
              <h2>Pembayaran tercatat otomatis</h2>
            </div>

            <ShieldCheck aria-hidden="true" />
          </div>

          <p>
            Status pembayaran akan diperbarui setelah transaksi
            diterima dan diverifikasi oleh sistem.
          </p>

          <div className="participant-payment-card__meta">
            <Clock3 aria-hidden="true" />
            <span>
              Pembaruan status dapat memerlukan beberapa saat.
            </span>
          </div>
        </article>
      </section>

      <section className="participant-payment-history">
        <div className="participant-section-heading">
          <div>
            <p>Riwayat pembayaran</p>
            <h2>Transaksi Anda</h2>
          </div>
        </div>

        <div className="participant-payment-history__item">
          <span className="participant-payment-history__icon">
            <CheckCircle2 aria-hidden="true" />
          </span>

          <div>
            <strong>Pembayaran Formulir</strong>
            <span>20 Mei 2026 · 14:35 WIB</span>
          </div>

          <strong>Rp500.000</strong>

          <span className="participant-status participant-status--success">
            Lunas
          </span>
        </div>
      </section>

      <div className="participant-page-actions">
        <ActionLink
          href={participantRoutes.process}
          trailingIcon={<ArrowRight />}
          onClick={(event) => {
            event.preventDefault();
            navigate(participantRoutes.process);
          }}
        >
          Kembali ke Proses
        </ActionLink>
      </div>
    </div>
  );
}