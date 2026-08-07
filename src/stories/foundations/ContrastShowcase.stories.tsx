import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContrastShowcase } from "../../foundations/contrast";

import "../../foundations/contrast/ContrastShowcase.css";

const meta = {
  title: "01 Foundations/Color/Semantic Pairing and Contrast",

  component: ContrastShowcase,

  parameters: {
    layout: "fullscreen",
  },

  globals: {
    portal: "internal",
    density: "default",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ContrastShowcase>;

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
