import type { HTMLAttributes, ReactNode } from "react";

export type ButtonGroupDirection = "horizontal" | "vertical";

export type ButtonGroupAlignment =
  "start" | "center" | "end" | "between" | "stretch";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  /**
   * Default layout direction.
   *
   * @default 'horizontal'
   */
  direction?: ButtonGroupDirection;

  /**
   * Alignment of the grouped actions.
   *
   * @default 'end'
   */
  align?: ButtonGroupAlignment;

  /**
   * Stacks actions vertically below 640 px.
   *
   * @default false
   */
  stackOnMobile?: boolean;

  /**
   * Makes child actions fill the available width
   * while the group is vertically stacked.
   *
   * @default false
   */
  stretchOnMobile?: boolean;
}
