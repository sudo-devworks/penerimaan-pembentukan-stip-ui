import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Download, Save, Upload } from "lucide-react";

import { Button } from "./Button";

const meta = {
  title: "Components/Actions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Visible button label.",
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "text",
        "destructive",
      ],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    loading: {
      control: "boolean",
    },
    loadingLabel: {
      control: "text",
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    leadingIcon: {
      control: false,
    },
    trailingIcon: {
      control: false,
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    children: "Daftar Sekarang",
    variant: "primary",
    size: "md",
    loading: false,
    fullWidth: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const ButtonStateLab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("Belum ada action yang dijalankan.");

  const handleProcess = () => {
    setIsLoading(true);
    setMessage("Proses sedang dijalankan.");

    window.setTimeout(() => {
      setIsLoading(false);
      setMessage("Proses berhasil diselesaikan.");
    }, 1500);
  };

  return (
    <div
      style={{
        display: "grid",
        gap: "var(--space-stack-lg)",
        width: "min(100%, 48rem)",
      }}
    >
      <section
        style={{
          display: "grid",
          gap: "var(--space-stack-sm)",
        }}
      >
        <strong>Keyboard dan focus-visible</strong>

        <p
          style={{
            margin: 0,
            color: "var(--color-text-secondary)",
          }}
        >
          Gunakan tombol Tab untuk memindahkan focus.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-inline-md)",
          }}
        >
          <Button variant="primary">Daftar Sekarang</Button>

          <Button variant="secondary">Lihat Instruksi</Button>

          <Button variant="outline">Unduh Laporan</Button>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "var(--space-stack-sm)",
        }}
      >
        <strong>Hover dan pressed</strong>

        <p
          style={{
            margin: 0,
            color: "var(--color-text-secondary)",
          }}
        >
          Arahkan pointer lalu tahan tombol mouse untuk melihat pressed state.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-inline-md)",
          }}
        >
          <Button variant="ghost">Buka Detail</Button>

          <Button variant="text">Lihat Semua</Button>

          <Button variant="destructive">Batalkan Pendaftaran</Button>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "var(--space-stack-sm)",
        }}
      >
        <strong>Loading interaction</strong>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-inline-md)",
          }}
        >
          <Button
            loading={isLoading}
            loadingLabel="Memproses..."
            onClick={handleProcess}
          >
            Jalankan Proses
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              setMessage("Action pendamping dijalankan.");
            }}
          >
            Action Pendamping
          </Button>
        </div>

        <p
          aria-live="polite"
          style={{
            margin: 0,
            color: "var(--color-text-secondary)",
          }}
        >
          {message}
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gap: "var(--space-stack-sm)",
        }}
      >
        <strong>Disabled requirement message</strong>

        <Button disabled>Finalisasi Biodata</Button>

        <p
          style={{
            margin: 0,
            color: "var(--color-text-secondary)",
          }}
        >
          Lengkapi seluruh biodata wajib sebelum melakukan finalisasi.
        </p>
      </section>
    </div>
  );
};

export const InteractiveStateLab: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => <ButtonStateLab />,
};

export const Playground: Story = {};

export const VariantComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-inline-md)",
      }}
    >
      <Button variant="primary">Daftar Sekarang</Button>

      <Button variant="secondary">Lihat Instruksi</Button>

      <Button variant="outline">Unduh Laporan</Button>

      <Button variant="ghost">Buka Detail</Button>

      <Button variant="text">Lihat Semua</Button>

      <Button variant="destructive">Batalkan Pendaftaran</Button>
    </div>
  ),
};

export const LoadingVariantComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-inline-md)",
      }}
    >
      <Button variant="primary" loading loadingLabel="Menyimpan...">
        Simpan Perubahan
      </Button>

      <Button variant="secondary" loading loadingLabel="Mengunduh...">
        Unduh Laporan
      </Button>

      <Button variant="outline" loading loadingLabel="Memuat...">
        Lihat Instruksi
      </Button>

      <Button variant="ghost" loading loadingLabel="Memuat...">
        Buka Detail
      </Button>

      <Button variant="text" loading loadingLabel="Memuat...">
        Lihat Semua
      </Button>

      <Button variant="destructive" loading loadingLabel="Membatalkan...">
        Batalkan Pendaftaran
      </Button>
    </div>
  ),
};

export const DisabledVariantComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-inline-md)",
      }}
    >
      <Button variant="primary" disabled>
        Daftar Sekarang
      </Button>

      <Button variant="secondary" disabled>
        Lihat Instruksi
      </Button>

      <Button variant="outline" disabled>
        Unduh Laporan
      </Button>

      <Button variant="ghost" disabled>
        Buka Detail
      </Button>

      <Button variant="text" disabled>
        Lihat Semua
      </Button>

      <Button variant="destructive" disabled>
        Batalkan Pendaftaran
      </Button>
    </div>
  ),
};

export const LeadingIcon: Story = {
  args: {
    children: "Simpan Perubahan",
    leadingIcon: <Save />,
  },
};

export const TrailingIcon: Story = {
  args: {
    children: "Lanjutkan Pembayaran",
    trailingIcon: <ArrowRight />,
  },
};

export const Loading: Story = {
  args: {
    children: "Simpan Perubahan",
    loading: true,
    loadingLabel: "Menyimpan...",
  },
};

export const Disabled: Story = {
  args: {
    children: "Finalisasi Biodata",
    disabled: true,
  },
};

export const FullWidth: Story = {
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <div
      style={{
        width: "min(100%, 40rem)",
      }}
    >
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Unggah Dokumen",
    leadingIcon: <Upload />,
    fullWidth: true,
  },
};

export const SizeComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-inline-md)",
      }}
    >
      <Button size="sm">Unduh Laporan</Button>

      <Button size="md">Unduh Laporan</Button>

      <Button size="lg">Unduh Laporan</Button>
    </div>
  ),
};

export const IconComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-inline-md)",
      }}
    >
      <Button leadingIcon={<Save />}>Simpan Perubahan</Button>

      <Button trailingIcon={<ArrowRight />}>Lanjutkan Pembayaran</Button>

      <Button leadingIcon={<Download />}>Unduh Laporan</Button>
    </div>
  ),
};

export const StateComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-inline-md)",
      }}
    >
      <Button>Daftar Sekarang</Button>

      <Button disabled>Finalisasi Biodata</Button>

      <Button loading loadingLabel="Menyimpan...">
        Simpan Perubahan
      </Button>
    </div>
  ),
};

export const DensityComparison: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "var(--space-stack-lg)",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <section
          key={density}
          data-density={density}
          style={{
            display: "grid",
            gap: "var(--space-stack-sm)",
            padding: "var(--space-inset-md)",
            border:
              "var(--primitive-border-width-default) solid var(--color-border-default)",
            borderRadius: "var(--primitive-radius-lg)",
          }}
        >
          <strong
            style={{
              textTransform: "capitalize",
            }}
          >
            {density}
          </strong>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-inline-md)",
            }}
          >
            <Button size="sm">Claim Peserta</Button>

            <Button size="md">Simpan Perubahan</Button>

            <Button size="lg">Daftar Sekarang</Button>
          </div>
        </section>
      ))}
    </div>
  ),
};

export const LongLabelStressTest: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "var(--space-stack-md)",
        width: "min(100%, 20rem)",
      }}
    >
      <Button fullWidth>
        Lihat Instruksi Pembayaran dan Ketentuan Pendaftaran
      </Button>

      <Button fullWidth trailingIcon={<ArrowRight />}>
        Lanjutkan ke Tahap Verifikasi Administrasi
      </Button>

      <Button fullWidth loading loadingLabel="Memproses Pembayaran...">
        Lanjutkan Pembayaran
      </Button>
    </div>
  ),
};

export const ResponsiveActionLayout: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "var(--space-stack-lg)",
        width: "min(100%, 48rem)",
      }}
    >
      <section
        style={{
          display: "grid",
          gap: "var(--space-stack-sm)",
        }}
      >
        <strong>Mobile stacked actions</strong>

        <div
          style={{
            display: "grid",
            gap: "var(--space-stack-sm)",
            width: "min(100%, 24rem)",
          }}
        >
          <Button fullWidth size="lg">
            Lanjutkan Pembayaran
          </Button>

          <Button fullWidth variant="secondary">
            Lihat Instruksi Pembayaran
          </Button>

          <Button fullWidth variant="text">
            Kembali
          </Button>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "var(--space-stack-sm)",
        }}
      >
        <strong>Desktop inline actions</strong>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-inline-md)",
          }}
        >
          <Button>Simpan Perubahan</Button>

          <Button variant="secondary">Batalkan</Button>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "var(--space-stack-sm)",
        }}
      >
        <strong>Destructive separation</strong>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "var(--space-inline-lg)",
          }}
        >
          <Button variant="destructive">Batalkan Pendaftaran</Button>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-inline-md)",
            }}
          >
            <Button variant="secondary">Kembali</Button>

            <Button>Simpan Perubahan</Button>
          </div>
        </div>
      </section>
    </div>
  ),
};
