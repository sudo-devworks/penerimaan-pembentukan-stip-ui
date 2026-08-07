import type { HTMLAttributes, ReactNode } from "react";

export type SectionHeaderHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface SectionHeaderProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> {
  /**
   * Section title.
   */
  title: ReactNode;

  /**
   * Optional supporting description.
   */
  description?: ReactNode;

  /**
   * Optional supporting metadata.
   */
  metadata?: ReactNode;

  /**
   * Section-level actions.
   */
  actions?: ReactNode;

  /**
   * Semantic heading level.
   *
   * @default 2
   */
  headingLevel?: SectionHeaderHeadingLevel;

  /**
   * Renders a divider below the header.
   *
   * @default false
   */
  divided?: boolean;
}
