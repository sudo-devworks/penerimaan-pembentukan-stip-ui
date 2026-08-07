import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./index";

const meta = {
  title: "Overlay/Overview",
  parameters: {
    layout: "padded",

    docs: {
      description: {
        component:
          "Overlay Components menyediakan Dialog, AlertDialog, Drawer, Popover, Tooltip, dan Menu dengan portal rendering, focus management, dismissal, collision handling, scroll locking, serta nested overlay coordination.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentFamilies: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Dialog>
        <DialogTrigger>Dialog</DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>

            <DialogDescription>
              Task terfokus dengan modal focus dan backdrop.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose variant="outline">Tutup</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger variant="destructive">
          AlertDialog
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi penting</AlertDialogTitle>

            <AlertDialogDescription>
              Digunakan untuk keputusan dengan konsekuensi penting.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Batal</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Drawer>
        <DrawerTrigger variant="outline">Drawer</DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>

            <DrawerDescription>
              Panel kontekstual dari tepi viewport.
            </DrawerDescription>
          </DrawerHeader>

          <DrawerBody>Konten Drawer</DrawerBody>

          <DrawerFooter>
            <DrawerClose variant="outline">Tutup</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Popover>
        <PopoverTrigger variant="outline">Popover</PopoverTrigger>

        <PopoverContent>Konten interaktif kontekstual.</PopoverContent>
      </Popover>

      <Tooltip openDelay={0}>
        <TooltipTrigger variant="outline">Tooltip</TooltipTrigger>

        <TooltipContent>Bantuan singkat non-interaktif.</TooltipContent>
      </Tooltip>

      <Menu>
        <MenuTrigger variant="outline">Menu</MenuTrigger>

        <MenuContent aria-label="Contoh menu">
          <MenuItem textValue="Buka detail">Buka detail</MenuItem>

          <MenuItem textValue="Unduh dokumen">Unduh dokumen</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
};
