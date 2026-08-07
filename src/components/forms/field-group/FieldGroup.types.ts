import type { HTMLAttributes, ReactNode } from "react";

export type FieldGroupColumns = 1 | 2 | 3 | 4 | "auto";

export interface FieldGroupProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;
  columns?: FieldGroupColumns;
  mobileColumns?: 1 | 2;
}
