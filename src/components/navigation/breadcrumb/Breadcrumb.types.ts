import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface BreadcrumbProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> {
  /**
   * Breadcrumb items.
   */
  children: ReactNode;

  /**
   * Accessible navigation label.
   *
   * @default 'Breadcrumb'
   */
  label?: string;
}

export interface BreadcrumbItemProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children"
> {
  /**
   * Visible item label.
   */
  children: ReactNode;

  /**
   * Destination for navigable items.
   */
  href?: string;

  /**
   * Marks the current page.
   *
   * @default false
   */
  current?: boolean;

  /**
   * Optional custom separator rendered after the item.
   */
  separator?: ReactNode;
}
