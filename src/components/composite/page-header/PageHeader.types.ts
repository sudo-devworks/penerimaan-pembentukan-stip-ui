import type { HTMLAttributes, ReactNode } from "react";

export type PageHeaderHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface PageHeaderProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> {
  /**
   * Main page title.
   */
  title: ReactNode;

  /**
   * Optional supporting description.
   */
  description?: ReactNode;

  /**
   * Optional short label displayed above the title.
   */
  eyebrow?: ReactNode;

  /**
   * Navigation content displayed above the main header content.
   * Intended for Breadcrumb or BackNavigation.
   */
  navigation?: ReactNode;

  /**
   * Optional status, badge, or supporting element beside the title.
   */
  status?: ReactNode;

  /**
   * Optional metadata displayed below the description.
   */
  metadata?: ReactNode;

  /**
   * Page-level actions.
   * Consumers should compose Button, ButtonGroup, or DropdownAction.
   */
  actions?: ReactNode;

  /**
   * Semantic heading level.
   *
   * @default 1
   */
  headingLevel?: PageHeaderHeadingLevel;
}
