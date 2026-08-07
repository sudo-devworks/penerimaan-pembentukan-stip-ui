import type { HTMLAttributes, ReactNode, SVGAttributes } from "react";

import type { ButtonProps } from "../../actions/button";

import type { OverlayOpenChangeHandler, OverlayPlacement } from "../shared";

export interface PopoverProps {
  children: ReactNode;

  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Initial uncontrolled open state.
   *
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Reports requested state changes.
   */
  onOpenChange?: OverlayOpenChangeHandler;

  /**
   * Preferred placement relative to the trigger.
   *
   * @default 'bottom-start'
   */
  placement?: OverlayPlacement;

  /**
   * Allows Escape-key dismissal.
   *
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Allows pointer interaction outside the
   * Popover to dismiss it.
   *
   * @default true
   */
  closeOnOutsidePress?: boolean;

  /**
   * Portal target.
   */
  portalContainer?: HTMLElement | null;
}

export type PopoverTriggerProps = Omit<
  ButtonProps,
  "aria-expanded" | "aria-controls"
>;

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Explicit accessible name when the
   * consumer assigns a semantic role.
   */
  "aria-label"?: string;
}

export interface PopoverArrowProps extends Omit<
  SVGAttributes<SVGSVGElement>,
  "width" | "height" | "strokeWidth"
> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  tipRadius?: number;
  staticOffset?: number | string | null;
}
