import type { HTMLAttributes, ReactNode } from "react";

export interface BulkActionBarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Selection information such as "3 peserta dipilih".
   */
  summary: ReactNode;

  /**
   * Optional supporting information.
   */
  description?: ReactNode;

  /**
   * Bulk actions composed by the consumer.
   */
  actions: ReactNode;

  /**
   * Optional clear-selection control.
   */
  clearAction?: ReactNode;
}
