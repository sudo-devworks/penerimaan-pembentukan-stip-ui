import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Ship,
  UserRoundPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/hero.png";
import { ActionLink, Button, SectionHeader } from "../../components";
import { participantPortalRoutes } from "../../routes";

import "./PublicHomePage.css";

const programs = [
  {
    icon: <Ship />,
    name: "Nautika",
    description:
      "Program pembentukan untuk mempersiapkan kompetensi operasional bagian dek.",
  },
  {
    icon: <GraduationCap />,
    name: "Teknika",
    description:
      "Program pembentukan untuk mempersiapkan kompetensi operasional bagian mesin.",
  },
  {
    icon: <BookOpen />,
    name: "ETO",
    description:
      "Program Electro-Technical Officer untuk kompetensi kelistrikan dan elektronika kapal.",
  },
];

const processSteps = [
  {
    icon: <UserRoundPlus />,
    number: "01",
    title: "Buat akun",
    description:
      "Daftarkan akun Portal Penerimaan STIP menggunakan identitas dan email aktif.",
  },
  {
    icon: <FileText />,
    number: "02",
    title: "Lengkapi pendaftaran",
    description:
      "Pilih kegiatan dan program, lalu lengkapi biodata serta dokumen persyaratan.",
  },
  {
    icon: <ClipboardCheck />,
    number: "03",
    title: "Ikuti verifikasi dan seleksi",
    description:
      "Pantau status administrasi, jadwal, kartu ujian, dan tahapan seleksi.",
  },
  {
    icon: <BadgeCheck />,
    number: "04",
    title: "Lihat hasil",
    description:
      "Hasil setiap tahapan dan pengumuman akhir dapat dilihat melalui portal peserta.",
  },
];

export function PublicHomePage() {
  const navigate = useNavigate();

  const navigateTo = (href: string) => {
    navigate(href);
  };

  return (
    <div className="public-home">
      <section className="public-hero" aria-labelledby="public-hero-title">
        <div className="public-shell-container public-hero__inner">
          <div className="public-hero__content">
            <p className="public-home__eyebrow">
              Penerimaan Diklat Pembentukan STIP
            </p>

            <h1 id="public-hero-title">
              Persiapkan langkahmu menuju pendidikan dan karier maritim
            </h1>

            <p className="public-hero__lead">
              Temukan informasi kegiatan, program, persyaratan, jadwal, dan
              proses seleksi melalui layanan penerimaan resmi STIP Jakarta.
            </p>

            <div className="public-hero__actions">
              <Button
                size="lg"
                trailingIcon={<ArrowRight />}
                onClick={() =>
                  navigateTo(participantPortalRoutes.register)
                }
              >
                Daftar Sekarang
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateTo("/kegiatan")}
              >
                Lihat Kegiatan
              </Button>
            </div>

            <div className="public-hero__trust">
              <ShieldCheck aria-hidden="true" />

              <p>
                Informasi dan proses pendaftaran tersedia melalui kanal resmi
                Sekolah Tinggi Ilmu Pelayaran Jakarta.
              </p>
            </div>
          </div>

          <div className="public-hero__visual" aria-hidden="true">
            <div className="public-hero__visual-background" />

            <img
              src={heroImage}
              alt=""
              className="public-hero__image"
            />
          </div>
        </div>
      </section>

      <section
        className="public-home-section public-home-introduction"
        aria-labelledby="public-introduction-title"
      >
        <div className="public-shell-container public-home-introduction__grid">
          <div>
            <p className="public-home__eyebrow">Layanan penerimaan resmi</p>

            <h2 id="public-introduction-title">
              Informasi penerimaan dalam satu layanan yang jelas
            </h2>
          </div>

          <div className="public-home-introduction__copy">
            <p>
              Portal ini membantu calon peserta memahami proses penerimaan
              Diklat Pembentukan mulai dari informasi awal hingga pengumuman
              hasil.
            </p>

            <p>
              Seluruh status pendaftaran pribadi nantinya dapat dipantau melalui
              Portal Penerimaan STIP.
            </p>
          </div>
        </div>
      </section>

      <section
        className="public-home-section public-programs"
        aria-labelledby="public-programs-title"
      >
        <div className="public-shell-container">
          <SectionHeader
            title="Program Diklat Pembentukan"
            description="Kenali program awal yang tersedia dalam kegiatan penerimaan."
            actions={
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
            }
          />

          <div className="public-programs__grid">
            {programs.map((program) => (
              <article key={program.name} className="public-program-card">
                <span className="public-program-card__icon" aria-hidden="true">
                  {program.icon}
                </span>

                <div>
                  <h3>{program.name}</h3>
                  <p>{program.description}</p>
                </div>

                <ActionLink
                  href={`/program/${program.name.toLowerCase()}`}
                  variant="standalone"
                  trailingIcon={<ArrowRight />}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo(
                      `/program/${program.name.toLowerCase()}`,
                    );
                  }}
                >
                  Pelajari program
                </ActionLink>
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
          <SectionHeader
            title="Alur penerimaan yang mudah dipahami"
            description="Ikuti proses secara bertahap dan pantau perkembangan pendaftaran melalui portal peserta."
            actions={
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
            }
          />

          <ol className="public-process__list">
            {processSteps.map((step) => (
              <li key={step.number} className="public-process-step">
                <div className="public-process-step__header">
                  <span
                    className="public-process-step__icon"
                    aria-hidden="true"
                  >
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
          <SectionHeader
            title="Informasi penting sebelum mendaftar"
            description="Pastikan seluruh informasi dasar sudah dipahami sebelum memulai pendaftaran."
          />

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

      <section
        className="public-home-section public-assurance"
        aria-labelledby="public-assurance-title"
      >
        <div className="public-shell-container public-assurance__inner">
          <div className="public-assurance__icon" aria-hidden="true">
            <CheckCircle2 />
          </div>

          <div>
            <p className="public-home__eyebrow">Siap memulai?</p>

            <h2 id="public-assurance-title">
              Buat akun dan mulai proses pendaftaran
            </h2>

            <p>
              Gunakan email aktif dan pastikan data yang dimasukkan sesuai
              dokumen identitas resmi.
            </p>
          </div>

          <div className="public-assurance__actions">
            <Button
              size="lg"
              trailingIcon={<ArrowRight />}
              onClick={() =>
                navigateTo(participantPortalRoutes.register)
              }
            >
              Buat Akun
            </Button>

            <Button
            size="lg"
            variant="outline"
            onClick={() => navigateTo(participantPortalRoutes.login)}
            >
            Sudah punya akun? Masuk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}