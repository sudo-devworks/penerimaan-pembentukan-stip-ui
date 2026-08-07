import { createContext, useContext } from "react";

import type { CSSProperties } from "react";

import type { FloatingContext } from "@floating-ui/react";

import type { OverlayDismissReason, OverlayPlacement } from "../shared";

export interface PopoverContextValue {
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

  floatingStyles: CSSProperties;

  contentId: string;

  placement: OverlayPlacement;

  setArrowElement: (element: SVGSVGElement | null) => void;

  requestClose: (reason: OverlayDismissReason) => void;

  portalContainer?: HTMLElement | null;
}

export const PopoverContext = createContext<PopoverContextValue | null>(null);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error(
      "Popover compound components must be rendered inside Popover.",
    );
  }

  return context;
};
