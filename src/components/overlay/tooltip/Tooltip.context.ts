import { createContext, useContext } from "react";

import type { CSSProperties } from "react";

import type { FloatingContext } from "@floating-ui/react";

export interface TooltipContextValue {
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

  setArrowElement: (element: SVGSVGElement | null) => void;

  closeFromTrigger: () => void;

  portalContainer?: HTMLElement | null;
}

export const TooltipContext = createContext<TooltipContextValue | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error(
      "Tooltip compound components must be rendered inside Tooltip.",
    );
  }

  return context;
};
