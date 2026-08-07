import type { HTMLAttributes, ReactNode } from "react";

export type ToastRegionPlacement =
  "top-right" | "top-center" | "bottom-right" | "bottom-center";

export interface ToastRegionProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Toast items rendered inside the viewport.
   */
  children: ReactNode;

  /**
   * Accessible name for the notification region.
   *
   * @default 'Notifikasi'
   */
  label?: string;

  /**
   * Controls viewport placement.
   *
   * @default 'top-right'
   */
  placement?: ToastRegionPlacement;
}
