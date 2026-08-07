import type { HTMLAttributes, ReactNode } from "react";

import type {
  FeedbackAnnouncement,
  FeedbackIconComponent,
  FeedbackSeverity,
} from "../shared";

export interface AlertProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Semantic severity of the feedback.
   *
   * @default 'neutral'
   */
  severity?: FeedbackSeverity;

  /**
   * Optional message heading.
   */
  title?: ReactNode;

  /**
   * Main message content.
   */
  children: ReactNode;

  /**
   * Optional custom leading icon.
   */
  icon?: FeedbackIconComponent;

  /**
   * Optional action content using existing Action Components.
   */
  action?: ReactNode;

  /**
   * Shows a dismiss action when paired with onDismiss.
   *
   * @default false
   */
  dismissible?: boolean;

  /**
   * Called when the dismiss action is activated.
   */
  onDismiss?: () => void;

  /**
   * Accessible name for the dismiss action.
   *
   * @default 'Tutup pesan'
   */
  dismissLabel?: string;

  /**
   * Controls live-region behavior.
   * Static alerts should normally use none.
   *
   * @default 'none'
   */
  announcement?: FeedbackAnnouncement;
}
