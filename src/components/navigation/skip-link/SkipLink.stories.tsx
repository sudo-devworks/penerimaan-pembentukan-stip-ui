import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkipLink } from "./SkipLink";

const meta = {
  title: "Components/Navigation/SkipLink",
  component: SkipLink,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lewati ke konten utama",
  },
  render: () => (
    <>
      <SkipLink>Lewati ke konten utama</SkipLink>

      <header
        style={{
          padding: "24px",
          minHeight: "120px",
        }}
      >
        Tekan Tab untuk menampilkan SkipLink.
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        style={{
          padding: "24px",
          minHeight: "400px",
        }}
      >
        <h1>Konten utama</h1>
      </main>
    </>
  ),
};

export const CustomTarget: Story = {
  args: {
    children: "Lewati ke data peserta",
    href: "#participant-content",
  },
  render: () => (
    <>
      <SkipLink href="#participant-content">Lewati ke data peserta</SkipLink>

      <nav
        style={{
          padding: "24px",
        }}
      >
        Area navigasi
      </nav>

      <main
        id="participant-content"
        tabIndex={-1}
        style={{
          padding: "24px",
        }}
      >
        <h1>Data peserta</h1>
      </main>
    </>
  ),
};
