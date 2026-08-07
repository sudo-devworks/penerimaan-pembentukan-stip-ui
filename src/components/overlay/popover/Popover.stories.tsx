import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../actions/button";

import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "./Popover";

const meta = {
  title: "Overlay/Popover",
  component: Popover,
  args: {
    children: null,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InteractiveContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger variant="outline">Ringkasan peserta</PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />

        <div>
          <strong>PP-STIP-2026-00124</strong>

          <p>Dokumen administrasi masih menunggu verifikasi.</p>

          <Button size="sm">Buka detail</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const EndAligned: Story = {
  render: () => (
    <Popover placement="bottom-end">
      <PopoverTrigger variant="outline">Opsi tampilan</PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />

        <p>
          Konten mengikuti anchor dan berpindah ketika ruang viewport tidak
          mencukupi.
        </p>
      </PopoverContent>
    </Popover>
  ),
};
