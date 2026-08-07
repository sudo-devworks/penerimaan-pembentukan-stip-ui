import { Menu, ShipWheel, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  ActionLink,
  Button,
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  TopNavigation,
  TopNavigationItem,
} from "../../components";
import {
  participantPortalRoutes,
  publicInformationNavigation,
  publicPrimaryNavigation,
} from "../../routes";

function isRouteActive(
  pathname: string,
  href: string,
  end: boolean | undefined,
) {
  if (end) {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PublicHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header className="public-header">
      <div className="public-header__utility">
        <div className="public-shell-container public-header__utility-inner">
          <span>Sekolah Tinggi Ilmu Pelayaran Jakarta</span>

          <ActionLink
            href="/bantuan"
            variant="subtle"
            size="sm"
            onClick={(event) => {
              event.preventDefault();
              navigate("/bantuan");
            }}
          >
            Bantuan
          </ActionLink>
        </div>
      </div>

      <div className="public-header__main">
        <div className="public-shell-container public-header__main-inner">
          <a
            href="/"
            className="public-brand"
            aria-label="Penerimaan Pembentukan STIP, kembali ke beranda"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            <span className="public-brand__mark" aria-hidden="true">
              <ShipWheel />
            </span>

            <span className="public-brand__copy">
              <strong>Penerimaan Pembentukan STIP</strong>
              <span>Portal informasi penerimaan resmi</span>
            </span>
          </a>

          <div className="public-header__desktop-navigation">
            <TopNavigation label="Navigasi utama">
              {publicPrimaryNavigation.map((item) => (
                <TopNavigationItem
                  key={item.href}
                  href={item.href}
                  active={isRouteActive(
                    location.pathname,
                    item.href,
                    item.end,
                  )}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.href);
                  }}
                >
                  {item.label}
                </TopNavigationItem>
              ))}
            </TopNavigation>
          </div>

          <div className="public-header__desktop-actions">
            <Button
              variant="ghost"
              onClick={() => navigate(participantPortalRoutes.login)}
            >
              Masuk
            </Button>

            <Button
              onClick={() => navigate(participantPortalRoutes.register)}
            >
              Daftar
            </Button>
          </div>

          <div className="public-header__mobile-trigger">
            <Drawer
              open={mobileMenuOpen}
              onOpenChange={(open) => setMobileMenuOpen(open)}
            >
              <DrawerTrigger
                variant="ghost"
                leadingIcon={<Menu />}
                aria-label="Buka menu navigasi"
              >
                Menu
              </DrawerTrigger>

              <DrawerContent
                placement="right"
                size="sm"
                aria-label="Navigasi situs"
                className="public-mobile-navigation"
              >
                <DrawerHeader className="public-mobile-navigation__header">
                  <DrawerTitle>Menu utama</DrawerTitle>

                  <DrawerClose
                    variant="ghost"
                    aria-label="Tutup menu navigasi"
                    leadingIcon={<X />}
                  >
                    Tutup
                  </DrawerClose>
                </DrawerHeader>

                <DrawerBody className="public-mobile-navigation__body">
                  <nav
                    aria-label="Navigasi seluler"
                    className="public-mobile-navigation__links"
                  >
                    {[...publicPrimaryNavigation, ...publicInformationNavigation].map(
                      (item) => {
                        const active = isRouteActive(
                          location.pathname,
                          item.href,
                          item.end,
                        );

                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            data-active={active || undefined}
                            onClick={(event) => {
                              event.preventDefault();
                              navigateTo(item.href);
                            }}
                          >
                            {item.label}
                          </a>
                        );
                      },
                    )}
                  </nav>
                </DrawerBody>

                <DrawerFooter className="public-mobile-navigation__footer">
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() =>
                      navigateTo(participantPortalRoutes.login)
                    }
                  >
                    Masuk
                  </Button>

                  <Button
                    fullWidth
                    onClick={() =>
                      navigateTo(participantPortalRoutes.register)
                    }
                  >
                    Daftar Sekarang
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}