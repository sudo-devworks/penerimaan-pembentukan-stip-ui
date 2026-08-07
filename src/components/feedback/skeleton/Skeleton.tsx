import { forwardRef } from "react";

import { joinFeedbackClassNames } from "../shared";
import type { SkeletonProps } from "./Skeleton.types";

import "./Skeleton.css";

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  (
    {
      label,
      animation = "shimmer",
      width,
      height,
      circular = false,
      className,
      style,
      ...skeletonProps
    },
    ref,
  ) => {
    return (
      <span
        {...skeletonProps}
        ref={ref}
        role={label ? "status" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        data-animation={animation}
        data-circular={circular || undefined}
        style={{
          ...style,
          width,
          height,
        }}
        className={joinFeedbackClassNames("stip-skeleton", className)}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
