import {
  Accessibility,
  AlertCircle,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  MousePointer2,
} from "lucide-react";
import { useId, useState } from "react";

export function AccessibilityShowcase() {
  const emailId = useId();
  const emailDescriptionId = useId();
  const emailErrorId = useId();

  const readonlyId = useId();
  const readonlyDescriptionId = useId();

  const [email, setEmail] = useState("ahmad.fauzan@example");

  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailHasError = email.length > 0 && !email.includes("@example.com");

  function handleSubmit() {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 1800);
  }

  return (
    <article className="accessibility-showcase">
      <header className="accessibility-showcase__header">
        <div className="accessibility-showcase__header-icon" aria-hidden="true">
          <Accessibility size={24} />
        </div>

        <div>
          <p className="accessibility-showcase__eyebrow">
            01 Foundations · Accessibility
          </p>

          <h1 className="accessibility-showcase__title">
            Focus, Keyboard, State, dan Reduced Motion
          </h1>

          <p className="accessibility-showcase__description">
            Validasi perilaku dasar komponen sebelum digunakan untuk membangun
            component library dan high-fidelity screen.
          </p>
        </div>
      </header>

      <aside className="accessibility-showcase__guidance">
        <MousePointer2 size={20} aria-hidden="true" />

        <div>
          <h2 className="accessibility-showcase__guidance-title">
            Uji menggunakan keyboard
          </h2>

          <p className="accessibility-showcase__guidance-text">
            Tekan Tab dan Shift + Tab. Focus ring harus terlihat jelas dan
            mengikuti urutan interaksi yang logis.
          </p>
        </div>
      </aside>

      <section
        className="accessibility-showcase__section"
        aria-labelledby="focus-proof-title"
      >
        <header className="accessibility-showcase__section-header">
          <h2
            id="focus-proof-title"
            className="accessibility-showcase__section-title"
          >
            Button Foundation Proof
          </h2>

          <p className="accessibility-showcase__section-description">
            Menguji primary, secondary, destructive, disabled, loading, dan
            icon-only action.
          </p>
        </header>

        <div className="accessibility-showcase__button-grid">
          <button
            type="button"
            className="accessibility-proof-button accessibility-proof-button--primary"
          >
            <Check size={18} aria-hidden="true" />
            Simpan Perubahan
          </button>

          <button
            type="button"
            className="accessibility-proof-button accessibility-proof-button--secondary"
          >
            Kembali
          </button>

          <button
            type="button"
            className="accessibility-proof-button accessibility-proof-button--danger"
          >
            Batalkan Pendaftaran
          </button>

          <button
            type="button"
            className="accessibility-proof-button accessibility-proof-button--primary"
            disabled
          >
            Tidak Tersedia
          </button>

          <button
            type="button"
            className="accessibility-proof-button accessibility-proof-button--primary"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle
                  className="accessibility-proof-button__spinner"
                  size={18}
                  aria-hidden="true"
                />
                Memproses
              </>
            ) : (
              "Uji Loading"
            )}
          </button>

          <button
            type="button"
            className="accessibility-proof-icon-button"
            aria-label="Lihat detail accessibility"
          >
            <Accessibility size={20} aria-hidden="true" />
          </button>
        </div>

        <div
          className="accessibility-showcase__touch-target"
          aria-label="Visualisasi minimum touch target"
        >
          <button
            type="button"
            className="accessibility-showcase__small-visual-button"
            aria-label="Contoh icon button dengan area sentuh 44 piksel"
          >
            <CheckCircle2 size={16} aria-hidden="true" />
          </button>

          <div>
            <strong>Visual icon 32 px</strong>

            <span>Interactive target tetap minimum 44 × 44 px.</span>
          </div>
        </div>
      </section>

      <section
        className="accessibility-showcase__section"
        aria-labelledby="input-proof-title"
      >
        <header className="accessibility-showcase__section-header">
          <h2
            id="input-proof-title"
            className="accessibility-showcase__section-title"
          >
            Text Input Foundation Proof
          </h2>

          <p className="accessibility-showcase__section-description">
            Menguji label, helper text, error association, disabled, read-only,
            dan trailing action.
          </p>
        </header>

        <div className="accessibility-showcase__field-grid">
          <div className="accessibility-proof-field">
            <label
              htmlFor={emailId}
              className="accessibility-proof-field__label"
            >
              Email
              <span aria-hidden="true"> *</span>
            </label>

            <input
              id={emailId}
              type="email"
              value={email}
              required
              aria-invalid={emailHasError}
              aria-describedby={[
                emailDescriptionId,
                emailHasError ? emailErrorId : null,
              ]
                .filter(Boolean)
                .join(" ")}
              className={[
                "accessibility-proof-field__input",
                emailHasError ? "accessibility-proof-field__input--error" : "",
              ].join(" ")}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <p
              id={emailDescriptionId}
              className="accessibility-proof-field__helper"
            >
              Gunakan alamat email yang dapat diakses.
            </p>

            {emailHasError ? (
              <p
                id={emailErrorId}
                className="accessibility-proof-field__error"
                role="alert"
              >
                <AlertCircle size={16} aria-hidden="true" />
                Masukkan alamat email dengan domain @example.com.
              </p>
            ) : (
              <p className="accessibility-proof-field__success">
                <CheckCircle2 size={16} aria-hidden="true" />
                Alamat email valid.
              </p>
            )}
          </div>

          <div className="accessibility-proof-field">
            <label
              htmlFor={readonlyId}
              className="accessibility-proof-field__label"
            >
              Nomor Pendaftaran
            </label>

            <input
              id={readonlyId}
              type="text"
              value="PPSTIP-2026-000184"
              readOnly
              aria-describedby={readonlyDescriptionId}
              className="accessibility-proof-field__input accessibility-proof-field__input--readonly"
            />

            <p
              id={readonlyDescriptionId}
              className="accessibility-proof-field__helper"
            >
              Nomor diterbitkan oleh sistem dan tidak dapat diubah.
            </p>
          </div>

          <div className="accessibility-proof-field">
            <label
              htmlFor="disabled-foundation-input"
              className="accessibility-proof-field__label"
            >
              Program
            </label>

            <input
              id="disabled-foundation-input"
              type="text"
              value="Nautika"
              disabled
              className="accessibility-proof-field__input"
            />

            <p className="accessibility-proof-field__helper">
              Field disabled tidak dapat menerima focus atau interaksi.
            </p>
          </div>

          <div className="accessibility-proof-field">
            <label
              htmlFor="password-foundation-input"
              className="accessibility-proof-field__label"
            >
              Password
            </label>

            <div className="accessibility-proof-field__input-shell">
              <LockKeyhole size={18} aria-hidden="true" />

              <input
                id="password-foundation-input"
                type={showPassword ? "text" : "password"}
                defaultValue="Password123"
                className="accessibility-proof-field__shell-input"
              />

              <button
                type="button"
                className="accessibility-proof-field__trailing-action"
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
                aria-pressed={showPassword}
                onClick={() => {
                  setShowPassword((current) => !current);
                }}
              >
                {showPassword ? (
                  <EyeOff size={18} aria-hidden="true" />
                ) : (
                  <Eye size={18} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="accessibility-showcase__section"
        aria-labelledby="motion-proof-title"
      >
        <header className="accessibility-showcase__section-header">
          <h2
            id="motion-proof-title"
            className="accessibility-showcase__section-title"
          >
            Motion dan Reduced Motion
          </h2>

          <p className="accessibility-showcase__section-description">
            Animasi hanya membantu menjelaskan perubahan state dan tidak menjadi
            satu-satunya feedback.
          </p>
        </header>

        <div className="accessibility-showcase__motion-grid">
          <article className="accessibility-showcase__motion-card">
            <div
              className="accessibility-showcase__motion-sample"
              aria-hidden="true"
            />

            <h3>Default motion</h3>

            <p>Hover pada sample untuk melihat transition ringan.</p>
          </article>

          <article className="accessibility-showcase__motion-card">
            <LoaderCircle
              className="accessibility-showcase__motion-spinner"
              size={28}
              aria-hidden="true"
            />

            <h3>Loading indicator</h3>

            <p>Spinner dilengkapi label teks dan aria-busy pada trigger.</p>
          </article>
        </div>
      </section>

      <aside className="accessibility-showcase__checklist">
        <CheckCircle2 size={20} aria-hidden="true" />

        <div>
          <h2 className="accessibility-showcase__checklist-title">
            Baseline yang diuji
          </h2>

          <ul>
            <li>Focus ring 2 px dengan offset 2 px.</li>
            <li>Minimum touch target 44 × 44 px.</li>
            <li>Label dan input terhubung.</li>
            <li>Error terhubung melalui aria-describedby.</li>
            <li>Loading tidak hanya menggunakan spinner.</li>
            <li>Disabled dan read-only berbeda.</li>
            <li>Reduced motion mempertahankan feedback.</li>
          </ul>
        </div>
      </aside>
    </article>
  );
}
