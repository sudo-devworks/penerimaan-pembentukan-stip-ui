import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Building2,
  CalendarDays,
  ClipboardCheck,
  LayoutDashboard,
  UsersRound,
  WalletCards,
} from "lucide-react";

import {
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
} from "./index";

const meta = {
  title: "Components/Navigation/SideNavigation",
  component: SideNavigation,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InternalPortal: Story = {
  args: {
    children: (
      <>
        <SideNavigationGroup label="Utama">
          <SideNavigationItem
            href="/internal"
            icon={<LayoutDashboard />}
            active
          >
            Dashboard
          </SideNavigationItem>
        </SideNavigationGroup>

        <SideNavigationGroup label="Konfigurasi">
          <SideNavigationItem href="/internal/mitra" icon={<Building2 />}>
            Mitra
          </SideNavigationItem>

          <SideNavigationItem href="/internal/kegiatan" icon={<CalendarDays />}>
            Kegiatan
          </SideNavigationItem>
        </SideNavigationGroup>

        <SideNavigationGroup label="Peserta">
          <SideNavigationItem
            href="/internal/peserta"
            icon={<UsersRound />}
            badge="128"
            accessibleLabel="Daftar Peserta, 128 peserta"
          >
            Daftar Peserta
          </SideNavigationItem>

          <SideNavigationItem
            href="/internal/verifikasi"
            icon={<ClipboardCheck />}
            badge="12"
            accessibleLabel="Verifikasi Administrasi, 12 tugas"
          >
            Verifikasi Administrasi
          </SideNavigationItem>

          <SideNavigationItem
            href="/internal/pembayaran"
            icon={<WalletCards />}
          >
            Pembayaran
          </SideNavigationItem>
        </SideNavigationGroup>
      </>
    ),
  },
};

export const Compact: Story = {
  args: {
    children: (
      <SideNavigationGroup label="Peserta">
        <SideNavigationItem href="/peserta" active>
          Daftar Peserta
        </SideNavigationItem>

        <SideNavigationItem href="/verifikasi">Verifikasi</SideNavigationItem>

        <SideNavigationItem href="/seleksi" disabled>
          Seleksi
        </SideNavigationItem>
      </SideNavigationGroup>
    ),
  },
  decorators: [
    (Story) => (
      <div data-density="compact">
        <Story />
      </div>
    ),
  ],
};
