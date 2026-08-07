import type { Meta, StoryObj } from "@storybook/react-vite";

import { FoundationShowcase } from "../../foundations/showcase";

import "../../foundations/showcase/FoundationShowcase.css";

const meta = {
  title: "01 Foundations/Foundation Showcase",
  component: FoundationShowcase,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof FoundationShowcase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const MobileStress: Story = {
  globals: {
    viewport: {
      value: "mobileStress",
      isRotated: false,
    },
    portal: "participant",
    density: "comfortable",
  },
};

export const MobilePrimary: Story = {
  globals: {
    viewport: {
      value: "mobilePrimary",
      isRotated: false,
    },
    portal: "participant",
    density: "comfortable",
  },
};

export const Tablet: Story = {
  globals: {
    viewport: {
      value: "tabletPortrait",
      isRotated: false,
    },
    portal: "participant",
    density: "comfortable",
  },
};

export const Desktop: Story = {
  globals: {
    viewport: {
      value: "desktopPrimary",
      isRotated: false,
    },
    portal: "internal",
    density: "default",
  },
};

export const WideDesktop: Story = {
  globals: {
    viewport: {
      value: "desktopWide",
      isRotated: false,
    },
    portal: "public",
    density: "comfortable",
  },
};
