import { forwardRef } from "react";

import "./StatGroup.css";

import type { StatGroupProps, StatItemProps } from "./StatGroup.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const StatGroup = forwardRef<HTMLDivElement, StatGroupProps>(
  function StatGroup({ children, className, columns = 3, ...groupProps }, ref) {
    return (
      <div
        {...groupProps}
        ref={ref}
        className={joinClassNames(
          "stat-group",
          `stat-group--columns-${columns}`,
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

StatGroup.displayName = "StatGroup";

export const StatItem = forwardRef<HTMLDivElement, StatItemProps>(
  function StatItem(
    { className, description, icon, label, trend, value, ...itemProps },
    ref,
  ) {
    return (
      <div
        {...itemProps}
        ref={ref}
        className={joinClassNames("stat-item", className)}
      >
        <div className="stat-item__header">
          <div className="stat-item__label">{label}</div>

          {icon ? (
            <div className="stat-item__icon" aria-hidden>
              {icon}
            </div>
          ) : null}
        </div>

        <div className="stat-item__value">{value}</div>

        {description || trend ? (
          <div className="stat-item__supporting">
            {description ? (
              <div className="stat-item__description">{description}</div>
            ) : null}

            {trend ? <div className="stat-item__trend">{trend}</div> : null}
          </div>
        ) : null}
      </div>
    );
  },
);

StatItem.displayName = "StatItem";
