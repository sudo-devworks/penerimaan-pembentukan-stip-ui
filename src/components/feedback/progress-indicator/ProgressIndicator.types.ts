import type { HTMLAttributes, ReactNode } from "react";

export type ProgressIndicatorMode = "determinate" | "indeterminate";

export interface ProgressIndicatorProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Accessible progress label.
   */
  label: string;

  /**
   * Controls whether a real value is available.
   *
   * @default 'determinate'
   */
  mode?: ProgressIndicatorMode;

  /**
   * Current determinate value.
   */
  value?: number;

  /**
   * Minimum accepted value.
   *
   * @default 0
   */
  min?: number;

  /**
   * Maximum accepted value.
   *
   * @default 100
   */
  max?: number;

  /**
   * Human-readable progress value.
   */
  valueText?: string;

  /**
   * Optional visible supporting content.
   */
  description?: ReactNode;

  /**
   * Displays the label above the progress track.
   *
   * @default true
   */
  showLabel?: boolean;

  /**
   * Displays a visible progress value.
   *
   * @default true
   */
  showValue?: boolean;
}
