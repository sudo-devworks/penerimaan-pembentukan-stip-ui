import { createContext, useContext } from "react";

import type { FloatingContext } from "@floating-ui/react";

import type { OverlayDismissReason } from "../shared";

export interface DialogContextValue {
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

export const DialogContext = createContext<DialogContextValue | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(
      "Dialog compound components must be rendered inside Dialog.",
    );
  }

  return context;
};
