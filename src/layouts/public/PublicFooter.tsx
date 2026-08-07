import { Mail, MapPin, Phone, ShipWheel } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ActionLink } from "../../components";
import {
  publicInformationNavigation,
  publicPrimaryNavigation,
} from "../../routes";

export function PublicFooter() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleInternalNavigation =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigate(href);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <footer className="public-footer">
      <div className="public-shell-container public-footer__grid">
        <section
          className="public-footer__identity"
          aria-labelledby="public-footer-identity"
        >
          <div className="public-footer__brand">
            <span aria-hidden="true">
              <ShipWheel />
            </span>

            <div>
              <h2 id="public-footer-identity">
                Penerimaan Pembentukan STIP
              </h2>
              <p>Portal informasi penerimaan resmi STIP Jakarta.</p>
            </div>
          </div>

          <p>
            Informasi resmi mengenai kegiatan, program, persyaratan, jadwal,
            dan proses penerimaan peserta Diklat Pembentukan.
          </p>
        </section>

        <nav
          className="public-footer__navigation"
          aria-labelledby="public-footer-navigation"
        >
          <h2 id="public-footer-navigation">Navigasi</h2>

          <ul>
            {publicPrimaryNavigation.map((item) => (
              <li key={item.href}>
                <ActionLink
                  href={item.href}
                  variant="subtle"
                  onClick={handleInternalNavigation(item.href)}
                >
                  {item.label}
                </ActionLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className="public-footer__navigation"
          aria-labelledby="public-footer-information"
        >
          <h2 id="public-footer-information">Informasi</h2>

          <ul>
            {publicInformationNavigation.map((item) => (
              <li key={item.href}>
                <ActionLink
                  href={item.href}
                  variant="subtle"
                  onClick={handleInternalNavigation(item.href)}
                >
                  {item.label}
                </ActionLink>
              </li>
            ))}
          </ul>
        </nav>

        <section
          className="public-footer__contact"
          aria-labelledby="public-footer-contact"
        >
          <h2 id="public-footer-contact">Kontak resmi</h2>

          <address>
            <p>
              <MapPin aria-hidden="true" />
              <span>STIP Jakarta, Jakarta Utara</span>
            </p>

            <p>
              <Phone aria-hidden="true" />
              <span>Informasi telepon akan diperbarui</span>
            </p>

            <p>
              <Mail aria-hidden="true" />
              <span>Informasi email akan diperbarui</span>
            </p>
          </address>
        </section>
      </div>

      <div className="public-footer__legal">
        <div className="public-shell-container public-footer__legal-inner">
          <p>
            © {currentYear} Sekolah Tinggi Ilmu Pelayaran Jakarta.
          </p>

          <p>Informasi pada mockup ini menggunakan data demonstrasi.</p>
        </div>
      </div>
    </footer>
  );
}