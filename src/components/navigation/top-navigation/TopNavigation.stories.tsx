import type { Meta, StoryObj } from "@storybook/react-vite";

import { TopNavigation, TopNavigationItem } from "./index";

const meta = {
  title: "Components/Navigation/TopNavigation",
  component: TopNavigation,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof TopNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PublicWebsite: Story = {
  args: {
    children: (
      <>
        <TopNavigationItem href="/" active>
          Beranda
        </TopNavigationItem>

        <TopNavigationItem href="/kegiatan">Kegiatan</TopNavigationItem>

        <TopNavigationItem href="/panduan">Panduan</TopNavigationItem>

        <TopNavigationItem href="/pengumuman">Pengumuman</TopNavigationItem>

        <TopNavigationItem href="/bantuan">Bantuan</TopNavigationItem>
      </>
    ),
  },
};

export const LongNavigation: Story = {
  args: {
    children: (
      <>
        <TopNavigationItem href="/">Beranda</TopNavigationItem>

        <TopNavigationItem href="/profil">Profil STIP</TopNavigationItem>

        <TopNavigationItem href="/penerimaan" active>
          Penerimaan Pembentukan
        </TopNavigationItem>

        <TopNavigationItem href="/jadwal">Jadwal Seleksi</TopNavigationItem>

        <TopNavigationItem href="/pengumuman">
          Pengumuman Hasil
        </TopNavigationItem>

        <TopNavigationItem href="/kontak">Kontak dan Bantuan</TopNavigationItem>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
