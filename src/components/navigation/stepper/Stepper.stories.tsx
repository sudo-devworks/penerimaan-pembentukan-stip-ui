import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stepper, StepperItem } from "./index";

const meta = {
  title: "Components/Navigation/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ParticipantProcess: Story = {
  args: {
    label: "Tahapan pendaftaran",
    children: (
      <>
        <StepperItem
          step={1}
          status="completed"
          title="Pilih kegiatan"
          description="Kegiatan dan program telah dipilih."
        />

        <StepperItem
          step={2}
          status="completed"
          title="Pembayaran formulir"
          description="Pembayaran telah dikonfirmasi."
        />

        <StepperItem
          step={3}
          status="current"
          title="Lengkapi biodata"
          description="Lengkapi dan finalisasi biodata."
        />

        <StepperItem
          step={4}
          title="Unggah dokumen"
          description="Belum tersedia."
        />

        <StepperItem
          step={5}
          title="Verifikasi"
          description="Belum dimulai."
          hideConnector
        />
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    label: "Tahapan seleksi",
    orientation: "vertical",
    children: (
      <>
        <StepperItem
          step={1}
          status="completed"
          title="Verifikasi administrasi"
          description="Peserta dinyatakan lulus administrasi."
        />

        <StepperItem
          step={2}
          status="current"
          title="Wawancara"
          description="Jadwal tersedia pada kartu ujian."
        />

        <StepperItem
          step={3}
          title="Pemeriksaan kesehatan"
          description="Menunggu tahap wawancara."
        />

        <StepperItem step={4} title="Hasil akhir" hideConnector />
      </>
    ),
  },
};

export const ErrorState: Story = {
  args: {
    orientation: "vertical",
    children: (
      <>
        <StepperItem step={1} status="completed" title="Pembayaran formulir" />

        <StepperItem
          step={2}
          status="error"
          title="Finalisasi biodata"
          description="Terdapat data wajib yang belum lengkap."
        />

        <StepperItem step={3} title="Unggah dokumen" hideConnector />
      </>
    ),
  },
};

export const InteractiveCompletedSteps: Story = {
  args: {
    children: (
      <>
        <StepperItem
          step={1}
          status="completed"
          title="Pilih kegiatan"
          href="/pendaftaran/kegiatan"
        />

        <StepperItem
          step={2}
          status="completed"
          title="Pembayaran formulir"
          onClick={() => undefined}
        />

        <StepperItem step={3} status="current" title="Lengkapi biodata" />

        <StepperItem step={4} title="Unggah dokumen" hideConnector />
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    orientation: "vertical",
    children: (
      <>
        <StepperItem
          step={1}
          status="completed"
          title="Memilih kegiatan penerimaan dan program pendidikan yang tersedia"
          description="Kegiatan, gelombang, dan program telah dikonfirmasi oleh peserta."
        />

        <StepperItem
          step={2}
          status="current"
          title="Melakukan pembayaran formulir pendaftaran"
          description="Selesaikan pembayaran sesuai batas waktu yang tercantum pada tagihan."
        />

        <StepperItem
          step={3}
          title="Melengkapi serta memfinalisasi biodata peserta"
          description="Tahapan ini tersedia setelah pembayaran berhasil dikonfirmasi."
          hideConnector
        />
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const DensityComparison: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "32px",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <div key={density} data-density={density}>
          <p
            style={{
              margin: "0 0 12px",
            }}
          >
            {density}
          </p>

          <Stepper label={`Tahapan ${density}`}>
            <StepperItem step={1} status="completed" title="Pilih kegiatan" />

            <StepperItem step={2} status="current" title="Pembayaran" />

            <StepperItem step={3} title="Biodata" hideConnector />
          </Stepper>
        </div>
      ))}
    </div>
  ),
};
