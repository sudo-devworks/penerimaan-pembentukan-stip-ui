import type { HTMLAttributes, ReactNode } from "react";

import type { ApplicationNavigationItemProps } from "../shared";

export interface TopNavigationProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> {
  children: ReactNode;

  /**
   * @default 'Navigasi utama'
   */
  label?: string;
}

export type TopNavigationItemProps = ApplicationNavigationItemProps;
