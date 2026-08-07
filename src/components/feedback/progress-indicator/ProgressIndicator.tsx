import { forwardRef, useId } from "react";

import { joinFeedbackClassNames } from "../shared";
import type { ProgressIndicatorProps } from "./ProgressIndicator.types";
import { clampProgressValue, getProgressPercentage } from "./progress.utils";

import "./ProgressIndicator.css";

export const ProgressIndicator = forwardRef<
  HTMLDivElement,
  ProgressIndicatorProps
>(
  (
    {
      label,
      mode = "determinate",
      value = 0,
      min = 0,
      max = 100,
      valueText,
      description,
      showLabel = true,
      showValue = true,
      className,
      ...containerProps
    },
    ref,
  ) => {
    const generatedLabelId = useId();
    const generatedDescriptionId = useId();

    const isDeterminate = mode === "determinate";

    const safeValue = clampProgressValue(value, min, max);

    const percentage = getProgressPercentage(safeValue, min, max);

    const visibleValue = valueText ?? `${Math.round(percentage)}%`;

    return (
      <div
        {...containerProps}
        ref={ref}
        data-mode={mode}
        className={joinFeedbackClassNames("stip-progress", className)}
      >
        {showLabel || showValue ? (
          <div className="stip-progress__header">
            {showLabel ? (
              <span id={generatedLabelId} className="stip-progress__label">
                {label}
              </span>
            ) : null}

            {showValue && isDeterminate ? (
              <span className="stip-progress__value">{visibleValue}</span>
            ) : null}
          </div>
        ) : null}

        <div
          role="progressbar"
          aria-label={showLabel ? undefined : label}
          aria-labelledby={showLabel ? generatedLabelId : undefined}
          aria-describedby={description ? generatedDescriptionId : undefined}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={isDeterminate ? safeValue : undefined}
          aria-valuetext={isDeterminate ? valueText : undefined}
          className="stip-progress__track"
        >
          <span
            className="stip-progress__fill"
            style={
              isDeterminate
                ? {
                    width: `${percentage}%`,
                  }
                : undefined
            }
          />
        </div>

        {description ? (
          <div
            id={generatedDescriptionId}
            className="stip-progress__description"
          >
            {description}
          </div>
        ) : null}
      </div>
    );
  },
);

ProgressIndicator.displayName = "ProgressIndicator";
