import type { HTMLAttributes, ReactNode } from "react";

import type {
  FeedbackAnnouncement,
  FeedbackIconComponent,
  FeedbackSeverity,
} from "../shared";

export interface InlineAlertProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Semantic severity of the contextual message.
   *
   * @default 'neutral'
   */
  severity?: FeedbackSeverity;

  /**
   * Optional concise message title.
   */
  title?: ReactNode;

  /**
   * Main contextual message.
   */
  children: ReactNode;

  /**
   * Optional custom semantic icon.
   */
  icon?: FeedbackIconComponent;

  /**
   * Optional contextual action.
   */
  action?: ReactNode;

  /**
   * Enables the dismiss action when onDismiss exists.
   *
   * @default false
   */
  dismissible?: boolean;

  /**
   * Called after dismiss activation.
   */
  onDismiss?: () => void;

  /**
   * Accessible label for dismiss action.
   *
   * @default 'Tutup pesan'
   */
  dismissLabel?: string;

  /**
   * Controls announcement behavior.
   *
   * @default 'none'
   */
  announcement?: FeedbackAnnouncement;
}
