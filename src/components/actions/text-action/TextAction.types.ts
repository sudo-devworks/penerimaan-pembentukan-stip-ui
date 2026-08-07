import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TextActionVariant = "default" | "subtle" | "destructive";

export type TextActionSize = "sm" | "md";

export interface TextActionProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  children: ReactNode;
  variant?: TextActionVariant;
  size?: TextActionSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
  loadingLabel?: string;
}
