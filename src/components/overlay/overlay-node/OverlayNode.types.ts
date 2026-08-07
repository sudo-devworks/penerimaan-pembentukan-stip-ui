import type { ReactNode } from "react";

export interface OverlayNodeProps {
  children: (nodeId: string) => ReactNode;
}
