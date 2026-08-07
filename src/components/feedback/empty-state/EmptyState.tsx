import { forwardRef } from "react";
import { Inbox } from "lucide-react";

import {
  getFeedbackAnnouncementAttributes,
  joinFeedbackClassNames,
} from "../shared";
import type { EmptyStateProps } from "./EmptyState.types";

import "./EmptyState.css";

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      icon: Icon = Inbox,
      primaryAction,
      secondaryAction,
      supportingContent,
      variant = "default",
      announcement = "none",
      className,
      ...containerProps
    },
    ref,
  ) => {
    const announcementAttributes =
      getFeedbackAnnouncementAttributes(announcement);

    const hasActions = Boolean(primaryAction) || Boolean(secondaryAction);

    return (
      <div
        {...containerProps}
        {...announcementAttributes}
        ref={ref}
        data-variant={variant}
        className={joinFeedbackClassNames(
          "stip-result-state",
          "stip-empty-state",
          className,
        )}
      >
        <div className="stip-result-state__icon">
          <Icon aria-hidden="true" focusable="false" />
        </div>

        <div className="stip-result-state__content">
          <div className="stip-result-state__text">
            <div className="stip-result-state__title">{title}</div>

            {description ? (
              <div className="stip-result-state__description">
                {description}
              </div>
            ) : null}
          </div>

          {supportingContent ? (
            <div className="stip-result-state__supporting">
              {supportingContent}
            </div>
          ) : null}

          {hasActions ? (
            <div className="stip-result-state__actions">
              {primaryAction}
              {secondaryAction}
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);

EmptyState.displayName = "EmptyState";
