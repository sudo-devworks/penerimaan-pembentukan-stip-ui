import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import { OverlayTree } from "../../components";
import { PublicRouteTree } from "../../routes";

interface PublicWebsiteStoryProps {
  initialPath: string;
}

function PublicWebsiteStory({
  initialPath,
}: PublicWebsiteStoryProps) {
  return (
    <OverlayTree>
      <MemoryRouter initialEntries={[initialPath]}>
        <PublicRouteTree />
      </MemoryRouter>
    </OverlayTree>
  );
}

const meta = {
  title: "Pages/Public Website",
  component: PublicWebsiteStory,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    initialPath: "/",
  },
} satisfies Meta<typeof PublicWebsiteStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LandingPage: Story = {
  args: {
    initialPath: "/",
  },
};

export const Activities: Story = {
  args: {
    initialPath: "/kegiatan",
  },
};

export const ActivityDetail: Story = {
  args: {
    initialPath:
      "/kegiatan/diklat-pembentukan-cma-cgm-2026",
  },
};

export const Programs: Story = {
  args: {
    initialPath: "/program",
  },
};

export const ProgramDetail: Story = {
  args: {
    initialPath: "/program/nautika",
  },
};

export const Requirements: Story = {
  args: {
    initialPath: "/persyaratan",
  },
};

export const RegistrationFlow: Story = {
  args: {
    initialPath: "/alur-pendaftaran",
  },
};

export const SelectionSchedule: Story = {
  args: {
    initialPath: "/jadwal-seleksi",
  },
};

export const Fees: Story = {
  args: {
    initialPath: "/biaya",
  },
};

export const Announcements: Story = {
  args: {
    initialPath: "/pengumuman",
  },
};

export const AnnouncementDetail: Story = {
  args: {
    initialPath:
      "/pengumuman/pembukaan-pendaftaran-diklat-pembentukan-cma-cgm-2026",
  },
};

export const FrequentlyAskedQuestions: Story = {
  args: {
    initialPath: "/faq",
  },
};

export const HelpAndContact: Story = {
  args: {
    initialPath: "/bantuan",
  },
};

export const NotFound: Story = {
  args: {
    initialPath: "/halaman-tidak-tersedia",
  },
};