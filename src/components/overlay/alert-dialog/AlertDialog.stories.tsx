import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../actions/button";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";

const meta = {
  title: "Overlay/AlertDialog",
  component: AlertDialog,
  args: {
    children: null,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DestructiveConfirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger variant="destructive">
        Hapus peserta
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus peserta?</AlertDialogTitle>

          <AlertDialogDescription>
            Data peserta akan dihapus dari daftar kegiatan. Tindakan ini tidak
            dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Batal</AlertDialogCancel>

          <Button variant="destructive">Hapus peserta</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const CriticalProcess: Story = {
  render: () => (
    <AlertDialog closeOnEscape={false}>
      <AlertDialogTrigger variant="outline">
        Batalkan finalisasi
      </AlertDialogTrigger>

      <AlertDialogContent size="md">
        <AlertDialogHeader>
          <AlertDialogTitle>Batalkan finalisasi biodata?</AlertDialogTitle>

          <AlertDialogDescription>
            Peserta akan dapat mengubah biodata kembali. Pastikan keputusan ini
            sudah mendapat persetujuan.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Kembali</AlertDialogCancel>

          <Button variant="destructive">Batalkan finalisasi</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
