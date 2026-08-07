import type { Meta, StoryObj } from "@storybook/react-vite";

import { CrossPortalShowcase } from "../../examples/cross-portal";

import "../../examples/cross-portal/CrossPortalShowcase.css";

const meta = {
  title: "11 Cross-Portal Examples/Shared System Different Composition",

  component: CrossPortalShowcase,

  parameters: {
    layout: "fullscreen",
  },

  globals: {
    portal: "internal",
    density: "default",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof CrossPortalShowcase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const MobilePrimary: Story = {
  globals: {
    portal: "participant",
    density: "comfortable",

    viewport: {
      value: "mobilePrimary",
      isRotated: false,
    },
  },
};

export const Tablet: Story = {
  globals: {
    portal: "participant",
    density: "comfortable",

    viewport: {
      value: "tabletPortrait",
      isRotated: false,
    },
  },
};

export const Desktop: Story = {
  globals: {
    portal: "internal",
    density: "default",

    viewport: {
      value: "desktopPrimary",
      isRotated: false,
    },
  },
};
