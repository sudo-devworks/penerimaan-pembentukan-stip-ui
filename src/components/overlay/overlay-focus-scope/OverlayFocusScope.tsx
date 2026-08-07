import { FloatingFocusManager } from "@floating-ui/react";

import type { OverlayFocusScopeProps } from "./OverlayFocusScope.types";

export const OverlayFocusScope = ({
  context,
  children,
  modal = true,
  initialFocus,
  returnFocus = true,
  restoreFocus = true,
  outsideElementsInert = modal,
  visuallyHiddenDismiss = false,
  closeOnFocusOut = true,
  disabled = false,
}: OverlayFocusScopeProps) => {
  return (
    <FloatingFocusManager
      context={context}
      modal={modal}
      initialFocus={initialFocus}
      returnFocus={returnFocus}
      restoreFocus={restoreFocus}
      outsideElementsInert={outsideElementsInert}
      visuallyHiddenDismiss={visuallyHiddenDismiss}
      closeOnFocusOut={closeOnFocusOut}
      disabled={disabled}
    >
      {children}
    </FloatingFocusManager>
  );
};
