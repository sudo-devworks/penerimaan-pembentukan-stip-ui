import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../actions/button";

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const meta = {
  title: "Overlay/Dialog",
  component: Dialog,
  args: {
    children: null,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Lihat peserta</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail peserta</DialogTitle>

          <DialogDescription>
            Informasi pendaftaran dan status peserta.
          </DialogDescription>
        </DialogHeader>

        <DialogBody>
          <p>Nomor pendaftaran: PP-STIP-2026-00124</p>
        </DialogBody>

        <DialogFooter>
          <DialogClose variant="outline">Tutup</DialogClose>

          <Button>Buka detail lengkap</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LargeContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Tinjau biodata</DialogTrigger>

      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Tinjau biodata peserta</DialogTitle>

          <DialogDescription>
            Pastikan data sudah sesuai sebelum melanjutkan.
          </DialogDescription>
        </DialogHeader>

        <DialogBody>
          <p>Konten biodata dapat disusun menggunakan Form Components.</p>
        </DialogBody>

        <DialogFooter>
          <DialogClose variant="outline">Batal</DialogClose>

          <Button>Simpan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
