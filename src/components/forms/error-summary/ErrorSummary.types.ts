import type { HTMLAttributes, ReactNode } from "react";

export interface ErrorSummaryItem {
  id: string;
  message: ReactNode;
  fieldId?: string;
}

export interface ErrorSummaryProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> {
  title?: ReactNode;
  items: ErrorSummaryItem[];
}
