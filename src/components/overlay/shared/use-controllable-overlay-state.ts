import { useCallback, useState } from "react";

import type {
  OverlayDismissReason,
  OverlayOpenChangeHandler,
} from "./overlay.types";

export interface UseControllableOverlayStateOptions {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: OverlayOpenChangeHandler;
}

export interface OverlayStateChangeOptions {
  reason: OverlayDismissReason;
}

export const useControllableOverlayState = ({
  open,
  defaultOpen = false,
  onOpenChange,
}: UseControllableOverlayStateOptions) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;

  const isOpen = isControlled ? open : uncontrolledOpen;

  const setOpen = useCallback(
    (nextOpen: boolean, details: OverlayStateChangeOptions) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen, {
        reason: details.reason,
      });
    },
    [isControlled, onOpenChange],
  );

  return {
    isOpen,
    setOpen,
  };
};
