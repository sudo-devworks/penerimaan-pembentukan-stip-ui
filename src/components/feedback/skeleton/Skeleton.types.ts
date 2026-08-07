import type { CSSProperties, HTMLAttributes } from "react";

export type SkeletonAnimation = "pulse" | "shimmer" | "none";

export interface SkeletonProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  /**
   * Accessible text for a loading placeholder.
   * Normally omitted because the parent communicates loading.
   */
  label?: string;

  /**
   * Controls placeholder animation.
   *
   * @default 'shimmer'
   */
  animation?: SkeletonAnimation;

  /**
   * Custom inline size.
   */
  width?: CSSProperties["width"];

  /**
   * Custom block size.
   */
  height?: CSSProperties["height"];

  /**
   * Makes the skeleton circular.
   *
   * @default false
   */
  circular?: boolean;
}

export interface SkeletonTextProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Number of placeholder lines.
   *
   * @default 3
   */
  lines?: number;

  /**
   * Width of the final line.
   *
   * @default '72%'
   */
  lastLineWidth?: CSSProperties["width"];

  /**
   * Controls line animation.
   *
   * @default 'shimmer'
   */
  animation?: SkeletonAnimation;
}

export type SkeletonBlockProps = SkeletonProps;
