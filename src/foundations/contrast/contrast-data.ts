export type ContrastPair = {
  name: string;
  foregroundVariable: string;
  backgroundVariable: string;
  foregroundValue: string;
  backgroundValue: string;
  ratio: number;
  usage: string;
  level: "AAA" | "AA" | "Large Text Only" | "Fail";
};

export type ContrastGroup = {
  name: string;
  description: string;
  pairs: ContrastPair[];
};

export const contrastGroups: ContrastGroup[] = [
  {
    name: "Text and Surface",
    description:
      "Kombinasi utama untuk teks, metadata, link, dan institutional surface.",
    pairs: [
      {
        name: "Primary Text on White",
        foregroundVariable: "--color-text-primary",
        backgroundVariable: "--color-surface-default",
        foregroundValue: "#0F172A",
        backgroundValue: "#FFFFFF",
        ratio: 17.85,
        usage: "Body dan heading utama",
        level: "AAA",
      },
      {
        name: "Secondary Text on White",
        foregroundVariable: "--color-text-secondary",
        backgroundVariable: "--color-surface-default",
        foregroundValue: "#374151",
        backgroundValue: "#FFFFFF",
        ratio: 10.31,
        usage: "Description dan supporting content",
        level: "AAA",
      },
      {
        name: "Supporting Text on White",
        foregroundVariable: "--color-text-supporting",
        backgroundVariable: "--color-surface-default",
        foregroundValue: "#4B5563",
        backgroundValue: "#FFFFFF",
        ratio: 7.56,
        usage: "Metadata dan helper text",
        level: "AAA",
      },
      {
        name: "Muted Text on White",
        foregroundVariable: "--color-text-muted",
        backgroundVariable: "--color-surface-default",
        foregroundValue: "#6B7280",
        backgroundValue: "#FFFFFF",
        ratio: 4.83,
        usage: "Placeholder dan informasi nonkritis",
        level: "AA",
      },
      {
        name: "White on Navy 900",
        foregroundVariable: "--color-text-on-primary",
        backgroundVariable: "--color-surface-brand-strong",
        foregroundValue: "#FFFFFF",
        backgroundValue: "#0B2239",
        ratio: 16.13,
        usage: "Primary action dan strong institutional surface",
        level: "AAA",
      },
      {
        name: "Cyan 700 on White",
        foregroundVariable: "--color-text-link",
        backgroundVariable: "--color-surface-default",
        foregroundValue: "#0E7490",
        backgroundValue: "#FFFFFF",
        ratio: 5.36,
        usage: "Link dan interactive text",
        level: "AA",
      },
    ],
  },
  {
    name: "Semantic Feedback",
    description:
      "Kombinasi untuk status, inline feedback, alert, badge, dan callout.",
    pairs: [
      {
        name: "Information Text on Subtle",
        foregroundVariable: "--color-information-text",
        backgroundVariable: "--color-information-surface-subtle",
        foregroundValue: "#1D4ED8",
        backgroundValue: "#EFF6FF",
        ratio: 6.16,
        usage: "Informasi proses",
        level: "AA",
      },
      {
        name: "Success Text on Subtle",
        foregroundVariable: "--color-success-text",
        backgroundVariable: "--color-success-surface-subtle",
        foregroundValue: "#15803D",
        backgroundValue: "#F0FDF4",
        ratio: 4.79,
        usage: "Status berhasil dan diterima",
        level: "AA",
      },
      {
        name: "Warning Text on Subtle",
        foregroundVariable: "--color-warning-text",
        backgroundVariable: "--color-warning-surface-subtle",
        foregroundValue: "#92400E",
        backgroundValue: "#FFFBEB",
        ratio: 6.84,
        usage: "Deadline dan perhatian",
        level: "AAA",
      },
      {
        name: "Danger Text on Subtle",
        foregroundVariable: "--color-danger-text",
        backgroundVariable: "--color-danger-surface-subtle",
        foregroundValue: "#B91C1C",
        backgroundValue: "#FEF2F2",
        ratio: 5.91,
        usage: "Error dan penolakan",
        level: "AA",
      },
    ],
  },
  {
    name: "Action",
    description: "Kombinasi foreground dan background untuk action utama.",
    pairs: [
      {
        name: "Primary Action",
        foregroundVariable: "--color-action-primary-foreground",
        backgroundVariable: "--color-action-primary-background",
        foregroundValue: "#FFFFFF",
        backgroundValue: "#0B2239",
        ratio: 16.13,
        usage: "Primary button",
        level: "AAA",
      },
      {
        name: "Primary Action Hover",
        foregroundVariable: "--color-action-primary-foreground",
        backgroundVariable: "--color-action-primary-background-hover",
        foregroundValue: "#FFFFFF",
        backgroundValue: "#123A5A",
        ratio: 11.81,
        usage: "Primary button hover",
        level: "AAA",
      },
      {
        name: "Destructive Action",
        foregroundVariable: "--color-action-danger-foreground",
        backgroundVariable: "--color-action-danger-background",
        foregroundValue: "#FFFFFF",
        backgroundValue: "#B91C1C",
        ratio: 6.47,
        usage: "Destructive button",
        level: "AA",
      },
    ],
  },
];
