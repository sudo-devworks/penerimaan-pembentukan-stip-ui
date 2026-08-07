import type { HTMLAttributes, ReactNode } from "react";

export type DescriptionListColumns = 1 | 2 | 3;

export interface DescriptionListProps extends Omit<
  HTMLAttributes<HTMLDListElement>,
  "children"
> {
  children: ReactNode;
  columns?: DescriptionListColumns;
  divided?: boolean;
}

export interface DescriptionListItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> {
  term: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
}
