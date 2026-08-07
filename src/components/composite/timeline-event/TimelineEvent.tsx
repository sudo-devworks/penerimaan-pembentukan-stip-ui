import { forwardRef } from "react";

import "./TimelineEvent.css";

import type { TimelineEventProps } from "./TimelineEvent.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const TimelineEvent = forwardRef<HTMLLIElement, TimelineEventProps>(
  function TimelineEvent(
    {
      actions,
      className,
      description,
      icon,
      last = false,
      metadata,
      state = "default",
      timestamp,
      title,
      ...itemProps
    },
    ref,
  ) {
    return (
      <li
        {...itemProps}
        ref={ref}
        className={joinClassNames(
          "timeline-event",
          `timeline-event--${state}`,
          last && "timeline-event--last",
          className,
        )}
      >
        <div className="timeline-event__rail" aria-hidden>
          <div className="timeline-event__marker">
            {icon ?? <span className="timeline-event__dot" />}
          </div>

          {!last ? <div className="timeline-event__line" /> : null}
        </div>

        <div className="timeline-event__content">
          <div className="timeline-event__header">
            <div className="timeline-event__title">{title}</div>

            {timestamp ? (
              <div className="timeline-event__timestamp">{timestamp}</div>
            ) : null}
          </div>

          {description ? (
            <div className="timeline-event__description">{description}</div>
          ) : null}

          {metadata ? (
            <div className="timeline-event__metadata">{metadata}</div>
          ) : null}

          {actions ? (
            <div className="timeline-event__actions">{actions}</div>
          ) : null}
        </div>
      </li>
    );
  },
);

TimelineEvent.displayName = "TimelineEvent";
