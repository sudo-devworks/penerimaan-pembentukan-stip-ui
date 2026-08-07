import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  "primary" | "secondary" | "outline" | "ghost" | "text" | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  /**
   * Visible button label or other textual content.
   */
  children: ReactNode;

  /**
   * Controls the visual emphasis and semantic intent.
   *
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Controls the component scale.
   * Density remains inherited from the nearest data-density ancestor.
   *
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Decorative icon displayed before the label.
   */
  leadingIcon?: ReactNode;

  /**
   * Decorative icon displayed after the label.
   */
  trailingIcon?: ReactNode;

  /**
   * Prevents repeated interaction and exposes the busy state.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Contextual label displayed while loading.
   * The original children are used when this prop is omitted.
   */
  loadingLabel?: string;

  /**
   * Makes the button fill the available inline width.
   *
   * @default false
   */
  fullWidth?: boolean;
}
