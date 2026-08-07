import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./index";

const meta = {
  title: "Overlay/Integration/Cross Portal",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const DialogWithNestedLayers: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Buka detail peserta</DialogTrigger>

      <DialogContent size="lg">
        <DialogTitle>Detail peserta</DialogTitle>

        <Popover>
          <PopoverTrigger variant="outline">Tampilkan metadata</PopoverTrigger>

          <PopoverContent>
            <p>Informasi tambahan peserta.</p>

            <Menu>
              <MenuTrigger variant="outline" size="sm">
                Tindakan
              </MenuTrigger>

              <MenuContent aria-label="Tindakan">
                <MenuItem textValue="Unduh dokumen">Unduh dokumen</MenuItem>

                <MenuItem textValue="Arsipkan peserta">
                  Arsipkan peserta
                </MenuItem>
              </MenuContent>
            </Menu>
          </PopoverContent>
        </Popover>

        <DialogFooter>
          <DialogClose variant="outline">Tutup</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
