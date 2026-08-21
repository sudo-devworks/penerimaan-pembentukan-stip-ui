import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  CircleHelp,
  Download,
  FileText,
  ReceiptText,
  RotateCcw,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ActionLink, Button, InlineAlert } from "../../components";
import { participantRoutes } from "../../routes/participantRoutes";

import "./ParticipantPages.css";

export function ParticipantPaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="participant-workspace participant-finance">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">Keuangan</p>
          <h1>Keuangan</h1>
          <p>
            Pantau tagihan, pembayaran, bukti transaksi, dan riwayat keuangan
            selama mengikuti proses penerimaan.
          </p>
        </div>

        <span className="participant-payment-status participant-payment-status--paid">
          <CheckCircle2 aria-hidden="true" />
          Tidak ada tagihan tertunggak
        </span>
      </header>

      <InlineAlert severity="success" title="Pembayaran formulir sudah lunas">
        Terima kasih, pembayaran Anda telah diterima dan diverifikasi. Seluruh
        transaksi yang berkaitan dengan proses penerimaan akan tercatat pada
        halaman ini.
      </InlineAlert>

      <section className="participant-finance__overview" aria-label="Ringkasan keuangan">
        <article className="participant-finance-highlight">
          <div className="participant-finance-highlight__icon" aria-hidden="true">
            <WalletCards />
            <span>
              <CheckCircle2 />
            </span>
          </div>

          <div className="participant-finance-highlight__content">
            <p>Pembayaran formulir sudah lunas</p>
            <span>Total Dibayar</span>
            <strong>Rp500.000</strong>

            <div className="participant-finance-highlight__actions">
              <span className="participant-finance-paid-badge">
                <CheckCircle2 aria-hidden="true" />
                Lunas
              </span>

              <Button
                variant="outline"
                leadingIcon={<Download />}
                onClick={() => undefined}
              >
                Unduh Bukti Pembayaran
              </Button>
            </div>
          </div>
        </article>

        <article className="participant-finance-summary">
          <div className="participant-finance-summary__heading">
            <div>
              <p>Ringkasan</p>
              <h2>Ringkasan Keuangan</h2>
            </div>
            <ReceiptText aria-hidden="true" />
          </div>

          <dl className="participant-finance-summary__list">
            <div>
              <dt>
                <CheckCircle2 aria-hidden="true" />
                Total Dibayar
              </dt>
              <dd>Rp500.000</dd>
            </div>
            <div>
              <dt>
                <ReceiptText aria-hidden="true" />
                Tagihan Aktif
              </dt>
              <dd>Tidak ada</dd>
            </div>
            <div>
              <dt>
                <RotateCcw aria-hidden="true" />
                Refund
              </dt>
              <dd>Tidak ada</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="participant-finance__content-grid">
        <article className="participant-finance-history">
          <div className="participant-section-heading">
            <div>
              <p>Riwayat Transaksi</p>
              <h2>Transaksi Anda</h2>
            </div>
          </div>

          <div className="participant-finance-history__row">
            <div className="participant-finance-history__date">
              <strong>27 Mei 2026</strong>
              <span>10:24 WIB</span>
            </div>

            <span className="participant-finance-history__icon" aria-hidden="true">
              <Banknote />
            </span>

            <div className="participant-finance-history__description">
              <strong>Pembayaran Formulir</strong>
              <span>Virtual Account BNI</span>
              <small>
                Diklat Pembentukan Kerja Sama CMA CGM · Gelombang II TA 2026/2027
              </small>
            </div>

            <strong className="participant-finance-history__amount">Rp500.000</strong>

            <span className="participant-status participant-status--success">
              Lunas
            </span>

            <Button
              size="sm"
              variant="outline"
              leadingIcon={<Download />}
              onClick={() => undefined}
            >
              Bukti
            </Button>
          </div>

          <dl className="participant-finance-history__detail">
            <div>
              <dt>No. Transaksi</dt>
              <dd>20260527102431871</dd>
            </div>
            <div>
              <dt>Metode Pembayaran</dt>
              <dd>Virtual Account BNI</dd>
            </div>
            <div>
              <dt>No. VA</dt>
              <dd>8808801234567890</dd>
            </div>
            <div>
              <dt>Waktu Pembayaran</dt>
              <dd>27 Mei 2026, 10:24 WIB</dd>
            </div>
          </dl>

          <div className="participant-finance-history__empty">
            <FileText aria-hidden="true" />
            <strong>Tidak ada transaksi lainnya</strong>
            <span>Riwayat transaksi berikutnya akan muncul di sini.</span>
          </div>
        </article>

        <article className="participant-finance-refund">
          <div className="participant-finance-refund__heading">
            <div>
              <p>Refund</p>
              <h2>Pengembalian Dana</h2>
            </div>
            <RotateCcw aria-hidden="true" />
          </div>

          <div className="participant-finance-refund__empty">
            <span className="participant-finance-refund__illustration" aria-hidden="true">
              <WalletCards />
            </span>
            <strong>Belum ada pengajuan refund</strong>
            <p>
              Jika terdapat proses pengembalian dana, status dan riwayatnya
              akan ditampilkan di sini.
            </p>
          </div>

          <div className="participant-payment-card__meta">
            <ShieldCheck aria-hidden="true" />
            <span>Riwayat refund tersimpan per proses pendaftaran.</span>
          </div>
        </article>
      </section>

      <section className="participant-finance-note">
        <CircleHelp aria-hidden="true" />
        <div>
          <strong>Informasi Penting</strong>
          <p>
            Jika Anda memiliki pertanyaan terkait pembayaran atau refund,
            silakan hubungi panitia melalui menu Bantuan.
          </p>
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
