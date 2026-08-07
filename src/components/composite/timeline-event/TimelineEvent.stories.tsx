import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check, Clock3 } from "lucide-react";

import { Button } from "../../actions/button";
import { TimelineEvent } from "./TimelineEvent";

const meta = {
  title: "Composite/TimelineEvent",
  component: TimelineEvent,
  tags: ["autodocs"],
  args: {
    title: "Tahapan proses",
  },
  decorators: [
    (Story) => (
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          maxWidth: "48rem",
        }}
      >
        <Story />
      </ol>
    ),
  ],
} satisfies Meta<typeof TimelineEvent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Completed: Story = {
  args: {
    description: "Tahapan telah berhasil diselesaikan.",
    icon: <Check />,
    metadata: <span>Diverifikasi oleh Admin</span>,
    state: "completed",
    timestamp: "5 Agustus 2026",
    title: "Verifikasi administrasi",
  },
};

export const Current: Story = {
  args: {
    actions: <Button variant="primary">Lanjutkan</Button>,
    description: "Lengkapi data yang masih diperlukan.",
    icon: <Clock3 />,
    state: "current",
    timestamp: "Sedang berlangsung",
    title: "Lengkapi biodata",
  },
};

export const Sequence: Story = {
  render: () => (
    <>
      <TimelineEvent
        description="Pendaftaran berhasil dibuat."
        icon={<Check />}
        state="completed"
        timestamp="1 Agustus 2026"
        title="Pendaftaran"
      />

      <TimelineEvent
        description="Pembayaran telah diterima."
        icon={<Check />}
        state="completed"
        timestamp="2 Agustus 2026"
        title="Pembayaran formulir"
      />

      <TimelineEvent
        actions={<Button variant="primary">Lanjutkan</Button>}
        description="Lengkapi biodata dan dokumen."
        icon={<Clock3 />}
        last
        state="current"
        timestamp="Sedang berlangsung"
        title="Kelengkapan data"
      />
    </>
  ),
};
