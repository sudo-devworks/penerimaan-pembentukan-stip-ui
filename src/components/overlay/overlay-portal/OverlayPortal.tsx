import { FloatingPortal } from "@floating-ui/react";

import type { OverlayPortalProps } from "./OverlayPortal.types";

export const OverlayPortal = ({ children, container }: OverlayPortalProps) => {
  return <FloatingPortal root={container}>{children}</FloatingPortal>;
};
