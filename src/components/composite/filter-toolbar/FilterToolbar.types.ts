import type { HTMLAttributes, ReactNode } from "react";

export interface FilterToolbarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Search control, normally SearchInput.
   */
  search?: ReactNode;

  /**
   * Filters displayed directly on wider screens.
   */
  filters?: ReactNode;

  /**
   * Trigger for responsive filter UI.
   * Consumers may compose DrawerTrigger or PopoverTrigger.
   */
  mobileFilterTrigger?: ReactNode;

  /**
   * Optional actions such as reset, save view, or export.
   */
  actions?: ReactNode;

  /**
   * Summary such as "128 peserta ditemukan".
   */
  resultsSummary?: ReactNode;

  /**
   * Active filter chips or filter description.
   */
  activeFilters?: ReactNode;
}
