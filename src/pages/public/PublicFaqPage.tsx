import { HelpCircle } from "lucide-react";

import { publicFaqItems } from "../../features/public/faq";

import "./PublicFaqPage.css";

export function PublicFaqPage() {
  return (
    <div className="public-faq-page">
      <header className="public-information-hero">
        <div className="public-shell-container public-information-hero__inner">
          <p>Pertanyaan umum</p>
          <h1>Temukan jawaban sebelum menghubungi petugas</h1>
          <span>
            Informasi berikut menjelaskan akun, pendaftaran, dokumen,
            pembayaran, dan proses seleksi.
          </span>
        </div>
      </header>

      <section
        className="public-faq-page__content"
        aria-labelledby="faq-list-title"
      >
        <div className="public-shell-container">
          <div className="public-information-heading">
            <p>Informasi mandiri</p>
            <h2 id="faq-list-title">Pertanyaan yang sering diajukan</h2>
          </div>

          <div className="public-faq-page__list">
            {publicFaqItems.map((item) => (
              <details key={item.id} className="public-faq-item">
                <summary>
                  <span>
                    <small>{item.category}</small>
                    <strong>{item.question}</strong>
                  </span>

                  <HelpCircle aria-hidden="true" />
                </summary>

                <div className="public-faq-item__answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}