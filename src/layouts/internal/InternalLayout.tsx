import { Outlet } from "react-router-dom";

import { SkipLink } from "../../components";
import { InternalHeader } from "./InternalHeader";
import { InternalSidebar } from "./InternalSidebar";

import "./InternalLayout.css";

export function InternalLayout() {
  return (
    <div
      className="internal-layout"
      data-portal="internal"
    >
      <SkipLink href="#internal-main-content">
        Lewati ke konten utama
      </SkipLink>

      <InternalSidebar />

      <div className="internal-layout__workspace">
        <InternalHeader />

        <main
          id="internal-main-content"
          className="internal-layout__main"
          tabIndex={-1}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}