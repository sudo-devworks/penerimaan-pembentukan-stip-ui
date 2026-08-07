import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface ApplicationNavigationItemProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href" | "title"
> {
  /**
   * Visible item label.
   */
  children: ReactNode;

  /**
   * Destination route or URL.
   */
  href: string;

  /**
   * Optional decorative leading icon.
   */
  icon?: ReactNode;

  /**
   * Optional count or compact status.
   */
  badge?: ReactNode;

  /**
   * Marks the destination as the current page.
   *
   * @default false
   */
  active?: boolean;

  /**
   * Prevents navigation and removes the item from tab order.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Accessible name including badge context when necessary.
   */
  accessibleLabel?: string;
}
