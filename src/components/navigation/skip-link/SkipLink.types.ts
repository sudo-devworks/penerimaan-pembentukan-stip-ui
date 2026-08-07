import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface SkipLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> {
  /**
   * Visible label when the link receives keyboard focus.
   */
  children: ReactNode;

  /**
   * Main-content target.
   *
   * @default '#main-content'
   */
  href?: `#${string}`;
}
