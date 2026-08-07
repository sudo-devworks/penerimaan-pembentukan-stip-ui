import type { FloatingContext } from "@floating-ui/react";
import type { MutableRefObject, ReactElement } from "react";

export interface OverlayFocusScopeProps {
  /**
   * Floating UI context owned by the overlay root.
   */
  context: FloatingContext;

  children: ReactElement;

  /**
   * Traps focus and makes outside content
   * inaccessible while the overlay is open.
   *
   * @default true
   */
  modal?: boolean;

  /**
   * Element or tabbable index that receives
   * focus when the overlay opens.
   */
  initialFocus?: number | MutableRefObject<HTMLElement | null>;

  /**
   * Returns focus to the reference element
   * or the supplied target after closing.
   *
   * @default true
   */
  returnFocus?: boolean | MutableRefObject<HTMLElement | null>;

  /**
   * Restores focus when the currently focused
   * element is removed from the overlay.
   *
   * @default true
   */
  restoreFocus?: boolean;

  /**
   * Makes outside elements inert for modal
   * screen-reader and pointer interaction.
   *
   * @default true for modal overlays
   */
  outsideElementsInert?: boolean;

  /**
   * Provides an invisible dismissal control
   * for touch screen-reader users when no
   * visible close action exists.
   */
  visuallyHiddenDismiss?: boolean | string;

  /**
   * Closes a non-modal overlay when focus moves
   * outside the reference and floating elements.
   *
   * @default true
   */
  closeOnFocusOut?: boolean;

  /**
   * Disables focus management temporarily.
   *
   * @default false
   */
  disabled?: boolean;
}
