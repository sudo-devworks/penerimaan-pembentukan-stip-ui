import type { HTMLAttributes, MouseEvent } from "react";

export type PaginationMode = "button" | "link";

export type PaginationItem =
  | {
      type: "page";
      page: number;
    }
  | {
      type: "ellipsis";
      key: string;
    };

interface PaginationBaseProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "onChange"
> {
  /**
   * Current one-based page.
   */
  page: number;

  /**
   * Total number of pages.
   */
  totalPages: number;

  /**
   * Number of page items around the current page.
   *
   * @default 1
   */
  siblingCount?: number;

  /**
   * Number of page items retained at each boundary.
   *
   * @default 1
   */
  boundaryCount?: number;

  /**
   * Accessible navigation label.
   *
   * @default 'Pagination'
   */
  label?: string;

  /**
   * Shows first and last navigation actions.
   *
   * @default true
   */
  showFirstLast?: boolean;

  /**
   * Shows previous and next actions.
   *
   * @default true
   */
  showPreviousNext?: boolean;

  /**
   * Disables all pagination interaction.
   *
   * @default false
   */
  disabled?: boolean;
}

export interface PaginationButtonProps extends PaginationBaseProps {
  mode?: "button";

  /**
   * Called when an enabled page is selected.
   */
  onPageChange: (page: number, event: MouseEvent<HTMLButtonElement>) => void;

  getPageHref?: never;
}

export interface PaginationLinkProps extends PaginationBaseProps {
  mode: "link";

  /**
   * Generates a URL for each pagination destination.
   */
  getPageHref: (page: number) => string;

  onPageChange?: never;
}

export type PaginationProps = PaginationButtonProps | PaginationLinkProps;
