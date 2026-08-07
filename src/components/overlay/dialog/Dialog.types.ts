import type { HTMLAttributes, ReactNode } from "react";

import type { ButtonProps } from "../../actions/button";

import type { OverlayOpenChangeHandler } from "../shared";

export type DialogSize = "sm" | "md" | "lg" | "xl";

export interface DialogProps {
  children: ReactNode;

  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Initial state for uncontrolled usage.
   *
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Called whenever the overlay requests
   * an open-state change.
   */
  onOpenChange?: OverlayOpenChangeHandler;

  /**
   * Allows Escape to dismiss the Dialog.
   *
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Allows backdrop interaction to dismiss
   * the Dialog.
   *
   * @default true
   */
  closeOnBackdrop?: boolean;

  /**
   * Portal target.
   * Defaults to document.body.
   */
  portalContainer?: HTMLElement | null;
}

export type DialogTriggerProps = Omit<
  ButtonProps,
  "aria-expanded" | "aria-haspopup"
>;

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the maximum surface width.
   *
   * @default 'md'
   */
  size?: DialogSize;

  /**
   * Explicit accessible label when
   * DialogTitle is not used.
   */
  "aria-label"?: string;
}

export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export type DialogTitleProps = HTMLAttributes<HTMLHeadingElement>;

export type DialogDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export type DialogBodyProps = HTMLAttributes<HTMLDivElement>;

export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

export interface DialogCloseProps extends Omit<ButtonProps, "onClick"> {
  /**
   * Additional consumer click handler.
   * Preventing default prevents dismissal.
   */
  onClick?: ButtonProps["onClick"];
}
