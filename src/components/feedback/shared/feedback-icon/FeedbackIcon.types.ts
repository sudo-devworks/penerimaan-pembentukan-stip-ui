import type { ComponentType, SVGProps } from "react";

import type { FeedbackSeverity } from "../feedback.types";

export type FeedbackIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface FeedbackIconProps {
  /**
   * Determines the default semantic icon.
   *
   * @default 'neutral'
   */
  severity?: FeedbackSeverity;

  /**
   * Optional replacement icon.
   */
  icon?: FeedbackIconComponent;

  /**
   * Additional class name for layout integration.
   */
  className?: string;
}
