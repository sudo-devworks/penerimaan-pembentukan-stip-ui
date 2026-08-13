import {
  Banknote,
  CheckCircle2,
  Clock3,
  Download,
  RefreshCcw,
} from "lucide-react";

import {
  Button,
  FilterToolbar,
  SearchInput,
  Select,
  TableToolbar,
} from "../../components";

import "./InternalPages.css";

const payments = [
  {
    registration: "CMA240512001",
    name: "Ahmad Fauzi",
    program: "Nautika",
    amount: "Rp500.000",
    method: "Virtual Account",
    status: "Lunas",
    updated: "23 Mei 2026 · 08:44",
  },
  {
    registration: "CMA240512002",
    name: "Putri Amanda",
    program: "Nautika",
    amount: "Rp500.000",
    method: "Virtual Account",
    status: "Lunas",
    updated: "23 Mei 2026 · 08:21",
  },
  {
    registration: "CMA240512003",
    name: "Rizky Pratama",
    program: "Teknika",
    amount: "Rp500.000",
    method: "Virtual Account",
    status: "Menunggu",
    updated: "22 Mei 2026 · 17:09",
  },
  {
    registration: "CMA240512005",
    name: "Dewi Lestari",
    program: "ETO",
    amount: "Rp500.000",
    method: "Virtual Account",
    status: "Refund",
    updated: "21 Mei 2026 · 13:11",
  },
] as const;

export function InternalPaymentsPage() {
  return (
    <div className="internal-workspace-page">
      <header className="internal-module-header">
        <div>
          <p className="internal-module-header__eyebrow">
            Keuangan
          </p>

          <h1>Pengelolaan Pembayaran</h1>

          <p>
            Pantau tagihan, pembayaran masuk, transaksi menunggu,
            dan proses refund peserta.
          </p>
        </div>

        <div className="internal-module-header__actions">
          <Button
            size="sm"
            variant="outline"
            leadingIcon={<RefreshCcw />}
          >
            Sinkronkan
          </Button>

          <Button
            size="sm"
            variant="outline"
            leadingIcon={<Download />}
          >
            Ekspor
          </Button>
        </div>
      </header>

      <section className="internal-business-summary internal-business-summary--four">
        <article>
          <span>
            <Banknote />
          </span>

          <div>
            <small>Total Tagihan</small>
            <strong>1.248</strong>
          </div>
        </article>

        <article>
          <span>
            <CheckCircle2 />
          </span>

          <div>
            <small>Lunas</small>
            <strong>876</strong>
          </div>
        </article>

        <article>
          <span>
            <Clock3 />
          </span>

          <div>
            <small>Menunggu</small>
            <strong>312</strong>
          </div>
        </article>

        <article>
          <span>
            <RefreshCcw />
          </span>

          <div>
            <small>Refund</small>
            <strong>22</strong>
          </div>
        </article>
      </section>

      <FilterToolbar
        search={
          <SearchInput
            aria-label="Cari pembayaran peserta"
            placeholder="Cari peserta atau no. pendaftaran..."
            clearable
            fullWidth
          />
        }
        filters={
          <>
            <Select
              aria-label="Filter program pembayaran"
              defaultValue="all"
            >
              <option value="all">Semua Program</option>
              <option value="nautika">Nautika</option>
              <option value="teknika">Teknika</option>
              <option value="eto">ETO</option>
            </Select>

            <Select
              aria-label="Filter status pembayaran"
              defaultValue="all"
            >
              <option value="all">Semua Status</option>
              <option value="paid">Lunas</option>
              <option value="pending">Menunggu</option>
              <option value="refund">Refund</option>
            </Select>
          </>
        }
      />

      <section className="internal-table-shell">
        <TableToolbar
          title="Transaksi"
          description="Transaksi pada konteks aktif"
        />

        <div className="internal-data-table-wrap">
          <table className="internal-data-table">
            <thead>
              <tr>
                <th>No. Pendaftaran</th>
                <th>Peserta</th>
                <th>Program</th>
                <th>Nominal</th>
                <th>Metode</th>
                <th>Status</th>
                <th>Pembaruan</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr key={payment.registration}>
                  <td>
                    <strong>{payment.registration}</strong>
                  </td>

                  <td>{payment.name}</td>
                  <td>{payment.program}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.method}</td>

                  <td>
                    <span
                      className={
                        payment.status === "Lunas"
                          ? "internal-status internal-status--lunas"
                          : payment.status === "Refund"
                            ? "internal-status internal-status--refund"
                            : "internal-status internal-status--menunggu"
                      }
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td>{payment.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}