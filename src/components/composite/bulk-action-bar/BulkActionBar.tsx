import { forwardRef } from "react";

import "./BulkActionBar.css";

import type { BulkActionBarProps } from "./BulkActionBar.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const BulkActionBar = forwardRef<HTMLDivElement, BulkActionBarProps>(
  function BulkActionBar(
    { actions, className, clearAction, description, summary, ...barProps },
    ref,
  ) {
    return (
      <div
        {...barProps}
        ref={ref}
        className={joinClassNames("bulk-action-bar", className)}
      >
        <div className="bulk-action-bar__context">
          <div aria-live="polite" className="bulk-action-bar__summary">
            {summary}
          </div>

          {description ? (
            <div className="bulk-action-bar__description">{description}</div>
          ) : null}
        </div>

        <div className="bulk-action-bar__controls">
          <div className="bulk-action-bar__actions">{actions}</div>

          {clearAction ? (
            <div className="bulk-action-bar__clear">{clearAction}</div>
          ) : null}
        </div>
      </div>
    );
  },
);

BulkActionBar.displayName = "BulkActionBar";
