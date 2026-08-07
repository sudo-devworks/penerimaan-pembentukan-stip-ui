import type { Meta, StoryObj } from "@storybook/react-vite";
import { Columns3, Download } from "lucide-react";

import { Button } from "../../actions/button";
import { ButtonGroup } from "../../actions/button-group";
import { Select } from "../../forms/select";
import { TableToolbar } from "./TableToolbar";

const meta = {
  title: "Composite/TableToolbar",
  component: TableToolbar,
  tags: ["autodocs"],
} satisfies Meta<typeof TableToolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TableToolbar
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button leadingIcon={<Columns3 aria-hidden />} variant="outline">
            Atur Kolom
          </Button>

          <Button leadingIcon={<Download aria-hidden />} variant="outline">
            Ekspor
          </Button>
        </ButtonGroup>
      }
      controls={
        <Select aria-label="Jumlah baris per halaman" defaultValue="20">
          <option value="20">20 baris</option>
          <option value="50">50 baris</option>
          <option value="100">100 baris</option>
        </Select>
      }
      description="Menampilkan 1–20 dari 128 data"
      title="Daftar peserta"
    />
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <TableToolbar
      aria-label="Pengaturan tampilan tabel"
      actions={<Button variant="outline">Atur Kolom</Button>}
      controls={
        <Select aria-label="Kepadatan tabel" defaultValue="comfortable">
          <option value="comfortable">Nyaman</option>
          <option value="compact">Ringkas</option>
        </Select>
      }
    />
  ),
};
