import { createContext, useContext } from "react";

import type { FloatingContext } from "@floating-ui/react";

import type { OverlayDismissReason } from "../shared";

export interface DrawerContextValue {
  isOpen: boolean;

  context: FloatingContext;

  setReference: (node: HTMLElement | null) => void;

  setFloating: (node: HTMLElement | null) => void;

  getReferenceProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;

  getFloatingProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;

  titleId: string;
  descriptionId: string;

  titleMounted: boolean;
  descriptionMounted: boolean;

  setTitleMounted: (mounted: boolean) => void;

  setDescriptionMounted: (mounted: boolean) => void;

  requestClose: (reason: OverlayDismissReason) => void;

  closeOnBackdrop: boolean;

  portalContainer?: HTMLElement | null;
}

export const DrawerContext = createContext<DrawerContextValue | null>(null);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error(
      "Drawer compound components must be rendered inside Drawer.",
    );
  }

  return context;
};
