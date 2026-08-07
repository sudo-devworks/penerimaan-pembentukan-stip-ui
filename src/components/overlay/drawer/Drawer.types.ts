import type { HTMLAttributes, ReactNode } from "react";

import type { ButtonProps } from "../../actions/button";

import type { OverlayOpenChangeHandler } from "../shared";

export type DrawerPlacement = "left" | "right" | "top" | "bottom";

export type DrawerSize = "sm" | "md" | "lg";

export interface DrawerProps {
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
   * Allows Escape-key dismissal.
   *
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Allows backdrop dismissal.
   *
   * @default true
   */
  closeOnBackdrop?: boolean;

  /**
   * Portal target.
   */
  portalContainer?: HTMLElement | null;
}

export type DrawerTriggerProps = Omit<
  ButtonProps,
  "aria-expanded" | "aria-haspopup"
>;

export interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Edge of the viewport from which the
   * Drawer is presented.
   *
   * @default 'right'
   */
  placement?: DrawerPlacement;

  /**
   * Controls width for left/right drawers
   * and height for top/bottom drawers.
   *
   * @default 'md'
   */
  size?: DrawerSize;

  /**
   * Fallback accessible name when
   * DrawerTitle is not rendered.
   */
  "aria-label"?: string;
}

export type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>;

export type DrawerTitleProps = HTMLAttributes<HTMLHeadingElement>;

export type DrawerDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export type DrawerBodyProps = HTMLAttributes<HTMLDivElement>;

export type DrawerFooterProps = HTMLAttributes<HTMLDivElement>;

export interface DrawerCloseProps extends Omit<ButtonProps, "onClick"> {
  /**
   * Additional click handler.
   * Preventing default prevents dismissal.
   */
  onClick?: ButtonProps["onClick"];
}
