import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ActionLinkVariant =
  "inline" | "standalone" | "navigation" | "subtle";

export type ActionLinkSize = "sm" | "md" | "lg";

export interface ActionLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children"
> {
  children: ReactNode;
  variant?: ActionLinkVariant;
  size?: ActionLinkSize;
  external?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
}
