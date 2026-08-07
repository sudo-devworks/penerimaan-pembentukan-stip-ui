import type { HTMLAttributes, ReactNode } from "react";

export interface TableToolbarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> {
  /**
   * Optional toolbar title.
   */
  title?: ReactNode;

  /**
   * Supporting text such as row count or table context.
   */
  description?: ReactNode;

  /**
   * Controls positioned before the action area.
   */
  controls?: ReactNode;

  /**
   * Table-level actions.
   */
  actions?: ReactNode;
}
