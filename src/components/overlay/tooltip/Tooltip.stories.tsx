import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./Tooltip";

const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  args: {
    children: null,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger variant="outline">Status administrasi</TooltipTrigger>

      <TooltipContent>
        <TooltipArrow />
        Menunggu pemeriksaan dokumen
      </TooltipContent>
    </Tooltip>
  ),
};

export const BottomPlacement: Story = {
  render: () => (
    <Tooltip placement="bottom">
      <TooltipTrigger variant="outline">Nomor pendaftaran</TooltipTrigger>

      <TooltipContent>
        <TooltipArrow />
        Identitas utama proses peserta
      </TooltipContent>
    </Tooltip>
  ),
};

export const ShortDelay: Story = {
  render: () => (
    <Tooltip openDelay={200} closeDelay={0}>
      <TooltipTrigger variant="ghost">Bantuan</TooltipTrigger>

      <TooltipContent>
        <TooltipArrow />
        Informasi singkat tanpa tindakan
      </TooltipContent>
    </Tooltip>
  ),
};
