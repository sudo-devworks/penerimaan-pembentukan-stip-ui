import { createContext, useContext } from "react";

import type { CSSProperties, MutableRefObject, MouseEvent } from "react";

import type { FloatingContext } from "@floating-ui/react";

import type { OverlayDismissReason } from "../shared";

export interface MenuContextValue {
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

  getItemProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;

  floatingStyles: CSSProperties;

  contentId: string;

  activeIndex: number | null;

  elementsRef: MutableRefObject<Array<HTMLElement | null>>;

  labelsRef: MutableRefObject<Array<string | null>>;

  requestClose: (reason: OverlayDismissReason) => void;

  portalContainer?: HTMLElement | null;
}

export const MenuContext = createContext<MenuContextValue | null>(null);

export interface MenuRadioGroupContextValue {
  value: string;

  onValueChange?: (value: string, event: MouseEvent<HTMLButtonElement>) => void;
}

export const MenuRadioGroupContext =
  createContext<MenuRadioGroupContextValue | null>(null);

export const useMenuRadioGroupContext = () => {
  const context = useContext(MenuRadioGroupContext);

  if (!context) {
    throw new Error("MenuRadioItem must be rendered inside MenuRadioGroup.");
  }

  return context;
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("Menu compound components must be rendered inside Menu.");
  }

  return context;
};
