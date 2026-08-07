import type { HTMLAttributes, ReactNode, RefObject } from "react";

import type { ButtonProps } from "../../actions/button";

import type { OverlayOpenChangeHandler } from "../shared";

export type AlertDialogSize = "sm" | "md" | "lg";

export interface AlertDialogProps {
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
   * Keep enabled only when cancelling the
   * decision is safe.
   *
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * AlertDialog does not dismiss through
   * backdrop interaction by default.
   *
   * @default false
   */
  closeOnBackdrop?: boolean;

  /**
   * Explicit initial focus target.
   *
   * Usually points to AlertDialogCancel.
   */
  initialFocusRef?: RefObject<HTMLElement | null>;

  /**
   * Portal target.
   */
  portalContainer?: HTMLElement | null;
}

export type AlertDialogTriggerProps = Omit<
  ButtonProps,
  "aria-expanded" | "aria-haspopup"
>;

export interface AlertDialogContentProps extends HTMLAttributes<HTMLDivElement> {
  size?: AlertDialogSize;

  /**
   * Fallback accessible name when
   * AlertDialogTitle is not present.
   */
  "aria-label"?: string;
}

export type AlertDialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export type AlertDialogTitleProps = HTMLAttributes<HTMLHeadingElement>;

export type AlertDialogDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export type AlertDialogBodyProps = HTMLAttributes<HTMLDivElement>;

export type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>;

export interface AlertDialogCancelProps extends Omit<ButtonProps, "onClick"> {
  onClick?: ButtonProps["onClick"];
}
