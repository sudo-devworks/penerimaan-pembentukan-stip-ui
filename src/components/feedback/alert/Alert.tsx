import { forwardRef } from "react";
import { X } from "lucide-react";

import { IconButton } from "../../actions";
import {
  FeedbackIcon,
  getFeedbackAnnouncementAttributes,
  joinFeedbackClassNames,
} from "../shared";
import type { AlertProps } from "./Alert.types";

import "./Alert.css";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
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
        className={joinFeedbackClassNames("stip-alert", className)}
      >
        <div className="stip-alert__icon">
          <FeedbackIcon severity={severity} icon={icon} />
        </div>

        <div className="stip-alert__body">
          <div className="stip-alert__content">
            {title ? <div className="stip-alert__title">{title}</div> : null}

            <div className="stip-alert__description">{children}</div>
          </div>

          {action ? <div className="stip-alert__actions">{action}</div> : null}
        </div>

        {canDismiss ? (
          <div className="stip-alert__dismiss">
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

Alert.displayName = "Alert";
