import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavigationComponentsCrossPortal } from "./NavigationComponentsCrossPortal";

const meta = {
  title: "Examples/Cross Portal/Navigation Components",
  component: NavigationComponentsCrossPortal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationComponentsCrossPortal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DesktopPrimary: Story = {};

export const MobilePrimary: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobilePrimary",
    },
  },
};

export const MobileStress: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};

export const TabletPortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tabletPortrait",
    },
  },
};

export const DesktopWide: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktopWide",
    },
  },
};
