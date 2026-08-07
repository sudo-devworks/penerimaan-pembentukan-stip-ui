import type { Meta, StoryObj } from "@storybook/react-vite";
import { Filter, RotateCcw } from "lucide-react";

import { Button } from "../../actions/button";
import { ButtonGroup } from "../../actions/button-group";
import { SearchInput } from "../../forms/search-input";
import { Select } from "../../forms/select";
import { FilterToolbar } from "./FilterToolbar";

const meta = {
  title: "Composite/FilterToolbar",
  component: FilterToolbar,
  tags: ["autodocs"],
} satisfies Meta<typeof FilterToolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ParticipantFilters: Story = {
  render: () => (
    <FilterToolbar
      actions={
        <ButtonGroup stackOnMobile stretchOnMobile>
          <Button leadingIcon={<RotateCcw aria-hidden />} variant="text">
            Reset Filter
          </Button>
        </ButtonGroup>
      }
      activeFilters={
        <>
          <span>Status: Aktif</span>
          <span>Program: Nautika</span>
        </>
      }
      filters={
        <>
          <Select aria-label="Filter status" defaultValue="">
            <option value="">Semua status</option>
            <option value="active">Aktif</option>
            <option value="completed">Selesai</option>
          </Select>

          <Select aria-label="Filter program" defaultValue="">
            <option value="">Semua program</option>
            <option value="nautika">Nautika</option>
            <option value="teknika">Teknika</option>
          </Select>
        </>
      }
      mobileFilterTrigger={
        <Button
          fullWidth
          leadingIcon={<Filter aria-hidden />}
          variant="outline"
        >
          Filter
        </Button>
      }
      resultsSummary="128 peserta ditemukan"
      search={
        <SearchInput
          aria-label="Cari peserta"
          clearable
          fullWidth
          placeholder="Cari nama atau nomor pendaftaran"
        />
      }
    />
  ),
};

export const Mobile: Story = {
  ...ParticipantFilters,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
