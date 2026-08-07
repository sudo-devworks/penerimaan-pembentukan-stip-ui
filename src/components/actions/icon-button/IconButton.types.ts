import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IconButtonVariant =
  "primary" | "secondary" | "outline" | "ghost" | "destructive";

export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonShape = "rounded" | "circular";

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "aria-label"
> {
  /**
   * Decorative icon rendered inside the button.
   */
  icon: ReactNode;

  /**
   * Required accessible name for the icon-only action.
   */
  "aria-label": string;

  /**
   * Controls visual emphasis.
   *
   * @default 'ghost'
   */
  variant?: IconButtonVariant;

  /**
   * Controls component scale.
   *
   * @default 'md'
   */
  size?: IconButtonSize;

  /**
   * Controls the component shape.
   *
   * @default 'rounded'
   */
  shape?: IconButtonShape;

  /**
   * Disables repeated interaction while an asynchronous
   * action is running.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Accessible name exposed while loading.
   */
  loadingLabel?: string;
}
