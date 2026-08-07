import type { HTMLAttributes, ReactNode } from "react";

import type { ApplicationNavigationItemProps } from "../shared";

export interface BottomNavigationProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> {
  children: ReactNode;

  /**
   * @default 'Navigasi utama peserta'
   */
  label?: string;
}

export type BottomNavigationItemProps = ApplicationNavigationItemProps;
