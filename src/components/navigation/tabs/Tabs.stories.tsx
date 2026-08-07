import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileText, History, UserRound, WalletCards } from "lucide-react";
import { useState } from "react";

import { Tab, TabList, TabPanel, Tabs } from "./index";

const meta = {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  args: {
    value: "summary",
    onValueChange: () => undefined,
    children: null,
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const BasicTabs = ({
  orientation = "horizontal",
  activationMode = "automatic",
}: {
  orientation?: "horizontal" | "vertical";
  activationMode?: "automatic" | "manual";
}) => {
  const [value, setValue] = useState("summary");

  return (
    <Tabs
      value={value}
      onValueChange={setValue}
      orientation={orientation}
      activationMode={activationMode}
    >
      <TabList aria-label="Detail peserta">
        <Tab value="summary">Ringkasan</Tab>

        <Tab value="profile">Biodata</Tab>

        <Tab value="documents">Dokumen</Tab>

        <Tab value="payment">Pembayaran</Tab>
      </TabList>

      <TabPanel value="summary">
        <h2>Ringkasan peserta</h2>
        <p>Informasi utama proses pendaftaran peserta.</p>
      </TabPanel>

      <TabPanel value="profile">
        <h2>Biodata</h2>
        <p>Data pribadi dan informasi pendidikan peserta.</p>
      </TabPanel>

      <TabPanel value="documents">
        <h2>Dokumen</h2>
        <p>Dokumen persyaratan dan status verifikasinya.</p>
      </TabPanel>

      <TabPanel value="payment">
        <h2>Pembayaran</h2>
        <p>Informasi tagihan dan status pembayaran.</p>
      </TabPanel>
    </Tabs>
  );
};

export const Default: Story = {
  render: () => <BasicTabs />,
};

export const ManualActivation: Story = {
  render: () => <BasicTabs activationMode="manual" />,
};

export const Vertical: Story = {
  render: () => <BasicTabs orientation="vertical" />,
};

const IconAndBadgeTabs = () => {
  const [value, setValue] = useState("profile");

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabList aria-label="Data peserta">
        <Tab value="profile" icon={<UserRound />}>
          Biodata
        </Tab>

        <Tab
          value="documents"
          icon={<FileText />}
          badge={<span aria-label="3 dokumen perlu diperiksa">3</span>}
        >
          Dokumen
        </Tab>

        <Tab value="payment" icon={<WalletCards />}>
          Pembayaran
        </Tab>

        <Tab value="history" icon={<History />}>
          Riwayat
        </Tab>
      </TabList>

      <TabPanel value="profile">Isi biodata peserta.</TabPanel>

      <TabPanel value="documents">Daftar dokumen peserta.</TabPanel>

      <TabPanel value="payment">Status pembayaran peserta.</TabPanel>

      <TabPanel value="history">Riwayat perubahan peserta.</TabPanel>
    </Tabs>
  );
};

export const WithIconsAndBadge: Story = {
  render: () => <IconAndBadgeTabs />,
};

const DisabledTabExample = () => {
  const [value, setValue] = useState("summary");

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabList aria-label="Tahapan data">
        <Tab value="summary">Ringkasan</Tab>

        <Tab value="profile">Biodata</Tab>

        <Tab value="selection" disabled>
          Seleksi
        </Tab>
      </TabList>

      <TabPanel value="summary">Ringkasan tersedia.</TabPanel>

      <TabPanel value="profile">Biodata tersedia.</TabPanel>

      <TabPanel value="selection">Seleksi belum tersedia.</TabPanel>
    </Tabs>
  );
};

export const DisabledTab: Story = {
  render: () => <DisabledTabExample />,
};

const ManyTabsExample = () => {
  const [value, setValue] = useState("summary");

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabList aria-label="Detail lengkap peserta">
        <Tab value="summary">Ringkasan</Tab>

        <Tab value="profile">Biodata</Tab>

        <Tab value="documents">Dokumen</Tab>

        <Tab value="administration">Administrasi</Tab>

        <Tab value="payment">Pembayaran</Tab>

        <Tab value="exam">Kartu Ujian</Tab>

        <Tab value="selection">Seleksi</Tab>

        <Tab value="result">Hasil Akhir</Tab>

        <Tab value="history">Riwayat</Tab>
      </TabList>

      <TabPanel value={value}>Konten aktif: {value}</TabPanel>
    </Tabs>
  );
};

export const MobileHorizontalScroll: Story = {
  render: () => <ManyTabsExample />,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const DensityComparison: Story = {
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
              margin: "0 0 8px",
            }}
          >
            {density}
          </p>

          <BasicTabs />
        </div>
      ))}
    </div>
  ),
};
