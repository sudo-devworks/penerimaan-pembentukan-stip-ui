import {
  brandColorGroups,
  neutralColorGroups,
  semanticColorGroups,
  type ColorGroup,
  type ColorToken,
} from "./color-data";

type ColorSwatchProps = {
  color: ColorToken;
};

function ColorSwatch({ color }: ColorSwatchProps) {
  return (
    <article className="color-showcase__swatch">
      <div
        className="color-showcase__sample"
        style={{
          backgroundColor: `var(${color.variable})`,
        }}
        aria-label={`${color.name}, ${color.value}`}
      />

      <div className="color-showcase__swatch-content">
        <div className="color-showcase__swatch-heading">
          <h3 className="color-showcase__swatch-name">{color.name}</h3>

          <code className="color-showcase__value">{color.value}</code>
        </div>

        <code className="color-showcase__variable">{color.variable}</code>

        {color.usage ? (
          <p className="color-showcase__usage">{color.usage}</p>
        ) : null}
      </div>
    </article>
  );
}

type ColorGroupSectionProps = {
  group: ColorGroup;
};

function ColorGroupSection({ group }: ColorGroupSectionProps) {
  return (
    <section
      className="color-showcase__group"
      aria-labelledby={`color-group-${group.name
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      <header className="color-showcase__group-header">
        <h2
          id={`color-group-${group.name.toLowerCase().replaceAll(" ", "-")}`}
          className="color-showcase__group-title"
        >
          {group.name}
        </h2>

        <p className="color-showcase__group-description">{group.description}</p>
      </header>

      <div className="color-showcase__grid">
        {group.colors.map((color) => (
          <ColorSwatch key={color.variable} color={color} />
        ))}
      </div>
    </section>
  );
}

export function ColorShowcase() {
  return (
    <article className="color-showcase">
      <header className="color-showcase__header">
        <p className="color-showcase__eyebrow">01 Foundations · Color</p>

        <h1 className="color-showcase__title">Primitive Color Palette</h1>

        <p className="color-showcase__description">
          Seluruh warna visual Penerimaan Pembentukan STIP berasal dari
          primitive token yang dipetakan menjadi semantic dan component token.
        </p>
      </header>

      <nav className="color-showcase__navigation" aria-label="Kelompok warna">
        <a href="#brand-colors">Brand</a>

        <a href="#neutral-colors">Neutral</a>

        <a href="#semantic-colors">Semantic</a>
      </nav>

      <section
        id="brand-colors"
        className="color-showcase__category"
        aria-labelledby="brand-colors-title"
      >
        <header className="color-showcase__category-header">
          <p className="color-showcase__category-label">Brand</p>

          <h2
            id="brand-colors-title"
            className="color-showcase__category-title"
          >
            Institutional and Maritime Identity
          </h2>
        </header>

        {brandColorGroups.map((group) => (
          <ColorGroupSection key={group.name} group={group} />
        ))}
      </section>

      <section
        id="neutral-colors"
        className="color-showcase__category"
        aria-labelledby="neutral-colors-title"
      >
        <header className="color-showcase__category-header">
          <p className="color-showcase__category-label">Neutral</p>

          <h2
            id="neutral-colors-title"
            className="color-showcase__category-title"
          >
            Surface, Text, and Border Foundation
          </h2>
        </header>

        {neutralColorGroups.map((group) => (
          <ColorGroupSection key={group.name} group={group} />
        ))}
      </section>

      <section
        id="semantic-colors"
        className="color-showcase__category"
        aria-labelledby="semantic-colors-title"
      >
        <header className="color-showcase__category-header">
          <p className="color-showcase__category-label">Semantic</p>

          <h2
            id="semantic-colors-title"
            className="color-showcase__category-title"
          >
            Information and Feedback
          </h2>
        </header>

        {semanticColorGroups.map((group) => (
          <ColorGroupSection key={group.name} group={group} />
        ))}
      </section>
    </article>
  );
}
