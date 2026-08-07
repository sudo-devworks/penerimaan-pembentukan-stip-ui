import type { HTMLAttributes, ReactNode } from "react";

export type StatGroupColumns = 1 | 2 | 3 | 4;

export interface StatGroupProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;
  columns?: StatGroupColumns;
}

export interface StatItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trend?: ReactNode;
}
