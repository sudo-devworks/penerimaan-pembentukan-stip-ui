import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircleCheck, Clock3, FileSearch, Users } from "lucide-react";

import { StatGroup, StatItem } from "./StatGroup";

const meta = {
  title: "Composite/StatGroup",
  component: StatGroup,
  tags: ["autodocs"],
  args: {
    children: null,
  },
} satisfies Meta<typeof StatGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => (
    <StatGroup columns={4}>
      <StatItem
        description="Seluruh pendaftar"
        icon={<Users />}
        label="Total peserta"
        value="128"
      />

      <StatItem
        description="Menunggu pemeriksaan"
        icon={<Clock3 />}
        label="Perlu diverifikasi"
        value="24"
      />

      <StatItem
        description="Dokumen sedang diperiksa"
        icon={<FileSearch />}
        label="Dalam proses"
        value="10"
      />

      <StatItem
        description="Telah memenuhi persyaratan"
        icon={<CircleCheck />}
        label="Lulus administrasi"
        trend="+12%"
        value="94"
      />
    </StatGroup>
  ),
};

export const Mobile: Story = {
  ...Dashboard,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
