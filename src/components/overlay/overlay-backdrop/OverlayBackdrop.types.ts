import type { HTMLAttributes, MouseEventHandler } from "react";

export interface OverlayBackdropProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onClick"
> {
  /**
   * Prevents body scrolling while mounted.
   *
   * @default false
   */
  lockScroll?: boolean;

  /**
   * Invoked only when the backdrop itself is
   * activated, not when a descendant is clicked.
   */
  onBackdropClick?: MouseEventHandler<HTMLDivElement>;
}
