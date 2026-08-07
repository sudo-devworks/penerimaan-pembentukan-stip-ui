import { forwardRef } from "react";

import { LoadingIndicator } from "../loading-indicator";
import {
  getFeedbackAnnouncementAttributes,
  joinFeedbackClassNames,
} from "../shared";
import type { LoadingMessageProps } from "./LoadingMessage.types";

import "./LoadingMessage.css";

export const LoadingMessage = forwardRef<HTMLDivElement, LoadingMessageProps>(
  (
    {
      title,
      description,
      size = "md",
      announcement = "polite",
      className,
      ...containerProps
    },
    ref,
  ) => {
    const announcementAttributes =
      getFeedbackAnnouncementAttributes(announcement);

    return (
      <div
        {...containerProps}
        {...announcementAttributes}
        ref={ref}
        className={joinFeedbackClassNames("stip-loading-message", className)}
      >
        <LoadingIndicator decorative size={size} />

        <div className="stip-loading-message__content">
          <div className="stip-loading-message__title">{title}</div>

          {description ? (
            <div className="stip-loading-message__description">
              {description}
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);

LoadingMessage.displayName = "LoadingMessage";
