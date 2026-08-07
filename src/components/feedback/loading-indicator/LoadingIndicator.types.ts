import type { HTMLAttributes } from "react";

import type { FeedbackSize } from "../shared";

export interface LoadingIndicatorProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  /**
   * Visible or screen-reader accessible loading label.
   */
  label?: string;

  /**
   * Hides the indicator from assistive technology when
   * another element already communicates the loading state.
   *
   * @default false
   */
  decorative?: boolean;

  /**
   * Controls the visual scale.
   *
   * @default 'md'
   */
  size?: FeedbackSize;
}
