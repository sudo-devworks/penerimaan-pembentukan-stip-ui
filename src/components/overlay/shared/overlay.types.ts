export type OverlayDismissReason =
  | "escape-key"
  | "pointer-outside"
  | "focus-outside"
  | "backdrop"
  | "close-action"
  | "item-select"
  | "trigger-toggle"
  | "programmatic";

export type OverlayPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

export type OverlayDensity = "comfortable" | "compact";

export interface OverlayOpenChangeDetails {
  reason: OverlayDismissReason;
}

export type OverlayOpenChangeHandler = (
  open: boolean,
  details: OverlayOpenChangeDetails,
) => void;
