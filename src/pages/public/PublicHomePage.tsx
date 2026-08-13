import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleCheckBig,
  ClipboardCheck,
  Compass,
  FileText,
  GraduationCap,
  Landmark,
  Megaphone,
  Route,
  ShieldCheck,
  Ship,
  UserRoundPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/public/hero-stip.jpg";
import nautikaImage from "../../assets/public/programs/nautika.jpg";
import teknikaImage from "../../assets/public/programs/teknika.jpg";
import etoImage from "../../assets/public/programs/eto.jpg";

import {
  ActionLink,
  Button,
} from "../../components";

import "./PublicHomePage.css";

const programs = [
  {
    name: "Nautika",
    description:
      "Program pembentukan untuk mempersiapkan kompetensi operasional bagian dek.",
    icon: <Ship />,
    image: nautikaImage,
    imagePosition: "center 40%",
  },
  {
    name: "Teknika",
    description:
      "Program pembentukan untuk mempersiapkan kompetensi operasional bagian mesin.",
    icon: <GraduationCap />,
    image: teknikaImage,
    imagePosition: "center 45%",
  },
  {
    name: "ETO",
    description:
      "Program Electro-Technical Officer untuk kompetensi kelistrikan dan elektronika kapal.",
    icon: <BookOpen />,
    image: etoImage,
    imagePosition: "center 45%",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Buat akun",
    description:
      "Daftarkan akun Portal Penerimaan STIP menggunakan identitas dan email aktif.",
    icon: <UserRoundPlus />,
  },
  {
    number: "02",
    title: "Lengkapi pendaftaran",
    description:
      "Pilih kegiatan dan program, lalu lengkapi biodata serta dokumen persyaratan.",
    icon: <FileText />,
  },
  {
    number: "03",
    title: "Ikuti verifikasi dan seleksi",
    description:
      "Pantau status administrasi, jadwal, kartu ujian, dan tahapan seleksi.",
    icon: <ClipboardCheck />,
  },
  {
    number: "04",
    title: "Lihat hasil",
    description:
      "Hasil setiap tahapan dan pengumuman akhir dapat dilihat melalui portal peserta.",
    icon: <CheckCircle2 />,
  },
];

const trustPoints = [
  {
    icon: <Landmark />,
    title: "Kanal Resmi",
    description: "Informasi penerimaan resmi STIP Jakarta.",
  },
  {
    icon: <Compass />,
    title: "Informasi Terpusat",
    description:
      "Kegiatan, program, persyaratan, dan jadwal dalam satu layanan.",
  },
  {
    icon: <Route />,
    title: "Proses Terarah",
    description:
      "Alur penerimaan disampaikan secara bertahap dan jelas.",
  },
  {
    icon: <CircleCheckBig />,
    title: "Portal Peserta",
    description:
      "Status proses pribadi dipantau melalui Portal Penerimaan STIP.",
  },
];

export function PublicHomePage() {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div className="public-home">
      <section className="public-hero" aria-labelledby="public-hero-title">
        <div className="public-hero__background" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className="public-hero__background-image"
          />

          <div className="public-hero__background-overlay" />

          <div className="public-hero__background-glow" />

          <div className="public-hero__pattern public-hero__pattern--dots" />

          <div className="public-hero__pattern public-hero__pattern--route">
            <span />
            <span />
          </div>

          <div className="public-hero__navigation-marker" />
        </div>

        <div className="public-shell-container public-hero__inner">
          <div className="public-hero__content">
            <div className="public-hero__eyebrow-group">
              <span className="public-hero__accent-line" aria-hidden="true" />

              <p className="public-home__eyebrow">
                Penerimaan Diklat Pembentukan STIP
              </p>
            </div>

            <h1 id="public-hero-title">
              Pendidikan maritim berkualitas untuk masa depanmu
            </h1>

            <p className="public-hero__lead">
              Temukan kesempatan untuk berkembang melalui pendidikan maritim
              yang profesional, berintegritas, dan berorientasi pada kompetensi
              melalui layanan penerimaan resmi STIP Jakarta.
            </p>

            <div className="public-hero__actions">
              <Button
                size="lg"
                trailingIcon={<ArrowRight />}
                onClick={() => navigateTo("/kegiatan")}
              >
                Lihat Kegiatan
              </Button>

              <Button
                size="lg"
                variant="outline"
                trailingIcon={<ArrowRight />}
                onClick={() => navigateTo("/alur-pendaftaran")}
              >
                Pelajari Alur
              </Button>
            </div>

            <div className="public-hero__trust">
              <ShieldCheck aria-hidden="true" />

              <p>
                Kanal resmi Sekolah Tinggi Ilmu Pelayaran Jakarta untuk
                informasi dan proses Penerimaan Diklat Pembentukan.
              </p>
            </div>

            <div className="public-hero__highlights">
              <div className="public-hero__highlight">
                <span className="public-hero__highlight-icon" aria-hidden="true">
                  <GraduationCap />
                </span>

                <div>
                  <span>Berorientasi pada</span>
                  <strong>Kompetensi</strong>
                </div>
              </div>

              <div className="public-hero__highlight">
                <span className="public-hero__highlight-icon" aria-hidden="true">
                  <BadgeCheck />
                </span>

                <div>
                  <span>Berintegritas &amp;</span>
                  <strong>Profesional</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="public-home-section public-home-introduction"
        aria-labelledby="public-introduction-title"
      >
        <div className="public-shell-container">
          <div className="public-home-introduction__grid">
            <div className="public-home-introduction__heading">
              <div className="public-home-introduction__eyebrow">
                <span aria-hidden="true" />
                <p className="public-home__eyebrow">Tentang layanan</p>
              </div>

              <h2 id="public-introduction-title">
                Satu pintu untuk memahami proses penerimaan STIP
              </h2>

              <p className="public-home-introduction__lead">
                Portal Penerimaan STIP membantu calon peserta menemukan
                informasi yang dibutuhkan sebelum masuk ke proses pendaftaran
                pribadi.
              </p>
            </div>

            <div className="public-home-introduction__trust-grid">
              {trustPoints.map((item) => (
                <article
                  key={item.title}
                  className="public-home-introduction__trust-item"
                >
                  <span
                    className="public-home-introduction__trust-icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="public-home-section public-programs"
        aria-labelledby="public-programs-title"
      >
        <div className="public-shell-container">
          <div className="public-section-heading">
            <div>
              <p className="public-home__eyebrow">
                Program Diklat Pembentukan
              </p>

              <h2 id="public-programs-title">
                Program yang tersedia
              </h2>

              <p>
                Kenali program awal yang tersedia dalam kegiatan penerimaan.
              </p>
            </div>

            <ActionLink
              href="/program"
              variant="standalone"
              trailingIcon={<ArrowRight />}
              onClick={(event) => {
                event.preventDefault();
                navigateTo("/program");
              }}
            >
              Lihat semua program
            </ActionLink>
          </div>

          <div className="public-programs__grid">
            {programs.map((program, index) => (
              <article key={program.name} className="public-program-card">
                <div className="public-program-card__visual">
                  <img
                    src={program.image}
                    alt=""
                    className="public-program-card__image"
                    style={{ objectPosition: program.imagePosition }}
                  />

                  <div
                    className="public-program-card__image-overlay"
                    aria-hidden="true"
                  />

                  <span
                    className="public-program-card__visual-index"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="public-program-card__visual-icon"
                    aria-hidden="true"
                  >
                    {program.icon}
                  </span>

                  <span
                    className="public-program-card__visual-route"
                    aria-hidden="true"
                  />
                </div>

                <div className="public-program-card__body">
                  <div className="public-program-card__heading">
                    <span
                      className="public-program-card__icon"
                      aria-hidden="true"
                    >
                      {program.icon}
                    </span>

                    <h3>{program.name}</h3>
                  </div>

                  <p>{program.description}</p>

                  <ActionLink
                    href={`/program/${program.name.toLowerCase()}`}
                    variant="standalone"
                    trailingIcon={<ArrowRight />}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateTo(`/program/${program.name.toLowerCase()}`);
                    }}
                  >
                    Pelajari program
                  </ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="public-home-section public-process"
        aria-labelledby="public-process-title"
      >
        <div className="public-shell-container">
          <div className="public-section-heading">
            <div>
              <p className="public-home__eyebrow">
                Alur penerimaan yang mudah dipahami
              </p>

              <h2 id="public-process-title">
                Ikuti proses secara bertahap
              </h2>

              <p>
                Pantau perkembangan pendaftaran melalui Portal Penerimaan STIP.
              </p>
            </div>

            <ActionLink
              href="/alur-pendaftaran"
              variant="standalone"
              trailingIcon={<ArrowRight />}
              onClick={(event) => {
                event.preventDefault();
                navigateTo("/alur-pendaftaran");
              }}
            >
              Lihat alur lengkap
            </ActionLink>
          </div>

          <ol className="public-process__list">
            {processSteps.map((step) => (
              <li key={step.number} className="public-process-step">
                <div className="public-process-step__header">
                  <span className="public-process-step__icon" aria-hidden="true">
                    {step.icon}
                  </span>

                  <span className="public-process-step__number">
                    {step.number}
                  </span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="public-home-section public-information"
        aria-labelledby="public-information-title"
      >
        <div className="public-shell-container">
          <div className="public-section-heading">
            <div>
              <p className="public-home__eyebrow">
                Informasi penting sebelum mendaftar
              </p>

              <h2 id="public-information-title">
                Siapkan informasi yang kamu perlukan
              </h2>

              <p>
                Pastikan seluruh informasi dasar sudah dipahami sebelum memulai
                pendaftaran.
              </p>
            </div>
          </div>

          <div className="public-information__grid">
            <a
              href="/persyaratan"
              onClick={(event) => {
                event.preventDefault();
                navigateTo("/persyaratan");
              }}
            >
              <FileText aria-hidden="true" />

              <span>
                <strong>Persyaratan pendaftaran</strong>
                <small>Siapkan data dan dokumen yang diperlukan.</small>
              </span>

              <ArrowRight aria-hidden="true" />
            </a>

            <a
              href="/jadwal-seleksi"
              onClick={(event) => {
                event.preventDefault();
                navigateTo("/jadwal-seleksi");
              }}
            >
              <CalendarDays aria-hidden="true" />

              <span>
                <strong>Jadwal dan tahapan seleksi</strong>
                <small>Pantau agenda penting dalam proses penerimaan.</small>
              </span>

              <ArrowRight aria-hidden="true" />
            </a>

            <a
              href="/pengumuman"
              onClick={(event) => {
                event.preventDefault();
                navigateTo("/pengumuman");
              }}
            >
              <Megaphone aria-hidden="true" />

              <span>
                <strong>Pengumuman resmi</strong>
                <small>Dapatkan informasi terbaru dari STIP.</small>
              </span>

              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="public-assurance">
        <div className="public-shell-container">
          <div className="public-assurance__inner">
            <span className="public-assurance__icon" aria-hidden="true">
              <CheckCircle2 />
            </span>

            <div>
              <p className="public-home__eyebrow">
                Siap memulai?
              </p>

              <h2>
                Buat akun dan mulai proses pendaftaran
              </h2>

              <p>
                Gunakan email aktif dan pastikan data yang dimasukkan sesuai
                dokumen identitas resmi.
              </p>
            </div>

            <div className="public-assurance__actions">
              <Button
                trailingIcon={<ArrowRight />}
                onClick={() => navigateTo("/daftar")}
              >
                Buat Akun
              </Button>

              <Button
                variant="outline"
                onClick={() => navigateTo("/masuk")}
              >
                Sudah punya akun? Masuk
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}