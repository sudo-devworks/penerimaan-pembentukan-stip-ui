import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircle2, Layers3, MonitorCog } from "lucide-react";

function ToolbarProof() {
  return (
    <article className="storybook-toolbar-proof">
      <header className="storybook-toolbar-proof__header">
        <div>
          <p className="storybook-toolbar-proof__eyebrow">MOCKUP-06-P3.1</p>

          <h1 className="storybook-toolbar-proof__title">
            Portal dan Density Toolbar
          </h1>

          <p className="storybook-toolbar-proof__description">
            Gunakan toolbar Storybook di bagian atas untuk mengganti portal dan
            density. Perubahan akan diterapkan pada seluruh area preview.
          </p>
        </div>

        <div className="storybook-toolbar-proof__meta">
          <MonitorCog size={18} aria-hidden="true" />
          Interactive visual specification
        </div>
      </header>

      <section
        className="storybook-toolbar-proof__grid"
        aria-label="Contoh komponen"
      >
        <article className="storybook-toolbar-proof__card">
          <Layers3 size={24} aria-hidden="true" />

          <h2 className="storybook-toolbar-proof__card-title">
            Shared component
          </h2>

          <p className="storybook-toolbar-proof__card-text">
            Card yang sama menggunakan composition dan density berbeda sesuai
            pilihan toolbar.
          </p>

          <button type="button" className="storybook-toolbar-proof__control">
            <CheckCircle2 size={18} aria-hidden="true" />
            Simpan Perubahan
          </button>
        </article>

        <article className="storybook-toolbar-proof__card">
          <h2 className="storybook-toolbar-proof__card-title">
            Density values
          </h2>

          <p className="storybook-toolbar-proof__card-text">
            Perhatikan perubahan tinggi row, padding, button, dan jarak
            antarelemen.
          </p>

          <div className="storybook-toolbar-proof__density-row">
            <div className="storybook-toolbar-proof__density-item">
              <span>Control height</span>

              <span className="storybook-toolbar-proof__density-value">
                var(--density-control-height-md)
              </span>
            </div>

            <div className="storybook-toolbar-proof__density-item">
              <span>List row</span>

              <span className="storybook-toolbar-proof__density-value">
                var(--density-list-row-min-height)
              </span>
            </div>

            <div className="storybook-toolbar-proof__density-item">
              <span>Card padding</span>

              <span className="storybook-toolbar-proof__density-value">
                var(--composition-card-padding)
              </span>
            </div>
          </div>
        </article>
      </section>
    </article>
  );
}

const meta = {
  title: "01 Foundations/Toolbar Proof",
  component: ToolbarProof,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToolbarProof>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
