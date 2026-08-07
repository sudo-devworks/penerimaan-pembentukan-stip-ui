import type { OverlayDismissReason } from "./overlay.types";

export const mapFloatingOpenChangeReason = (
  reason?: string,
): OverlayDismissReason => {
  switch (reason) {
    case "escape-key":
      return "escape-key";

    case "outside-press":
      return "pointer-outside";

    case "reference-press":
    case "click":
      return "trigger-toggle";

    default:
      return "programmatic";
  }
};
