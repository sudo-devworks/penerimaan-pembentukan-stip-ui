import { forwardRef } from "react";
import { X } from "lucide-react";

import { IconButton } from "../../actions";
import {
  FeedbackIcon,
  getFeedbackAnnouncementAttributes,
  joinFeedbackClassNames,
} from "../shared";
import type { InlineAlertProps } from "./InlineAlert.types";

import "./InlineAlert.css";

export const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(
  (
    {
      severity = "neutral",
      title,
      children,
      icon,
      action,
      dismissible = false,
      onDismiss,
      dismissLabel = "Tutup pesan",
      announcement = "none",
      className,
      ...containerProps
    },
    ref,
  ) => {
    const announcementAttributes =
      getFeedbackAnnouncementAttributes(announcement);

    const canDismiss = dismissible && Boolean(onDismiss);

    return (
      <div
        {...containerProps}
        {...announcementAttributes}
        ref={ref}
        data-severity={severity}
        className={joinFeedbackClassNames("stip-inline-alert", className)}
      >
        <div className="stip-inline-alert__icon">
          <FeedbackIcon severity={severity} icon={icon} />
        </div>

        <div className="stip-inline-alert__body">
          {title ? (
            <div className="stip-inline-alert__title">{title}</div>
          ) : null}

          <div className="stip-inline-alert__description">{children}</div>

          {action ? (
            <div className="stip-inline-alert__action">{action}</div>
          ) : null}
        </div>

        {canDismiss ? (
          <div className="stip-inline-alert__dismiss">
            <IconButton
              icon={<X />}
              aria-label={dismissLabel}
              variant="ghost"
              size="sm"
              onClick={onDismiss}
            />
          </div>
        ) : null}
      </div>
    );
  },
);

InlineAlert.displayName = "InlineAlert";
