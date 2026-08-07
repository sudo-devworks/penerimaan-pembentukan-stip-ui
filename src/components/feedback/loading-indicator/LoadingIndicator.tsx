import { forwardRef } from "react";

import { joinFeedbackClassNames } from "../shared";
import type { LoadingIndicatorProps } from "./LoadingIndicator.types";

import "./LoadingIndicator.css";

export const LoadingIndicator = forwardRef<
  HTMLSpanElement,
  LoadingIndicatorProps
>(
  (
    {
      label = "Memuat",
      decorative = false,
      size = "md",
      className,
      ...indicatorProps
    },
    ref,
  ) => {
    return (
      <span
        {...indicatorProps}
        ref={ref}
        role={decorative ? undefined : "status"}
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative || undefined}
        data-size={size}
        className={joinFeedbackClassNames("stip-loading-indicator", className)}
      />
    );
  },
);

LoadingIndicator.displayName = "LoadingIndicator";
