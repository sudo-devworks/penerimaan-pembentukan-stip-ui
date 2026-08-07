import type { HTMLAttributes, ReactNode } from "react";

import type { FeedbackAnnouncement, FeedbackSize } from "../shared";

export interface LoadingMessageProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Main loading message.
   */
  title: ReactNode;

  /**
   * Optional supporting information.
   */
  description?: ReactNode;

  /**
   * Controls the loading-indicator scale.
   *
   * @default 'md'
   */
  size?: FeedbackSize;

  /**
   * Controls announcement behavior.
   *
   * @default 'polite'
   */
  announcement?: FeedbackAnnouncement;
}
