import type { HTMLAttributes, ReactNode } from "react";

export interface FormActionsProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;
  align?: "start" | "end" | "between";
  divided?: boolean;
  stackOnMobile?: boolean;
}
