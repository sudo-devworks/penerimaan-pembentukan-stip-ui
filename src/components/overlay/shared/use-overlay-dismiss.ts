import { useDismiss, useInteractions } from "@floating-ui/react";

import type { FloatingContext } from "@floating-ui/react";

export interface UseOverlayDismissOptions {
  /**
   * Enables dismissal handling.
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * Allows Escape-key dismissal.
   *
   * @default true
   */
  escapeKey?: boolean;

  /**
   * Allows pointer interaction outside the
   * reference and floating elements to dismiss.
   *
   * @default true
   */
  outsidePress?: boolean;

  /**
   * Allows pressing the reference element
   * to dismiss an open overlay.
   *
   * @default false
   */
  referencePress?: boolean;

  /**
   * Dismisses when an overflow ancestor scrolls.
   *
   * @default false
   */
  ancestorScroll?: boolean;
}

export const useOverlayDismiss = (
  context: FloatingContext,
  {
    enabled = true,
    escapeKey = true,
    outsidePress = true,
    referencePress = false,
    ancestorScroll = false,
  }: UseOverlayDismissOptions = {},
) => {
  const dismiss = useDismiss(context, {
    enabled,
    escapeKey,
    outsidePress,
    referencePress,
    ancestorScroll,

    /*
     * Only the active nested layer handles
     * Escape and outside press.
     */
    bubbles: {
      escapeKey: false,
      outsidePress: false,
    },
  });

  return useInteractions([dismiss]);
};
