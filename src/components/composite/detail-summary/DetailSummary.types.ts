import type { HTMLAttributes, ReactNode } from "react";

export interface DetailSummaryProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> {
  title: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  metadata?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
}
