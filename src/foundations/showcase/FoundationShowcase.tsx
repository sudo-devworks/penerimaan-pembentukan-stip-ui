import {
  Accessibility,
  Anchor,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
  Palette,
  Ruler,
  Type,
} from "lucide-react";

const foundations = [
  {
    title: "Color",
    description:
      "Brand, neutral, surface, text, action, dan semantic feedback colors.",
    icon: Palette,
  },
  {
    title: "Typography",
    description:
      "Inter typography scale untuk heading, body, label, caption, dan angka.",
    icon: Type,
  },
  {
    title: "Spacing",
    description:
      "Sistem spacing berbasis kelipatan 4 px untuk komponen dan layout.",
    icon: Ruler,
  },
  {
    title: "Density",
    description:
      "Comfortable, Default, dan Compact untuk kebutuhan lintasportal.",
    icon: Layers3,
  },
  {
    title: "Responsive",
    description: "Validasi pada viewport 320, 390, 768, 1440, dan 1600 piksel.",
    icon: MonitorSmartphone,
  },
  {
    title: "Accessibility",
    description:
      "Focus, contrast, keyboard, touch target, reduced motion, dan reflow.",
    icon: Accessibility,
  },
];

export function FoundationShowcase() {
  return (
    <article className="foundation-showcase">
      <header className="foundation-showcase__hero">
        <div className="foundation-showcase__brand" aria-hidden="true">
          <Anchor size={24} strokeWidth={2} />
        </div>

        <div className="foundation-showcase__hero-content">
          <p className="foundation-showcase__eyebrow">
            MOCKUP-06-P3.1 · Foundation v0.1
          </p>

          <h1 className="foundation-showcase__title">
            Global Component Library
          </h1>

          <p className="foundation-showcase__description">
            Fondasi visual untuk Public Website, Portal Peserta, dan Portal
            Internal Penerimaan Pembentukan STIP.
          </p>
        </div>

        <div className="foundation-showcase__status" role="status">
          <CheckCircle2 size={18} aria-hidden="true" />
          In Review
        </div>
      </header>

      <section
        className="foundation-showcase__summary"
        aria-labelledby="visual-direction-title"
      >
        <div>
          <p className="foundation-showcase__section-label">Visual Direction</p>

          <h2
            id="visual-direction-title"
            className="foundation-showcase__section-title"
          >
            Maritime Institutional Modern
          </h2>
        </div>

        <p className="foundation-showcase__summary-text">
          Resmi, modern, terpercaya, bersih, terstruktur, tenang, accessible,
          dan memiliki identitas maritim secara halus.
        </p>
      </section>

      <section
        className="foundation-showcase__grid"
        aria-label="Daftar fondasi visual"
      >
        {foundations.map((foundation) => {
          const Icon = foundation.icon;

          return (
            <article
              key={foundation.title}
              className="foundation-showcase__card"
            >
              <div
                className="foundation-showcase__card-icon"
                aria-hidden="true"
              >
                <Icon size={22} strokeWidth={2} />
              </div>

              <h2 className="foundation-showcase__card-title">
                {foundation.title}
              </h2>

              <p className="foundation-showcase__card-description">
                {foundation.description}
              </p>
            </article>
          );
        })}
      </section>

      <aside className="foundation-showcase__notice">
        <CheckCircle2 size={20} aria-hidden="true" />

        <div>
          <h2 className="foundation-showcase__notice-title">
            Data dummy dan token-based
          </h2>

          <p className="foundation-showcase__notice-text">
            Showcase ini bukan aplikasi production dan tidak menggunakan data
            peserta nyata.
          </p>
        </div>
      </aside>
    </article>
  );
}
