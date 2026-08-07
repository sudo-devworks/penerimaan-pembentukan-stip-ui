import {
  CircleAlert,
  CircleCheck,
  Info,
  MessageCircle,
  TriangleAlert,
} from "lucide-react";

import type { FeedbackSeverity } from "../feedback.types";
import { joinFeedbackClassNames } from "../feedback.utils";
import type {
  FeedbackIconComponent,
  FeedbackIconProps,
} from "./FeedbackIcon.types";

const iconBySeverity: Record<FeedbackSeverity, FeedbackIconComponent> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: CircleAlert,
  neutral: MessageCircle,
};

export const FeedbackIcon = ({
  severity = "neutral",
  icon: CustomIcon,
  className,
}: FeedbackIconProps) => {
  const Icon = CustomIcon ?? iconBySeverity[severity];

  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      className={joinFeedbackClassNames("stip-feedback-icon", className)}
    />
  );
};

FeedbackIcon.displayName = "FeedbackIcon";
