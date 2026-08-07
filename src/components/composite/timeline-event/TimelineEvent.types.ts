import type { HTMLAttributes, ReactNode } from "react";

export type TimelineEventState =
  "default" | "current" | "completed" | "warning" | "error";

export interface TimelineEventProps extends Omit<
  HTMLAttributes<HTMLLIElement>,
  "children" | "title"
> {
  title: ReactNode;
  description?: ReactNode;
  timestamp?: ReactNode;
  metadata?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  state?: TimelineEventState;
  last?: boolean;
}
