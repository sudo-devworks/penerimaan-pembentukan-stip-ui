import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../actions/button";
import { DescriptionList, DescriptionListItem } from "./DescriptionList";

const meta = {
  title: "Composite/DescriptionList",
  component: DescriptionList,
  tags: ["autodocs"],
  args: {
    children: null,
  },
} satisfies Meta<typeof DescriptionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ParticipantDetail: Story = {
  render: () => (
    <DescriptionList columns={2} divided>
      <DescriptionListItem term="Nama lengkap">
        Budi Santoso
      </DescriptionListItem>

      <DescriptionListItem term="Nomor pendaftaran">
        STIP-2026-000128
      </DescriptionListItem>

      <DescriptionListItem term="Program">Nautika</DescriptionListItem>

      <DescriptionListItem term="Status">
        Verifikasi Administrasi
      </DescriptionListItem>

      <DescriptionListItem
        actions={<Button variant="text">Salin</Button>}
        term="Email"
      >
        budi.santoso@example.com
      </DescriptionListItem>

      <DescriptionListItem term="Nomor telepon">
        0812-3456-7890
      </DescriptionListItem>
    </DescriptionList>
  ),
};

export const Mobile: Story = {
  ...ParticipantDetail,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
