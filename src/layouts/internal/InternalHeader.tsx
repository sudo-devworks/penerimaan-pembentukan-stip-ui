import {
  Bell,
  ChevronDown,
  CircleHelp,
  Menu,
} from "lucide-react";
import { useState } from "react";

import {
  IconButton,
  Select,
} from "../../components";
import { InternalMobileNavigation } from "./InternalMobileNavigation";

export function InternalHeader() {
  const [navigationOpen, setNavigationOpen] =
    useState(false);

  return (
    <>
      <header className="internal-header">
        <div className="internal-header__mobile-brand">
          <IconButton
            aria-label="Buka menu utama"
            icon={<Menu />}
            variant="ghost"
            onClick={() => setNavigationOpen(true)}
          />

          <span>
            <strong>Portal Internal</strong>
            <small>Penerimaan STIP</small>
          </span>
        </div>

        <div className="internal-header__context">
          <span className="internal-header__context-label">
            Konteks Aktif
          </span>

          <Select
            aria-label="Pilih konteks kegiatan aktif"
            defaultValue="cma-g2"
          >
            <option value="cma-g2">
              CMA CGM / Diklat Pembentukan / Gelombang II
            </option>

            <option value="cma-g1">
              CMA CGM / Diklat Pembentukan / Gelombang I
            </option>

            <option value="all">
              Semua Kegiatan
            </option>
          </Select>
        </div>

        <div className="internal-header__actions">
          <div className="internal-header__notification">
            <IconButton
              aria-label="Buka notifikasi"
              icon={<Bell />}
              variant="ghost"
            />

            <span aria-label="8 notifikasi belum dibaca">
              8
            </span>
          </div>

          <IconButton
            aria-label="Buka bantuan"
            icon={<CircleHelp />}
            variant="ghost"
          />

          <button
            type="button"
            className="internal-header__profile"
          >
            <span className="internal-header__avatar">
              BS
            </span>

            <span className="internal-header__profile-copy">
              <strong>Budi Santoso</strong>
              <small>Admin Penerimaan</small>
            </span>

            <ChevronDown aria-hidden="true" />
          </button>
        </div>
      </header>

      <InternalMobileNavigation
        open={navigationOpen}
        onOpenChange={setNavigationOpen}
      />
    </>
  );
}