import type { Meta, StoryObj } from "@storybook/react-vite";

import { TypographyShowcase } from "../../foundations/typography";

import "../../foundations/typography/TypographyShowcase.css";

const meta = {
  title: "01 Foundations/Typography/Scale and Stress Test",
  component: TypographyShowcase,

  parameters: {
    layout: "fullscreen",
  },

  globals: {
    portal: "internal",
    density: "default",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof TypographyShowcase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const MobileStress: Story = {
  globals: {
    portal: "participant",
    density: "comfortable",
    viewport: {
      value: "mobileStress",
      isRotated: false,
    },
  },
};

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
