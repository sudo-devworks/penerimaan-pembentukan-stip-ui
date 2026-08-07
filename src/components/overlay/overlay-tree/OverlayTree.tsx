import { FloatingTree } from "@floating-ui/react";

import type { OverlayTreeProps } from "./OverlayTree.types";

export const OverlayTree = ({ children }: OverlayTreeProps) => {
  return <FloatingTree>{children}</FloatingTree>;
};
