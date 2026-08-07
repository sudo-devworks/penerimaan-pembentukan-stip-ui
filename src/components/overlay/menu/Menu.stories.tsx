import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "./Menu";

const meta = {
  title: "Overlay/Menu",
  component: Menu,
  args: {
    children: null,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ActionMenu: Story = {
  render: () => (
    <Menu>
      <MenuTrigger variant="outline">Tindakan peserta</MenuTrigger>

      <MenuContent aria-label="Tindakan peserta">
        <MenuGroup>
          <MenuItem textValue="Buka detail">Buka detail</MenuItem>

          <MenuItem textValue="Unduh dokumen">Unduh dokumen</MenuItem>
        </MenuGroup>

        <MenuSeparator />

        <MenuItem textValue="Hapus peserta" destructive>
          Hapus peserta
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

const SelectionStory = () => {
  const [showCompleted, setShowCompleted] = useState(true);

  const [density, setDensity] = useState("comfortable");

  return (
    <Menu>
      <MenuTrigger variant="outline">Opsi tampilan</MenuTrigger>

      <MenuContent aria-label="Opsi tampilan">
        <MenuGroup>
          <MenuGroupLabel>Status</MenuGroupLabel>

          <MenuCheckboxItem
            textValue="Tampilkan proses selesai"
            checked={showCompleted}
            onCheckedChange={setShowCompleted}
          >
            Tampilkan proses selesai
          </MenuCheckboxItem>
        </MenuGroup>

        <MenuSeparator />

        <MenuRadioGroup value={density} onValueChange={setDensity}>
          <MenuGroupLabel>Kepadatan tampilan</MenuGroupLabel>

          <MenuRadioItem textValue="Nyaman" value="comfortable">
            Nyaman
          </MenuRadioItem>

          <MenuRadioItem textValue="Ringkas" value="compact">
            Ringkas
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
};

export const SelectionMenu: Story = {
  render: () => <SelectionStory />,
};
