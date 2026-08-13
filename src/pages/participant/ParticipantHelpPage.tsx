import {
  ArrowRight,
  CircleHelp,
  FileQuestion,
  Mail,
  Phone,
} from "lucide-react";

import {
  ActionLink,
} from "../../components";

import "./ParticipantPages.css";

export function ParticipantHelpPage() {
  return (
    <div className="participant-workspace">
      <header className="participant-page-header">
        <div>
          <p className="participant-page-header__eyebrow">
            Bantuan
          </p>

          <h1>Pusat bantuan peserta</h1>

          <p>
            Temukan panduan singkat atau hubungi kanal resmi jika
            Anda membutuhkan bantuan selama proses penerimaan.
          </p>
        </div>

        <CircleHelp aria-hidden="true" />
      </header>

      <section className="participant-help-grid">
        <article>
          <FileQuestion aria-hidden="true" />

          <div>
            <p>Panduan proses</p>
            <h2>Pelajari alur penerimaan</h2>
            <span>
              Informasi mengenai tahapan, pembayaran, biodata,
              dokumen, dan seleksi.
            </span>
          </div>

          <ActionLink
            href="/alur-pendaftaran"
            trailingIcon={<ArrowRight />}
          >
            Lihat Panduan
          </ActionLink>
        </article>

        <article>
          <Mail aria-hidden="true" />

          <div>
            <p>Email</p>
            <h2>Hubungi petugas</h2>
            <span>
              Gunakan email resmi untuk pertanyaan yang memerlukan
              tindak lanjut.
            </span>
          </div>

          <strong>Informasi email akan diperbarui</strong>
        </article>

        <article>
          <Phone aria-hidden="true" />

          <div>
            <p>Telepon</p>
            <h2>Kontak resmi STIP</h2>
            <span>
              Informasi kontak tersedia pada jam layanan yang
              ditetapkan.
            </span>
          </div>

          <strong>Informasi telepon akan diperbarui</strong>
        </article>
      </section>
    </div>
  );
}