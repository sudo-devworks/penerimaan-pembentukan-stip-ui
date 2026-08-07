import type { HTMLAttributes, ReactNode } from "react";

import type {
  FeedbackAnnouncement,
  FeedbackIconComponent,
  FeedbackSeverity,
} from "../shared";

export interface ToastProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Semantic severity of the transient feedback.
   *
   * @default 'neutral'
   */
  severity?: FeedbackSeverity;

  /**
   * Optional concise heading.
   */
  title?: ReactNode;

  /**
   * Main transient message.
   */
  children: ReactNode;

  /**
   * Optional replacement icon.
   */
  icon?: FeedbackIconComponent;

  /**
   * Optional action using an existing Action Component.
   */
  action?: ReactNode;

  /**
   * Displays a dismiss action when onDismiss exists.
   *
   * @default true
   */
  dismissible?: boolean;

  /**
   * Called when the toast is dismissed manually or
   * automatically.
   */
  onDismiss?: () => void;

  /**
   * Accessible dismiss-button name.
   *
   * @default 'Tutup notifikasi'
   */
  dismissLabel?: string;

  /**
   * Auto-dismiss duration in milliseconds.
   * Use null to keep the toast visible.
   *
   * @default 5000
   */
  duration?: number | null;

  /**
   * Controls screen-reader announcement.
   *
   * @default 'polite'
   */
  announcement?: FeedbackAnnouncement;
}
