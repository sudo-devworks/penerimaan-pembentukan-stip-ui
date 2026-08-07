import type { HTMLAttributes, ReactNode, SVGAttributes } from "react";

import type { ButtonProps } from "../../actions/button";

import type { OverlayOpenChangeHandler, OverlayPlacement } from "../shared";

export interface TooltipProps {
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
   * @default 'top'
   */
  placement?: OverlayPlacement;

  /**
   * Delay before opening through pointer hover.
   *
   * @default 500
   */
  openDelay?: number;

  /**
   * Delay before closing after pointer leave.
   *
   * @default 0
   */
  closeDelay?: number;

  /**
   * Allows Escape-key dismissal.
   *
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Portal target.
   */
  portalContainer?: HTMLElement | null;
}

export type TooltipTriggerProps = Omit<ButtonProps, "aria-describedby">;

export type TooltipContentProps = HTMLAttributes<HTMLDivElement>;

export interface TooltipArrowProps extends Omit<
  SVGAttributes<SVGSVGElement>,
  "width" | "height" | "strokeWidth"
> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  tipRadius?: number;
  staticOffset?: number | string | null;
}
