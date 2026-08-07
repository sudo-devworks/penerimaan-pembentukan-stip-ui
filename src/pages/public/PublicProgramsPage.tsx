import { PublicProgramCard } from "../../features/public/program";
import { publicPrograms } from "../../features/public/catalog";

import "./PublicProgramsPage.css";

export function PublicProgramsPage() {
  return (
    <div className="public-programs-page">
      <header className="public-catalog-hero">
        <div className="public-shell-container public-catalog-hero__inner">
          <p>Program Diklat Pembentukan</p>
          <h1>Kenali program pendidikan maritim yang tersedia</h1>
          <span>
            Pelajari fokus kompetensi dan gambaran setiap program sebelum
            memilih kegiatan penerimaan.
          </span>
        </div>
      </header>

      <section
        className="public-programs-page__content"
        aria-labelledby="public-program-list-title"
      >
        <div className="public-shell-container">
          <div className="public-programs-page__heading">
            <p>Pilihan program</p>
            <h2 id="public-program-list-title">
              Program awal Diklat Pembentukan
            </h2>
            <span>
              Program yang tersedia pada setiap kegiatan dapat berbeda
              sesuai ketentuan dan kuota.
            </span>
          </div>

          <div className="public-programs-page__grid">
            {publicPrograms.map((program) => (
              <PublicProgramCard
                key={program.slug}
                program={program}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}