import type { Decorator, Preview } from "@storybook/react-vite";

import "../src/styles/globals.css";
import "../src/styles/storybook-preview.css";

type PortalValue = "public" | "participant" | "internal";

type DensityValue = "comfortable" | "default" | "compact";

const portalLabels: Record<PortalValue, string> = {
  public: "Public Website",
  participant: "Portal Peserta",
  internal: "Portal Internal",
};

const densityLabels: Record<DensityValue, string> = {
  comfortable: "Comfortable",
  default: "Default",
  compact: "Compact",
};

const customViewports = {
  mobileStress: {
    name: "Mobile — Stress 320",
    styles: {
      width: "320px",
      height: "720px",
    },
    type: "mobile",
  },

  mobilePrimary: {
    name: "Mobile — Primary 390",
    styles: {
      width: "390px",
      height: "844px",
    },
    type: "mobile",
  },

  tabletPortrait: {
    name: "Tablet — Portrait 768",
    styles: {
      width: "768px",
      height: "1024px",
    },
    type: "tablet",
  },

  desktopPrimary: {
    name: "Desktop — Primary 1440",
    styles: {
      width: "1440px",
      height: "900px",
    },
    type: "desktop",
  },

  desktopWide: {
    name: "Desktop — Wide 1600",
    styles: {
      width: "1600px",
      height: "1000px",
    },
    type: "desktop",
  },
};

const withPortalAndDensity: Decorator = (Story, context) => {
  const portal =
    (context.globals.portal as PortalValue | undefined) ?? "participant";

  const density =
    (context.globals.density as DensityValue | undefined) ?? "comfortable";

  return (
    <div
      className="storybook-portal-preview"
      data-portal={portal}
      data-density={density}
      data-portal-label={portalLabels[portal]}
      data-density-label={densityLabels[density]}
    >
      <div className="storybook-portal-preview__content">
        <Story />
      </div>
    </div>
  );
};

const preview: Preview = {
  decorators: [withPortalAndDensity],

  globalTypes: {
    portal: {
      name: "Portal",
      description: "Komposisi portal yang sedang direview.",
      defaultValue: "participant",
      toolbar: {
        icon: "browser",
        items: [
          {
            value: "public",
            title: "Public Website",
          },
          {
            value: "participant",
            title: "Portal Peserta",
          },
          {
            value: "internal",
            title: "Portal Internal",
          },
        ],
        dynamicTitle: true,
      },
    },

    density: {
      name: "Density",
      description: "Tingkat kepadatan komponen.",
      defaultValue: "comfortable",
      toolbar: {
        icon: "component",
        items: [
          {
            value: "comfortable",
            title: "Comfortable",
          },
          {
            value: "default",
            title: "Default",
          },
          {
            value: "compact",
            title: "Compact",
          },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    portal: "participant",
    density: "comfortable",

    viewport: {
      value: "mobilePrimary",
      isRotated: false,
    },
  },

  parameters: {
    layout: "fullscreen",

    viewport: {
      options: customViewports,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          "00 Introduction",
          "01 Foundations",
          "02 Actions",
          "03 Forms",
          "04 Feedback",
          "05 Surfaces",
          "06 Navigation",
          "07 Data Display",
          "08 Overlays",
          "09 Composite",
          "10 Patterns",
          "11 Cross-Portal Examples",
          "12 Accessibility",
        ],
      },
    },
  },
};

export default preview;
