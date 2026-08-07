import { forwardRef } from "react";

import { joinFeedbackClassNames } from "../shared";
import type { ToastRegionProps } from "./ToastRegion.types";

import "./ToastRegion.css";

export const ToastRegion = forwardRef<HTMLDivElement, ToastRegionProps>(
  (
    {
      children,
      label = "Notifikasi",
      placement = "top-right",
      className,
      ...regionProps
    },
    ref,
  ) => {
    return (
      <div
        {...regionProps}
        ref={ref}
        role="region"
        aria-label={label}
        data-placement={placement}
        className={joinFeedbackClassNames("stip-toast-region", className)}
      >
        {children}
      </div>
    );
  },
);

ToastRegion.displayName = "ToastRegion";
