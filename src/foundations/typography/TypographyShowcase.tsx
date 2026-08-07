import { AlignLeft, Languages, Type } from "lucide-react";

import { typographyGroups, type TypographyToken } from "./typography-data";

function TypographySample({ token }: { token: TypographyToken }) {
  return (
    <article className="typography-showcase__sample">
      <div className="typography-showcase__preview">
        <p
          className="typography-showcase__preview-text"
          style={{
            fontSize: `var(${token.fontSizeVariable})`,
            lineHeight: `var(${token.lineHeightVariable})`,
            fontWeight: `var(${token.fontWeightVariable})`,
            letterSpacing: token.letterSpacingVariable
              ? `var(${token.letterSpacingVariable})`
              : undefined,
          }}
        >
          {token.sample}
        </p>
      </div>

      <div className="typography-showcase__sample-info">
        <div>
          <h3 className="typography-showcase__sample-name">{token.name}</h3>

          <p className="typography-showcase__sample-usage">{token.usage}</p>
        </div>

        <dl className="typography-showcase__token-list">
          <div>
            <dt>Font size</dt>
            <dd>
              <code>{token.fontSizeVariable}</code>
            </dd>
          </div>

          <div>
            <dt>Line height</dt>
            <dd>
              <code>{token.lineHeightVariable}</code>
            </dd>
          </div>

          <div>
            <dt>Font weight</dt>
            <dd>
              <code>{token.fontWeightVariable}</code>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function TypographyShowcase() {
  return (
    <article className="typography-showcase">
      <header className="typography-showcase__header">
        <div className="typography-showcase__header-icon" aria-hidden="true">
          <Type size={24} />
        </div>

        <div>
          <p className="typography-showcase__eyebrow">
            01 Foundations · Typography
          </p>

          <h1 className="typography-showcase__title">Inter Typography Scale</h1>

          <p className="typography-showcase__description">
            Typography foundation untuk Public Website, Portal Peserta, dan
            Portal Internal dengan hierarchy yang konsisten dan readable.
          </p>
        </div>
      </header>

      <aside className="typography-showcase__guidance">
        <Languages size={20} aria-hidden="true" />

        <div>
          <h2 className="typography-showcase__guidance-title">
            Bahasa Indonesia sebagai baseline
          </h2>

          <p className="typography-showcase__guidance-text">
            Seluruh typography diuji dengan label dan kalimat realistis, bukan
            lorem ipsum.
          </p>
        </div>
      </aside>

      {typographyGroups.map((group) => (
        <section key={group.name} className="typography-showcase__group">
          <header className="typography-showcase__group-header">
            <h2 className="typography-showcase__group-title">{group.name}</h2>

            <p className="typography-showcase__group-description">
              {group.description}
            </p>
          </header>

          <div className="typography-showcase__sample-list">
            {group.tokens.map((token) => (
              <TypographySample key={token.name} token={token} />
            ))}
          </div>
        </section>
      ))}

      <section
        className="typography-showcase__stress"
        aria-labelledby="typography-stress-title"
      >
        <header className="typography-showcase__stress-header">
          <AlignLeft size={22} aria-hidden="true" />

          <div>
            <p className="typography-showcase__section-label">
              Long-content stress test
            </p>

            <h2
              id="typography-stress-title"
              className="typography-showcase__stress-title"
            >
              Wrapping dan keterbacaan konten panjang
            </h2>
          </div>
        </header>

        <div className="typography-showcase__stress-grid">
          <article className="typography-showcase__stress-card">
            <p className="typography-showcase__stress-label">
              Nama kegiatan panjang
            </p>

            <h3 className="typography-showcase__stress-heading">
              Program Electro-Technical Officer untuk Diklat Pembentukan Kerja
              Sama Sekolah Tinggi Ilmu Pelayaran dengan CMA CGM Tahun 2026
            </h3>
          </article>

          <article className="typography-showcase__stress-card">
            <p className="typography-showcase__stress-label">
              Primary task panjang
            </p>

            <h3 className="typography-showcase__stress-heading">
              Selesaikan pembayaran formulir sebelum Jumat, 15 Agustus 2026
              pukul 23.59 WIB agar kuota tetap tersedia.
            </h3>
          </article>

          <article className="typography-showcase__stress-card">
            <p className="typography-showcase__stress-label">
              Error message panjang
            </p>

            <p className="typography-showcase__error-message">
              Dokumen tidak dapat diunggah karena ukuran file melebihi batas
              maksimal 5 MB. Kompres file atau pilih dokumen lain.
            </p>
          </article>

          <article className="typography-showcase__stress-card">
            <p className="typography-showcase__stress-label">
              Identifier panjang
            </p>

            <code className="typography-showcase__identifier">
              INV-PPSTIP-2026-000184-FORM
            </code>
          </article>
        </div>
      </section>
    </article>
  );
}
