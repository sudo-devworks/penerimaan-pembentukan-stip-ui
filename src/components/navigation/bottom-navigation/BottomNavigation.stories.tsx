import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, CircleHelp, Home, Route, UserRound } from "lucide-react";

import { BottomNavigation, BottomNavigationItem } from "./index";

const meta = {
  title: "Components/Navigation/BottomNavigation",
  component: BottomNavigation,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobilePrimary",
    },
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ParticipantPortal: Story = {
  args: {
    children: (
      <>
        <BottomNavigationItem href="/" icon={<Home />} active>
          Beranda
        </BottomNavigationItem>

        <BottomNavigationItem href="/proses" icon={<Route />}>
          Proses
        </BottomNavigationItem>

        <BottomNavigationItem
          href="/notifikasi"
          icon={<Bell />}
          badge="3"
          accessibleLabel="Notifikasi, 3 belum dibaca"
        >
          Notifikasi
        </BottomNavigationItem>

        <BottomNavigationItem href="/bantuan" icon={<CircleHelp />}>
          Bantuan
        </BottomNavigationItem>

        <BottomNavigationItem href="/profil" icon={<UserRound />}>
          Profil
        </BottomNavigationItem>
      </>
    ),
  },
};

export const DisabledItem: Story = {
  args: {
    children: (
      <>
        <BottomNavigationItem href="/" icon={<Home />} active>
          Beranda
        </BottomNavigationItem>

        <BottomNavigationItem
          href="/proses"
          icon={<Route />}
          disabled
          accessibleLabel="Proses, belum tersedia"
        >
          Proses
        </BottomNavigationItem>

        <BottomNavigationItem href="/profil" icon={<UserRound />}>
          Profil
        </BottomNavigationItem>
      </>
    ),
  },
};
