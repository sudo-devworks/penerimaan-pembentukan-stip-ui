import type { HTMLAttributes, ReactNode } from "react";

import type { ApplicationNavigationItemProps } from "../shared";

export interface SideNavigationProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> {
  children: ReactNode;

  /**
   * Accessible navigation label.
   *
   * @default 'Navigasi utama'
   */
  label?: string;
}

export interface SideNavigationGroupProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;

  /**
   * Visible group heading.
   */
  label: ReactNode;
}

export type SideNavigationItemProps = ApplicationNavigationItemProps;
