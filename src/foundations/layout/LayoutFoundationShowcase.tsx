import {
  Box,
  Layers3,
  MoveHorizontal,
  Ruler,
  ScanLine,
  Square,
} from "lucide-react";

const spacingTokens = [
  ["Space 1", "--primitive-space-1", "4 px"],
  ["Space 2", "--primitive-space-2", "8 px"],
  ["Space 3", "--primitive-space-3", "12 px"],
  ["Space 4", "--primitive-space-4", "16 px"],
  ["Space 5", "--primitive-space-5", "20 px"],
  ["Space 6", "--primitive-space-6", "24 px"],
  ["Space 8", "--primitive-space-8", "32 px"],
  ["Space 10", "--primitive-space-10", "40 px"],
  ["Space 12", "--primitive-space-12", "48 px"],
  ["Space 16", "--primitive-space-16", "64 px"],
];

const iconSizes = [
  ["XS", "--size-icon-xs", "12 px"],
  ["SM", "--size-icon-sm", "16 px"],
  ["MD", "--size-icon-md", "20 px"],
  ["LG", "--size-icon-lg", "24 px"],
  ["XL", "--size-icon-xl", "32 px"],
  ["2XL", "--size-icon-2xl", "40 px"],
  ["3XL", "--size-icon-3xl", "48 px"],
];

const radiusTokens = [
  ["XS", "--primitive-radius-xs", "4 px"],
  ["SM", "--primitive-radius-sm", "6 px"],
  ["MD", "--primitive-radius-md", "8 px"],
  ["LG", "--primitive-radius-lg", "12 px"],
  ["XL", "--primitive-radius-xl", "16 px"],
  ["2XL", "--primitive-radius-2xl", "20 px"],
  ["Full", "--primitive-radius-full", "Full"],
];

const shadowTokens = [
  ["None", "--primitive-shadow-none"],
  ["Low", "--primitive-shadow-low"],
  ["Medium", "--primitive-shadow-medium"],
  ["High", "--primitive-shadow-high"],
  ["Overlay", "--primitive-shadow-overlay"],
];

const densityModes = [
  {
    value: "comfortable",
    label: "Comfortable",
    usage: "Public Website dan Portal Peserta",
  },
  {
    value: "default",
    label: "Default",
    usage: "Sebagian besar Portal Internal",
  },
  {
    value: "compact",
    label: "Compact",
    usage: "Workspace operasional terbatas",
  },
] as const;

export function LayoutFoundationShowcase() {
  return (
    <article className="layout-foundation">
      <header className="layout-foundation__header">
        <div className="layout-foundation__header-icon" aria-hidden="true">
          <Ruler size={24} />
        </div>

        <div>
          <p className="layout-foundation__eyebrow">
            01 Foundations · Layout and Density
          </p>

          <h1 className="layout-foundation__title">
            Spacing, Sizing, Radius, Shadow, dan Density
          </h1>

          <p className="layout-foundation__description">
            Referensi visual untuk ukuran, jarak, surface, elevation, dan
            tingkat kepadatan komponen.
          </p>
        </div>
      </header>

      <section
        className="layout-foundation__section"
        aria-labelledby="spacing-title"
      >
        <header className="layout-foundation__section-header">
          <MoveHorizontal size={22} aria-hidden="true" />

          <div>
            <h2 id="spacing-title" className="layout-foundation__section-title">
              Spacing Scale
            </h2>

            <p className="layout-foundation__section-description">
              Layout utama menggunakan kelipatan 4 px.
            </p>
          </div>
        </header>

        <div className="layout-foundation__spacing-list">
          {spacingTokens.map(([name, variable, value]) => (
            <article key={variable} className="layout-foundation__spacing-item">
              <div className="layout-foundation__spacing-meta">
                <strong>{name}</strong>
                <span>{value}</span>
                <code>{variable}</code>
              </div>

              <div className="layout-foundation__spacing-track">
                <div
                  className="layout-foundation__spacing-bar"
                  style={{
                    width: `var(${variable})`,
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="layout-foundation__section"
        aria-labelledby="sizing-title"
      >
        <header className="layout-foundation__section-header">
          <ScanLine size={22} aria-hidden="true" />

          <div>
            <h2 id="sizing-title" className="layout-foundation__section-title">
              Control dan Icon Sizing
            </h2>

            <p className="layout-foundation__section-description">
              Control mengikuti density, sedangkan icon memakai skala global
              yang konsisten.
            </p>
          </div>
        </header>

        <div className="layout-foundation__two-column">
          <article className="layout-foundation__panel">
            <h3 className="layout-foundation__panel-title">Control Sizes</h3>

            <div className="layout-foundation__control-list">
              <button
                type="button"
                className="layout-foundation__control layout-foundation__control--sm"
              >
                Small Control
              </button>

              <button
                type="button"
                className="layout-foundation__control layout-foundation__control--md"
              >
                Medium Control
              </button>

              <button
                type="button"
                className="layout-foundation__control layout-foundation__control--lg"
              >
                Large Control
              </button>
            </div>

            <p className="layout-foundation__supporting">
              Tinggi aktual berubah mengikuti density global.
            </p>
          </article>

          <article className="layout-foundation__panel">
            <h3 className="layout-foundation__panel-title">Icon Scale</h3>

            <div className="layout-foundation__icon-grid">
              {iconSizes.map(([name, variable, value]) => (
                <div key={variable} className="layout-foundation__icon-item">
                  <Square
                    style={{
                      width: `var(${variable})`,
                      height: `var(${variable})`,
                    }}
                    aria-hidden="true"
                  />

                  <strong>{name}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section
        className="layout-foundation__section"
        aria-labelledby="surface-title"
      >
        <header className="layout-foundation__section-header">
          <Box size={22} aria-hidden="true" />

          <div>
            <h2 id="surface-title" className="layout-foundation__section-title">
              Radius dan Border
            </h2>

            <p className="layout-foundation__section-description">
              Component radius utama 8 px dan card radius 12 px.
            </p>
          </div>
        </header>

        <div className="layout-foundation__radius-grid">
          {radiusTokens.map(([name, variable, value]) => (
            <article key={variable} className="layout-foundation__radius-item">
              <div
                className="layout-foundation__radius-sample"
                style={{
                  borderRadius: `var(${variable})`,
                }}
              />

              <strong>{name}</strong>
              <span>{value}</span>
              <code>{variable}</code>
            </article>
          ))}
        </div>

        <div className="layout-foundation__border-grid">
          <div className="layout-foundation__border-sample layout-foundation__border-sample--subtle">
            Subtle
          </div>

          <div className="layout-foundation__border-sample layout-foundation__border-sample--default">
            Default
          </div>

          <div className="layout-foundation__border-sample layout-foundation__border-sample--strong">
            Strong
          </div>

          <div className="layout-foundation__border-sample layout-foundation__border-sample--selected">
            Selected
          </div>

          <div className="layout-foundation__border-sample layout-foundation__border-sample--danger">
            Error
          </div>

          <div className="layout-foundation__border-sample layout-foundation__border-sample--dashed">
            Drop Zone
          </div>
        </div>
      </section>

      <section
        className="layout-foundation__section"
        aria-labelledby="shadow-title"
      >
        <header className="layout-foundation__section-header">
          <Layers3 size={22} aria-hidden="true" />

          <div>
            <h2 id="shadow-title" className="layout-foundation__section-title">
              Shadow dan Elevation
            </h2>

            <p className="layout-foundation__section-description">
              Sistem mengutamakan border; shadow digunakan secara halus untuk
              hierarchy dan floating surface.
            </p>
          </div>
        </header>

        <div className="layout-foundation__shadow-grid">
          {shadowTokens.map(([name, variable]) => (
            <article
              key={variable}
              className="layout-foundation__shadow-item"
              style={{
                boxShadow: `var(${variable})`,
              }}
            >
              <strong>{name}</strong>
              <code>{variable}</code>
            </article>
          ))}
        </div>
      </section>

      <section
        className="layout-foundation__section"
        aria-labelledby="density-title"
      >
        <header className="layout-foundation__section-header">
          <Layers3 size={22} aria-hidden="true" />

          <div>
            <h2 id="density-title" className="layout-foundation__section-title">
              Density Comparison
            </h2>

            <p className="layout-foundation__section-description">
              Contoh yang sama dirender dalam tiga density agar perbedaannya
              mudah dibandingkan.
            </p>
          </div>
        </header>

        <div className="layout-foundation__density-grid">
          {densityModes.map((density) => (
            <article
              key={density.value}
              className="layout-foundation__density-card"
              data-density={density.value}
            >
              <header>
                <h3>{density.label}</h3>
                <p>{density.usage}</p>
              </header>

              <label className="layout-foundation__field">
                <span>Nama peserta</span>

                <input type="text" defaultValue="Ahmad Fauzan" readOnly />
              </label>

              <button
                type="button"
                className="layout-foundation__density-button"
              >
                Simpan Perubahan
              </button>

              <div className="layout-foundation__density-row">
                <span>Nomor Pendaftaran</span>
                <strong>PPSTIP-2026-000184</strong>
              </div>

              <div className="layout-foundation__density-row">
                <span>Status</span>
                <strong>Menunggu Pembayaran</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
