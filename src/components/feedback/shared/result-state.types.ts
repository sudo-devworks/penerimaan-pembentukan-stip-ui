import type { HTMLAttributes, ReactNode } from "react";

import type { FeedbackAnnouncement, FeedbackIconComponent } from "./index";

export type ResultStateVariant = "default" | "compact";

export interface BaseResultStateProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Main result heading.
   */
  title: ReactNode;

  /**
   * Supporting explanation.
   */
  description?: ReactNode;

  /**
   * Optional replacement icon.
   */
  icon?: FeedbackIconComponent;

  /**
   * Main action using an existing Action Component.
   */
  primaryAction?: ReactNode;

  /**
   * Supporting action using an existing Action Component.
   */
  secondaryAction?: ReactNode;

  /**
   * Optional supporting content such as a reference number
   * or next-step information.
   */
  supportingContent?: ReactNode;

  /**
   * Controls component spacing and scale.
   *
   * @default 'default'
   */
  variant?: ResultStateVariant;

  /**
   * Controls live-region behavior.
   *
   * @default 'none'
   */
  announcement?: FeedbackAnnouncement;
}
