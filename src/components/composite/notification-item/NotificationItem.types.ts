import type { HTMLAttributes, ReactNode } from "react";

export type NotificationItemVariant =
  "default" | "info" | "success" | "warning" | "error";

export interface NotificationItemProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> {
  title: ReactNode;
  description?: ReactNode;
  timestamp?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  metadata?: ReactNode;
  unread?: boolean;
  variant?: NotificationItemVariant;
}
