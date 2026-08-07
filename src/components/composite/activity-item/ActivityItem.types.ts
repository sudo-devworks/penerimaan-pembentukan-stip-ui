import type { HTMLAttributes, ReactNode } from "react";

export interface ActivityItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> {
  title: ReactNode;
  description?: ReactNode;
  timestamp?: ReactNode;
  icon?: ReactNode;
  metadata?: ReactNode;
  actions?: ReactNode;
}
