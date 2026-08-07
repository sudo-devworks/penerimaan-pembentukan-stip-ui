import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./index";

const meta = {
  title: "Overlay/Integration/Nested Overlay",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PopoverWithMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger variant="outline">Ringkasan peserta</PopoverTrigger>

      <PopoverContent>
        <p>PP-STIP-2026-00124</p>

        <Menu>
          <MenuTrigger variant="outline" size="sm">
            Tindakan lainnya
          </MenuTrigger>

          <MenuContent aria-label="Tindakan lainnya">
            <MenuItem textValue="Unduh dokumen">Unduh dokumen</MenuItem>

            <MenuItem textValue="Arsipkan peserta">Arsipkan peserta</MenuItem>
          </MenuContent>
        </Menu>
      </PopoverContent>
    </Popover>
  ),
};
