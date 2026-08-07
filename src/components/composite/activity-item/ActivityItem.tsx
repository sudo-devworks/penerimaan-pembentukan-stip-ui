import { forwardRef } from "react";

import "./ActivityItem.css";

import type { ActivityItemProps } from "./ActivityItem.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const ActivityItem = forwardRef<HTMLDivElement, ActivityItemProps>(
  function ActivityItem(
    {
      actions,
      className,
      description,
      icon,
      metadata,
      timestamp,
      title,
      ...itemProps
    },
    ref,
  ) {
    return (
      <div
        {...itemProps}
        ref={ref}
        className={joinClassNames("activity-item", className)}
      >
        {icon ? (
          <div className="activity-item__icon" aria-hidden>
            {icon}
          </div>
        ) : null}

        <div className="activity-item__content">
          <div className="activity-item__header">
            <div className="activity-item__title">{title}</div>

            {timestamp ? (
              <div className="activity-item__timestamp">{timestamp}</div>
            ) : null}
          </div>

          {description ? (
            <div className="activity-item__description">{description}</div>
          ) : null}

          {metadata ? (
            <div className="activity-item__metadata">{metadata}</div>
          ) : null}
        </div>

        {actions ? (
          <div className="activity-item__actions">{actions}</div>
        ) : null}
      </div>
    );
  },
);

ActivityItem.displayName = "ActivityItem";
