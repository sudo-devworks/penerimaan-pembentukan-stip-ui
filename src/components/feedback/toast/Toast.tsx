import { forwardRef, useCallback, useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

import { IconButton } from "../../actions";
import {
  FeedbackIcon,
  getFeedbackAnnouncementAttributes,
  joinFeedbackClassNames,
} from "../shared";
import type { ToastProps } from "./Toast.types";

import "./Toast.css";

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      severity = "neutral",
      title,
      children,
      icon,
      action,
      dismissible = true,
      onDismiss,
      dismissLabel = "Tutup notifikasi",
      duration = 5000,
      announcement = "polite",
      className,
      onMouseEnter,
      onMouseLeave,
      onFocusCapture,
      onBlurCapture,
      ...containerProps
    },
    ref,
  ) => {
    const generatedTitleId = useId();
    const generatedDescriptionId = useId();

    const timeoutRef = useRef<number | null>(null);
    const remainingDurationRef = useRef(duration ?? 0);
    const startedAtRef = useRef<number | null>(null);

    const announcementAttributes =
      getFeedbackAnnouncementAttributes(announcement);

    const canDismiss = dismissible && typeof onDismiss === "function";

    const clearDismissTimer = useCallback(() => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }, []);

    const pauseDismissTimer = useCallback(() => {
      if (duration === null || !onDismiss || startedAtRef.current === null) {
        return;
      }

      const elapsed = Date.now() - startedAtRef.current;

      remainingDurationRef.current = Math.max(
        0,
        remainingDurationRef.current - elapsed,
      );

      startedAtRef.current = null;
      clearDismissTimer();
    }, [clearDismissTimer, duration, onDismiss]);

    const startDismissTimer = useCallback(() => {
      if (
        duration === null ||
        !onDismiss ||
        remainingDurationRef.current <= 0
      ) {
        return;
      }

      clearDismissTimer();

      startedAtRef.current = Date.now();

      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        startedAtRef.current = null;
        remainingDurationRef.current = 0;
        onDismiss();
      }, remainingDurationRef.current);
    }, [clearDismissTimer, duration, onDismiss]);

    useEffect(() => {
      remainingDurationRef.current = duration ?? 0;

      if (duration !== null && duration > 0 && onDismiss) {
        startDismissTimer();
      }

      return clearDismissTimer;
    }, [clearDismissTimer, duration, onDismiss, startDismissTimer]);

    const handleMouseEnter: ToastProps["onMouseEnter"] = (event) => {
      pauseDismissTimer();
      onMouseEnter?.(event);
    };

    const handleMouseLeave: ToastProps["onMouseLeave"] = (event) => {
      startDismissTimer();
      onMouseLeave?.(event);
    };

    const handleFocusCapture: ToastProps["onFocusCapture"] = (event) => {
      pauseDismissTimer();
      onFocusCapture?.(event);
    };

    const handleBlurCapture: ToastProps["onBlurCapture"] = (event) => {
      const nextFocusedElement = event.relatedTarget;

      if (
        nextFocusedElement instanceof Node &&
        event.currentTarget.contains(nextFocusedElement)
      ) {
        onBlurCapture?.(event);
        return;
      }

      startDismissTimer();
      onBlurCapture?.(event);
    };

    const handleDismiss = () => {
      clearDismissTimer();
      onDismiss?.();
    };

    return (
      <div
        {...containerProps}
        {...announcementAttributes}
        ref={ref}
        aria-labelledby={title ? generatedTitleId : undefined}
        aria-describedby={generatedDescriptionId}
        data-severity={severity}
        className={joinFeedbackClassNames("stip-toast", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocusCapture={handleFocusCapture}
        onBlurCapture={handleBlurCapture}
      >
        <div className="stip-toast__icon">
          <FeedbackIcon severity={severity} icon={icon} />
        </div>

        <div className="stip-toast__body">
          <div className="stip-toast__content">
            {title ? (
              <div id={generatedTitleId} className="stip-toast__title">
                {title}
              </div>
            ) : null}

            <div
              id={generatedDescriptionId}
              className="stip-toast__description"
            >
              {children}
            </div>
          </div>

          {action ? <div className="stip-toast__action">{action}</div> : null}
        </div>

        {canDismiss ? (
          <div className="stip-toast__dismiss">
            <IconButton
              icon={<X />}
              aria-label={dismissLabel}
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
            />
          </div>
        ) : null}
      </div>
    );
  },
);

Toast.displayName = "Toast";
