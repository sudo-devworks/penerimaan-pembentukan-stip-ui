import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../actions/button";

import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";

const meta = {
  title: "Overlay/Drawer",
  component: Drawer,
  args: {
    children: null,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RightPanel: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger>Buka filter peserta</DrawerTrigger>

      <DrawerContent placement="right">
        <DrawerHeader>
          <DrawerTitle>Filter peserta</DrawerTitle>

          <DrawerDescription>
            Persempit daftar peserta berdasarkan status dan program.
          </DrawerDescription>
        </DrawerHeader>

        <DrawerBody>
          Konten filter dapat disusun menggunakan Form Components.
        </DrawerBody>

        <DrawerFooter>
          <DrawerClose variant="outline">Batal</DrawerClose>

          <Button>Terapkan filter</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const LeftNavigationComposition: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger variant="outline">Buka navigasi</DrawerTrigger>

      <DrawerContent placement="left" size="sm">
        <DrawerHeader>
          <DrawerTitle>Navigasi portal</DrawerTitle>

          <DrawerDescription>
            Contoh composition untuk navigasi mobile.
          </DrawerDescription>
        </DrawerHeader>

        <DrawerBody>
          Navigation Components ditempatkan oleh consumer di area ini.
        </DrawerBody>

        <DrawerFooter>
          <DrawerClose variant="outline">Tutup</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const MobileBottomPanel: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger variant="outline">Pilih tindakan</DrawerTrigger>

      <DrawerContent placement="bottom" size="sm">
        <DrawerHeader>
          <DrawerTitle>Tindakan peserta</DrawerTitle>

          <DrawerDescription>
            Bottom placement dipilih eksplisit oleh consumer.
          </DrawerDescription>
        </DrawerHeader>

        <DrawerBody>
          Drawer tidak berubah otomatis menjadi bottom sheet berdasarkan
          viewport.
        </DrawerBody>

        <DrawerFooter>
          <DrawerClose variant="outline">Tutup</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
