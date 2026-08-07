import {
  CheckCircle2,
  CircleAlert,
  Contrast,
  Info,
  TriangleAlert,
  XCircle,
} from "lucide-react";

import { contrastGroups, type ContrastPair } from "./contrast-data";

function ContrastResultIcon({ level }: { level: ContrastPair["level"] }) {
  switch (level) {
    case "AAA":
    case "AA":
      return <CheckCircle2 size={16} aria-hidden="true" />;

    case "Large Text Only":
      return <TriangleAlert size={16} aria-hidden="true" />;

    case "Fail":
      return <XCircle size={16} aria-hidden="true" />;
  }
}

function getLevelClass(level: ContrastPair["level"]) {
  switch (level) {
    case "AAA":
    case "AA":
      return "contrast-showcase__result--pass";

    case "Large Text Only":
      return "contrast-showcase__result--warning";

    case "Fail":
      return "contrast-showcase__result--fail";
  }
}

function ContrastCard({ pair }: { pair: ContrastPair }) {
  return (
    <article className="contrast-showcase__card">
      <div
        className="contrast-showcase__sample"
        style={{
          color: `var(${pair.foregroundVariable})`,
          backgroundColor: `var(${pair.backgroundVariable})`,
        }}
      >
        <p className="contrast-showcase__sample-label">{pair.name}</p>

        <p className="contrast-showcase__sample-text">
          Penerimaan Pembentukan STIP
        </p>

        <p className="contrast-showcase__sample-supporting">
          Contoh teks normal untuk validasi kontras.
        </p>
      </div>

      <div className="contrast-showcase__content">
        <div className="contrast-showcase__heading">
          <div>
            <h3 className="contrast-showcase__name">{pair.name}</h3>

            <p className="contrast-showcase__usage">{pair.usage}</p>
          </div>

          <div
            className={[
              "contrast-showcase__result",
              getLevelClass(pair.level),
            ].join(" ")}
          >
            <ContrastResultIcon level={pair.level} />

            {pair.level}
          </div>
        </div>

        <dl className="contrast-showcase__details">
          <div>
            <dt>Contrast ratio</dt>
            <dd>{pair.ratio.toFixed(2)} : 1</dd>
          </div>

          <div>
            <dt>Foreground</dt>
            <dd>
              <code>{pair.foregroundVariable}</code>
            </dd>
          </div>

          <div>
            <dt>Background</dt>
            <dd>
              <code>{pair.backgroundVariable}</code>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function ContrastShowcase() {
  return (
    <article className="contrast-showcase">
      <header className="contrast-showcase__header">
        <div className="contrast-showcase__header-icon" aria-hidden="true">
          <Contrast size={24} />
        </div>

        <div>
          <p className="contrast-showcase__eyebrow">
            01 Foundations · Accessibility
          </p>

          <h1 className="contrast-showcase__title">Semantic Color Pairing</h1>

          <p className="contrast-showcase__description">
            Validasi kombinasi foreground dan background untuk teks, action,
            surface, dan semantic feedback berdasarkan WCAG 2.2 Level AA.
          </p>
        </div>
      </header>

      <aside className="contrast-showcase__guidance">
        <Info size={20} aria-hidden="true" />

        <div>
          <h2 className="contrast-showcase__guidance-title">Target minimum</h2>

          <p className="contrast-showcase__guidance-text">
            Teks normal minimal 4.5:1, teks besar minimal 3:1, dan komponen UI
            minimal 3:1.
          </p>
        </div>
      </aside>

      {contrastGroups.map((group) => (
        <section key={group.name} className="contrast-showcase__group">
          <header className="contrast-showcase__group-header">
            <h2 className="contrast-showcase__group-title">{group.name}</h2>

            <p className="contrast-showcase__group-description">
              {group.description}
            </p>
          </header>

          <div className="contrast-showcase__grid">
            {group.pairs.map((pair) => (
              <ContrastCard key={pair.name} pair={pair} />
            ))}
          </div>
        </section>
      ))}

      <aside className="contrast-showcase__warning">
        <CircleAlert size={20} aria-hidden="true" />

        <div>
          <h2 className="contrast-showcase__warning-title">
            Warna bukan satu-satunya sinyal
          </h2>

          <p className="contrast-showcase__warning-text">
            Status tetap menggunakan label, icon, dan accessible description
            jika maknanya berpotensi ambigu.
          </p>
        </div>
      </aside>
    </article>
  );
}
