import { forwardRef } from "react";

import { joinFeedbackClassNames } from "../shared";
import { Skeleton } from "./Skeleton";
import type { SkeletonBlockProps } from "./Skeleton.types";

export const SkeletonBlock = forwardRef<HTMLSpanElement, SkeletonBlockProps>(
  ({ className, ...skeletonProps }, ref) => {
    return (
      <Skeleton
        {...skeletonProps}
        ref={ref}
        className={joinFeedbackClassNames("stip-skeleton-block", className)}
      />
    );
  },
);

SkeletonBlock.displayName = "SkeletonBlock";
