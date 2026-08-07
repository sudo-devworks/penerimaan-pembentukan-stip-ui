import type { ReactNode } from "react";

export interface OverlayPortalProps {
  children: ReactNode;

  /**
   * Optional portal target.
   * Defaults to document.body in browser environments.
   */
  container?: HTMLElement | null;
}
