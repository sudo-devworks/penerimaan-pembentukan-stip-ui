import { forwardRef } from "react";

import { joinFeedbackClassNames } from "../shared";
import { Skeleton } from "./Skeleton";
import type { SkeletonTextProps } from "./Skeleton.types";

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  (
    {
      lines = 3,
      lastLineWidth = "72%",
      animation = "shimmer",
      className,
      ...containerProps
    },
    ref,
  ) => {
    const safeLineCount = Math.max(1, Math.floor(lines));

    return (
      <div
        {...containerProps}
        ref={ref}
        aria-hidden="true"
        className={joinFeedbackClassNames("stip-skeleton-text", className)}
      >
        {Array.from(
          {
            length: safeLineCount,
          },
          (_, index) => {
            const isLastLine = index === safeLineCount - 1;

            return (
              <Skeleton
                key={index}
                animation={animation}
                width={isLastLine ? lastLineWidth : "100%"}
                className="stip-skeleton-text__line"
              />
            );
          },
        )}
      </div>
    );
  },
);

SkeletonText.displayName = "SkeletonText";
