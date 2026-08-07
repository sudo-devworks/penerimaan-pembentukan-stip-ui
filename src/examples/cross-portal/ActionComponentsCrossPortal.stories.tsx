import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Bell,
  Download,
  FileSpreadsheet,
  FileText,
  RefreshCw,
  Save,
  Upload,
} from "lucide-react";

import {
  ActionLink,
  Button,
  ButtonGroup,
  DropdownAction,
  IconButton,
  TextAction,
} from "../../components";

import "./ActionComponentsCrossPortal.css";

const meta = {
  title: "Validation/Cross Portal/Action Components",
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const SharedSystemDifferentComposition: Story = {
  render: () => (
    <main className="action-cross-portal">
      <header className="action-cross-portal__header">
        <div>
          <p className="action-cross-portal__eyebrow">MOCKUP-06-P3.2</p>

          <h1 className="action-cross-portal__title">Shared Action System</h1>

          <p className="action-cross-portal__description">
            Component, token, interaction, focus behavior, dan accessibility
            baseline yang sama digunakan pada tiga komposisi portal yang
            berbeda.
          </p>
        </div>
      </header>

      <div className="action-cross-portal__grid">
        <section
          className="action-portal action-portal--public"
          data-density="comfortable"
        >
          <div className="action-portal__heading">
            <span className="action-portal__type">Public Website</span>

            <h2>Institutional Editorial Maritime</h2>

            <p>
              Action utama jelas, ruang lega, dan CTA tidak bersaing dengan
              informasi institusional.
            </p>
          </div>

          <div className="action-portal__surface">
            <div className="action-portal__content">
              <span className="action-portal__kicker">
                Penerimaan Diklat Pembentukan
              </span>

              <h3>Persiapkan perjalanan pendidikan maritim Anda</h3>

              <p>
                Pelajari program, persyaratan, tahapan seleksi, dan jadwal
                pendaftaran yang tersedia.
              </p>
            </div>

            <ButtonGroup
              align="start"
              stackOnMobile
              stretchOnMobile
              aria-label="Aksi informasi penerimaan"
            >
              <Button size="lg">Daftar Sekarang</Button>

              <ActionLink href="/program" variant="standalone">
                Lihat Informasi Program
              </ActionLink>
            </ButtonGroup>
          </div>
        </section>

        <section
          className="action-portal action-portal--participant"
          data-density="comfortable"
        >
          <div className="action-portal__heading">
            <span className="action-portal__type">Portal Peserta</span>

            <h2>Guided Personal Process</h2>

            <p>
              Primary task mengikuti tahapan peserta dan tampil lebih dominan
              daripada action pendamping.
            </p>
          </div>

          <div className="action-portal__surface">
            <div className="action-portal__toolbar">
              <div>
                <span className="action-portal__kicker">
                  Pembayaran Formulir
                </span>

                <h3>Lanjutkan proses pendaftaran</h3>
              </div>

              <IconButton
                icon={<Bell />}
                aria-label="Buka notifikasi"
                variant="ghost"
                shape="circular"
              />
            </div>

            <div className="action-portal__notice">
              Tagihan formulir telah diterbitkan. Selesaikan pembayaran sebelum
              batas waktu yang ditentukan.
            </div>

            <ButtonGroup
              direction="vertical"
              aria-label="Aksi pembayaran formulir"
            >
              <Button size="lg" fullWidth>
                Lanjutkan Pembayaran
              </Button>

              <Button variant="secondary" fullWidth>
                Lihat Instruksi Pembayaran
              </Button>

              <TextAction>Lihat detail tagihan</TextAction>
            </ButtonGroup>
          </div>
        </section>

        <section
          className="action-portal action-portal--internal"
          data-density="default"
        >
          <div className="action-portal__heading">
            <span className="action-portal__type">Portal Internal</span>

            <h2>Operational Structured Data</h2>

            <p>
              Action lebih rapat dan mendukung workflow operasional tanpa
              mengubah sistem visual dasarnya.
            </p>
          </div>

          <div className="action-portal__surface">
            <div className="action-portal__toolbar">
              <div>
                <span className="action-portal__kicker">
                  Verifikasi Administrasi
                </span>

                <h3>Peserta menunggu verifikasi</h3>
              </div>

              <ButtonGroup align="end" aria-label="Toolbar verifikasi">
                <IconButton
                  icon={<RefreshCw />}
                  aria-label="Segarkan data peserta"
                  variant="ghost"
                  size="sm"
                />

                <DropdownAction
                  label="Unduh"
                  size="sm"
                  placement="end"
                  leadingIcon={<Download />}
                  items={[
                    {
                      id: "pdf",
                      label: "Unduh PDF",
                      icon: <FileText />,
                      onSelect: () => undefined,
                    },
                    {
                      id: "excel",
                      label: "Unduh Excel",
                      icon: <FileSpreadsheet />,
                      onSelect: () => undefined,
                    },
                  ]}
                />
              </ButtonGroup>
            </div>

            <div className="action-portal__record">
              <div>
                <strong>PP-STIP-2026-00125</strong>
                <span>Rizky Pratama — Program Nautika</span>
              </div>

              <ButtonGroup align="end" stackOnMobile aria-label="Aksi peserta">
                <TextAction>Lihat detail</TextAction>

                <Button size="sm" variant="outline" leadingIcon={<Upload />}>
                  Periksa Dokumen
                </Button>

                <Button size="sm" leadingIcon={<Save />}>
                  Claim Peserta
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>
      </div>

      <section className="action-cross-portal__proof">
        <h2>Shared baseline proof</h2>

        <div className="action-cross-portal__proof-grid">
          <div>
            <strong>Shared</strong>
            <p>
              Font, icon, token, semantic action, focus ring, loading, disabled,
              dan touch target.
            </p>
          </div>

          <div>
            <strong>Different composition</strong>
            <p>
              Layout, density, content width, hierarchy, dan information
              emphasis.
            </p>
          </div>

          <div>
            <strong>No portal-specific button</strong>
            <p>
              Seluruh contoh menggunakan reusable action component yang sama.
            </p>
          </div>
        </div>
      </section>
    </main>
  ),
};
