import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pencil } from "lucide-react";

import { Button } from "../../actions/button";
import { DescriptionList, DescriptionListItem } from "../description-list";
import { DetailSummary } from "./DetailSummary";

const meta = {
  title: "Composite/DetailSummary",
  component: DetailSummary,
  tags: ["autodocs"],
  args: {
    title: "Informasi Peserta",
    children: null,
  },
} satisfies Meta<typeof DetailSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Participant: Story = {
  render: () => (
    <DetailSummary
      actions={
        <Button leadingIcon={<Pencil aria-hidden />} variant="outline">
          Edit Data
        </Button>
      }
      description="Ringkasan data utama peserta pada pendaftaran aktif."
      metadata={
        <>
          <span>STIP-2026-000128</span>
          <span>Diperbarui 6 Agustus 2026</span>
        </>
      }
      status={<span>Aktif</span>}
      title="Informasi Peserta"
    >
      <DescriptionList columns={2} divided>
        <DescriptionListItem term="Nama lengkap">
          Budi Santoso
        </DescriptionListItem>

        <DescriptionListItem term="Program">Nautika</DescriptionListItem>

        <DescriptionListItem term="Email">
          budi.santoso@example.com
        </DescriptionListItem>

        <DescriptionListItem term="Nomor telepon">
          0812-3456-7890
        </DescriptionListItem>
      </DescriptionList>
    </DetailSummary>
  ),
};

export const Mobile: Story = {
  ...Participant,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
