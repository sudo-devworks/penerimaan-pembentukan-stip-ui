export type ColorToken = {
  name: string;
  variable: string;
  value: string;
  usage?: string;
};

export type ColorGroup = {
  name: string;
  description: string;
  colors: ColorToken[];
};

export const brandColorGroups: ColorGroup[] = [
  {
    name: "STIP Navy",
    description:
      "Identitas institusi, primary action, navigation, dan strong surface.",
    colors: [
      {
        name: "Navy 25",
        variable: "--primitive-color-navy-25",
        value: "#F5F8FA",
      },
      {
        name: "Navy 50",
        variable: "--primitive-color-navy-50",
        value: "#EEF4F7",
        usage: "Subtle institutional surface",
      },
      {
        name: "Navy 100",
        variable: "--primitive-color-navy-100",
        value: "#DCE8EF",
      },
      {
        name: "Navy 200",
        variable: "--primitive-color-navy-200",
        value: "#BCD2DF",
      },
      {
        name: "Navy 300",
        variable: "--primitive-color-navy-300",
        value: "#91B4C8",
      },
      {
        name: "Navy 400",
        variable: "--primitive-color-navy-400",
        value: "#6090AD",
      },
      {
        name: "Navy 500",
        variable: "--primitive-color-navy-500",
        value: "#3E7191",
      },
      {
        name: "Navy 600",
        variable: "--primitive-color-navy-600",
        value: "#1D628C",
      },
      {
        name: "Navy 700",
        variable: "--primitive-color-navy-700",
        value: "#174D73",
      },
      {
        name: "Navy 800",
        variable: "--primitive-color-navy-800",
        value: "#123A5A",
        usage: "Primary action hover",
      },
      {
        name: "Navy 900",
        variable: "--primitive-color-navy-900",
        value: "#0B2239",
        usage: "Primary brand dan primary action",
      },
      {
        name: "Navy 950",
        variable: "--primitive-color-navy-950",
        value: "#071826",
        usage: "Primary action pressed",
      },
    ],
  },
  {
    name: "Maritime Cyan",
    description:
      "Interactive accent, focus, link, selected state, dan information emphasis.",
    colors: [
      {
        name: "Cyan 25",
        variable: "--primitive-color-cyan-25",
        value: "#F5FEFF",
      },
      {
        name: "Cyan 50",
        variable: "--primitive-color-cyan-50",
        value: "#ECFEFF",
        usage: "Subtle accent surface",
      },
      {
        name: "Cyan 100",
        variable: "--primitive-color-cyan-100",
        value: "#CFFAFE",
        usage: "Selected background",
      },
      {
        name: "Cyan 200",
        variable: "--primitive-color-cyan-200",
        value: "#A5F3FC",
      },
      {
        name: "Cyan 300",
        variable: "--primitive-color-cyan-300",
        value: "#67E8F9",
      },
      {
        name: "Cyan 400",
        variable: "--primitive-color-cyan-400",
        value: "#22D3EE",
      },
      {
        name: "Cyan 500",
        variable: "--primitive-color-cyan-500",
        value: "#06B6D4",
        usage: "Graphic accent",
      },
      {
        name: "Cyan 600",
        variable: "--primitive-color-cyan-600",
        value: "#0891B2",
        usage: "Focus ring dan icon accent",
      },
      {
        name: "Cyan 700",
        variable: "--primitive-color-cyan-700",
        value: "#0E7490",
        usage: "Accessible link dan selected border",
      },
      {
        name: "Cyan 800",
        variable: "--primitive-color-cyan-800",
        value: "#155E75",
        usage: "Link hover",
      },
      {
        name: "Cyan 900",
        variable: "--primitive-color-cyan-900",
        value: "#164E63",
      },
      {
        name: "Cyan 950",
        variable: "--primitive-color-cyan-950",
        value: "#083344",
      },
    ],
  },
  {
    name: "Maritime Gold",
    description:
      "Supporting emphasis institusional yang digunakan secara terbatas.",
    colors: [
      {
        name: "Gold 25",
        variable: "--primitive-color-gold-25",
        value: "#FFFDF5",
      },
      {
        name: "Gold 50",
        variable: "--primitive-color-gold-50",
        value: "#FFFBEB",
        usage: "Featured surface",
      },
      {
        name: "Gold 100",
        variable: "--primitive-color-gold-100",
        value: "#FEF3C7",
        usage: "Supporting highlight",
      },
      {
        name: "Gold 200",
        variable: "--primitive-color-gold-200",
        value: "#FDE68A",
      },
      {
        name: "Gold 300",
        variable: "--primitive-color-gold-300",
        value: "#FCD34D",
      },
      {
        name: "Gold 400",
        variable: "--primitive-color-gold-400",
        value: "#FBBF24",
      },
      {
        name: "Gold 500",
        variable: "--primitive-color-gold-500",
        value: "#EAB308",
        usage: "Supporting brand accent",
      },
      {
        name: "Gold 600",
        variable: "--primitive-color-gold-600",
        value: "#CA8A04",
      },
      {
        name: "Gold 700",
        variable: "--primitive-color-gold-700",
        value: "#A16207",
        usage: "Accessible emphasis text",
      },
      {
        name: "Gold 800",
        variable: "--primitive-color-gold-800",
        value: "#854D0E",
      },
      {
        name: "Gold 900",
        variable: "--primitive-color-gold-900",
        value: "#713F12",
      },
      {
        name: "Gold 950",
        variable: "--primitive-color-gold-950",
        value: "#422006",
      },
    ],
  },
];

export const neutralColorGroups: ColorGroup[] = [
  {
    name: "Cool Neutral",
    description:
      "Teks, surface, border, disabled state, separator, dan hierarchy.",
    colors: [
      {
        name: "Neutral 0",
        variable: "--primitive-color-neutral-0",
        value: "#FFFFFF",
        usage: "Raised surface",
      },
      {
        name: "Neutral 25",
        variable: "--primitive-color-neutral-25",
        value: "#FCFCFD",
      },
      {
        name: "Neutral 50",
        variable: "--primitive-color-neutral-50",
        value: "#F9FAFB",
        usage: "Page background",
      },
      {
        name: "Neutral 100",
        variable: "--primitive-color-neutral-100",
        value: "#F3F4F6",
        usage: "Muted surface",
      },
      {
        name: "Neutral 200",
        variable: "--primitive-color-neutral-200",
        value: "#E5E7EB",
        usage: "Default border",
      },
      {
        name: "Neutral 300",
        variable: "--primitive-color-neutral-300",
        value: "#D1D5DB",
        usage: "Strong border",
      },
      {
        name: "Neutral 400",
        variable: "--primitive-color-neutral-400",
        value: "#9CA3AF",
        usage: "Disabled content",
      },
      {
        name: "Neutral 500",
        variable: "--primitive-color-neutral-500",
        value: "#6B7280",
        usage: "Muted text dan placeholder",
      },
      {
        name: "Neutral 600",
        variable: "--primitive-color-neutral-600",
        value: "#4B5563",
        usage: "Supporting text",
      },
      {
        name: "Neutral 700",
        variable: "--primitive-color-neutral-700",
        value: "#374151",
        usage: "Secondary text",
      },
      {
        name: "Neutral 800",
        variable: "--primitive-color-neutral-800",
        value: "#1F2937",
      },
      {
        name: "Neutral 900",
        variable: "--primitive-color-neutral-900",
        value: "#111827",
      },
      {
        name: "Neutral 950",
        variable: "--primitive-color-neutral-950",
        value: "#0F172A",
        usage: "Primary text",
      },
    ],
  },
];

export const semanticColorGroups: ColorGroup[] = [
  {
    name: "Information",
    description:
      "Informasi proses, bantuan, progress, dan status informational.",
    colors: [
      {
        name: "Information 50",
        variable: "--primitive-color-information-50",
        value: "#EFF6FF",
        usage: "Subtle surface",
      },
      {
        name: "Information 100",
        variable: "--primitive-color-information-100",
        value: "#DBEAFE",
      },
      {
        name: "Information 200",
        variable: "--primitive-color-information-200",
        value: "#BFDBFE",
        usage: "Border",
      },
      {
        name: "Information 500",
        variable: "--primitive-color-information-500",
        value: "#3B82F6",
      },
      {
        name: "Information 600",
        variable: "--primitive-color-information-600",
        value: "#2563EB",
        usage: "Icon",
      },
      {
        name: "Information 700",
        variable: "--primitive-color-information-700",
        value: "#1D4ED8",
        usage: "Text dan strong surface",
      },
      {
        name: "Information 800",
        variable: "--primitive-color-information-800",
        value: "#1E40AF",
      },
    ],
  },
  {
    name: "Success",
    description: "Status berhasil, diterima, lulus, selesai, dan verified.",
    colors: [
      {
        name: "Success 50",
        variable: "--primitive-color-success-50",
        value: "#F0FDF4",
        usage: "Subtle surface",
      },
      {
        name: "Success 100",
        variable: "--primitive-color-success-100",
        value: "#DCFCE7",
      },
      {
        name: "Success 200",
        variable: "--primitive-color-success-200",
        value: "#BBF7D0",
        usage: "Border",
      },
      {
        name: "Success 500",
        variable: "--primitive-color-success-500",
        value: "#22C55E",
      },
      {
        name: "Success 600",
        variable: "--primitive-color-success-600",
        value: "#16A34A",
        usage: "Icon",
      },
      {
        name: "Success 700",
        variable: "--primitive-color-success-700",
        value: "#15803D",
        usage: "Text dan strong surface",
      },
      {
        name: "Success 800",
        variable: "--primitive-color-success-800",
        value: "#166534",
      },
    ],
  },
  {
    name: "Warning",
    description:
      "Status tertunda, mendekati deadline, perlu perhatian, dan perbaikan.",
    colors: [
      {
        name: "Warning 50",
        variable: "--primitive-color-warning-50",
        value: "#FFFBEB",
        usage: "Subtle surface",
      },
      {
        name: "Warning 100",
        variable: "--primitive-color-warning-100",
        value: "#FEF3C7",
      },
      {
        name: "Warning 200",
        variable: "--primitive-color-warning-200",
        value: "#FDE68A",
        usage: "Border",
      },
      {
        name: "Warning 500",
        variable: "--primitive-color-warning-500",
        value: "#F59E0B",
      },
      {
        name: "Warning 600",
        variable: "--primitive-color-warning-600",
        value: "#D97706",
        usage: "Icon",
      },
      {
        name: "Warning 700",
        variable: "--primitive-color-warning-700",
        value: "#B45309",
      },
      {
        name: "Warning 800",
        variable: "--primitive-color-warning-800",
        value: "#92400E",
        usage: "Text dan strong surface",
      },
    ],
  },
  {
    name: "Danger",
    description:
      "Status gagal, ditolak, tidak lulus, destructive action, dan error.",
    colors: [
      {
        name: "Danger 50",
        variable: "--primitive-color-danger-50",
        value: "#FEF2F2",
        usage: "Subtle surface",
      },
      {
        name: "Danger 100",
        variable: "--primitive-color-danger-100",
        value: "#FEE2E2",
      },
      {
        name: "Danger 200",
        variable: "--primitive-color-danger-200",
        value: "#FECACA",
        usage: "Border",
      },
      {
        name: "Danger 500",
        variable: "--primitive-color-danger-500",
        value: "#EF4444",
      },
      {
        name: "Danger 600",
        variable: "--primitive-color-danger-600",
        value: "#DC2626",
        usage: "Icon",
      },
      {
        name: "Danger 700",
        variable: "--primitive-color-danger-700",
        value: "#B91C1C",
        usage: "Text dan destructive action",
      },
      {
        name: "Danger 800",
        variable: "--primitive-color-danger-800",
        value: "#991B1B",
        usage: "Hover dan strong emphasis",
      },
    ],
  },
];
