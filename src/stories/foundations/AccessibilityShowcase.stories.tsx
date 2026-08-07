import type { Meta, StoryObj } from "@storybook/react-vite";

import { AccessibilityShowcase } from "../../foundations/accessibility";

import "../../foundations/accessibility/AccessibilityShowcase.css";

const meta = {
  title: "12 Accessibility/Foundation Proof Validation",

  component: AccessibilityShowcase,

  parameters: {
    layout: "fullscreen",
  },

  globals: {
    portal: "participant",
    density: "comfortable",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AccessibilityShowcase>;

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
