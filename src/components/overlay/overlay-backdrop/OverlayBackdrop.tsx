import { FloatingOverlay } from "@floating-ui/react";
import { forwardRef } from "react";

import { joinOverlayClassNames } from "../shared";

import type { OverlayBackdropProps } from "./OverlayBackdrop.types";

import "./OverlayBackdrop.css";

export const OverlayBackdrop = forwardRef<HTMLDivElement, OverlayBackdropProps>(
  (
    {
      className,
      children,
      lockScroll = false,
      onBackdropClick,
      onMouseDown,
      ...restProps
    },
    ref,
  ) => {
    return (
      <FloatingOverlay
        {...restProps}
        ref={ref}
        lockScroll={lockScroll}
        className={joinOverlayClassNames("stip-overlay-backdrop", className)}
        onMouseDown={(event) => {
          onMouseDown?.(event);

          if (event.defaultPrevented || event.target !== event.currentTarget) {
            return;
          }

          onBackdropClick?.(event);
        }}
      >
        {children}
      </FloatingOverlay>
    );
  },
);

OverlayBackdrop.displayName = "OverlayBackdrop";
