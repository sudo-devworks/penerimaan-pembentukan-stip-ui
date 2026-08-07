import { forwardRef } from "react";

import "./NotificationItem.css";

import type { NotificationItemProps } from "./NotificationItem.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const NotificationItem = forwardRef<HTMLElement, NotificationItemProps>(
  function NotificationItem(
    {
      actions,
      className,
      description,
      icon,
      metadata,
      timestamp,
      title,
      unread = false,
      variant = "default",
      ...articleProps
    },
    ref,
  ) {
    return (
      <article
        {...articleProps}
        ref={ref}
        className={joinClassNames(
          "notification-item",
          `notification-item--${variant}`,
          unread && "notification-item--unread",
          className,
        )}
      >
        {icon ? (
          <div className="notification-item__icon" aria-hidden>
            {icon}
          </div>
        ) : null}

        <div className="notification-item__content">
          <div className="notification-item__header">
            <div className="notification-item__title-row">
              <div className="notification-item__title">{title}</div>

              {unread ? (
                <span
                  aria-label="Belum dibaca"
                  className="notification-item__unread"
                />
              ) : null}
            </div>

            {timestamp ? (
              <div className="notification-item__timestamp">{timestamp}</div>
            ) : null}
          </div>

          {description ? (
            <div className="notification-item__description">{description}</div>
          ) : null}

          {metadata ? (
            <div className="notification-item__metadata">{metadata}</div>
          ) : null}

          {actions ? (
            <div className="notification-item__actions">{actions}</div>
          ) : null}
        </div>
      </article>
    );
  },
);

NotificationItem.displayName = "NotificationItem";
