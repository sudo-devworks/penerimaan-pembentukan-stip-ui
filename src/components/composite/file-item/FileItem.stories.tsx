import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileText, Trash2 } from "lucide-react";

import { Button } from "../../actions/button";
import { IconButton } from "../../actions/icon-button";
import { ProgressIndicator } from "../../feedback/progress-indicator";
import { FileItem } from "./FileItem";

const meta = {
  title: "Composite/FileItem",
  component: FileItem,
  tags: ["autodocs"],
  args: {
    name: "dokumen.pdf",
  },
} satisfies Meta<typeof FileItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Uploaded: Story = {
  args: {
    actions: (
      <IconButton
        aria-label="Hapus file"
        icon={<Trash2 aria-hidden />}
        variant="ghost"
      />
    ),
    description: "Dokumen PDF",
    metadata: (
      <>
        <span>1,2 MB</span>
        <span>Diunggah hari ini</span>
      </>
    ),
    preview: <FileText />,
    status: <span>Berhasil diunggah</span>,
    state: "success",
    name: "ijazah-terakhir.pdf",
  },
};

export const Uploading: Story = {
  args: {
    actions: <Button variant="text">Batalkan</Button>,
    description: "Sedang mengunggah file",
    metadata: <span>640 KB dari 1,2 MB</span>,
    preview: <FileText />,
    progress: <ProgressIndicator label="Progres unggah" value={50} />,
    status: <span>50%</span>,
    state: "uploading",
    name: "ijazah-terakhir.pdf",
  },
};

export const Error: Story = {
  args: {
    actions: <Button variant="outline">Coba Lagi</Button>,
    description: "File gagal diunggah. Periksa koneksi Anda.",
    preview: <FileText />,
    status: <span>Gagal</span>,
    state: "error",
    name: "ijazah-terakhir.pdf",
  },
};

export const Mobile: Story = {
  ...Uploaded,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
