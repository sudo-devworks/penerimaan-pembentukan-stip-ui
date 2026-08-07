import type { HTMLAttributes, ReactNode } from "react";

export interface FormSectionProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> {
  children: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  divided?: boolean;
}
