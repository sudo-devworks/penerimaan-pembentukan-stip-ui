import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Pagination } from "./Pagination";

const meta = {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
  },
  args: {
    page: 4,
    totalPages: 12,
    onPageChange: () => undefined,
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

const ButtonPaginationExample = ({
  totalPages = 12,
  initialPage = 4,
}: {
  totalPages?: number;
  initialPage?: number;
}) => {
  const [page, setPage] = useState(initialPage);

  return (
    <Pagination
      page={page}
      totalPages={totalPages}
      onPageChange={(nextPage) => setPage(nextPage)}
    />
  );
};

export const ButtonMode: Story = {
  render: () => <ButtonPaginationExample />,
};

export const LinkMode: Story = {
  args: {
    mode: "link",
    page: 4,
    totalPages: 12,
    getPageHref: (page) => `/peserta?page=${page}`,
    onPageChange: undefined,
  },
};

export const FirstPage: Story = {
  args: {
    page: 1,
    totalPages: 12,
  },
};

export const LastPage: Story = {
  args: {
    page: 12,
    totalPages: 12,
  },
};

export const LargeDataset: Story = {
  render: () => <ButtonPaginationExample totalPages={120} initialPage={58} />,
};

export const FewPages: Story = {
  render: () => <ButtonPaginationExample totalPages={4} initialPage={2} />,
};

export const WithoutFirstLast: Story = {
  args: {
    showFirstLast: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const MobileCompact: Story = {
  render: () => <ButtonPaginationExample totalPages={32} initialPage={14} />,
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const DensityComparison: Story = {
  args: {
    page: 4,
    totalPages: 12,
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "32px",
      }}
    >
      {["comfortable", "default", "compact"].map((density) => (
        <div key={density} data-density={density}>
          <p
            style={{
              margin: "0 0 8px",
            }}
          >
            {density}
          </p>

          <Pagination page={4} totalPages={12} onPageChange={() => undefined} />
        </div>
      ))}
    </div>
  ),
};
