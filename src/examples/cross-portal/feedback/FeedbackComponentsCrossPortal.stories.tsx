import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeedbackComponentsCrossPortal } from "./FeedbackComponentsCrossPortal";

const meta = {
  title: "Examples/Cross Portal/Feedback Components",
  component: FeedbackComponentsCrossPortal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeedbackComponentsCrossPortal>;

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
