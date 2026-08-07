import type { Meta, StoryObj } from "@storybook/react-vite";
import { Archive, CheckCircle2, Trash2 } from "lucide-react";

import { Button } from "../../actions/button";
import { ButtonGroup } from "../../actions/button-group";
import { BulkActionBar } from "./BulkActionBar";

const meta = {
  title: "Composite/BulkActionBar",
  component: BulkActionBar,
  tags: ["autodocs"],
  args: {
    summary: "Data dipilih",
    actions: null,
  },
} satisfies Meta<typeof BulkActionBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BulkActionBar
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button
            leadingIcon={<CheckCircle2 aria-hidden />}
            variant="secondary"
          >
            Ubah Status
          </Button>

          <Button leadingIcon={<Archive aria-hidden />} variant="outline">
            Arsipkan
          </Button>

          <Button leadingIcon={<Trash2 aria-hidden />} variant="destructive">
            Hapus
          </Button>
        </ButtonGroup>
      }
      clearAction={<Button variant="text">Batalkan Pilihan</Button>}
      description="Aksi akan diterapkan pada seluruh peserta terpilih."
      summary="3 peserta dipilih"
    />
  ),
};

export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
