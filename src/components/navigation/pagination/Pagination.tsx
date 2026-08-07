import { forwardRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { joinNavigationClassNames } from "../shared";
import type { PaginationProps } from "./Pagination.types";
import { clampPage, getPaginationItems } from "./pagination.utils";

import "./Pagination.css";

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      totalPages,
      siblingCount = 1,
      boundaryCount = 1,
      label = "Pagination",
      showFirstLast = true,
      showPreviousNext = true,
      disabled = false,
      className,
      ...interactionProps
    },
    ref,
  ) => {
    const safeTotalPages = Math.max(1, Math.floor(totalPages));

    const safePage = clampPage(page, safeTotalPages);

    const items = getPaginationItems({
      page: safePage,
      totalPages: safeTotalPages,
      siblingCount,
      boundaryCount,
    });

    const renderControl = ({
      targetPage,
      accessibleLabel,
      icon,
      controlDisabled,
      className: controlClassName,
    }: {
      targetPage: number;
      accessibleLabel: string;
      icon: React.ReactNode;
      controlDisabled: boolean;
      className?: string;
    }) => {
      const finalDisabled = disabled || controlDisabled;

      const content = (
        <>
          <span aria-hidden="true" className="stip-pagination__icon">
            {icon}
          </span>

          <span className="visually-hidden">{accessibleLabel}</span>
        </>
      );

      if (interactionProps.mode === "link") {
        const href = interactionProps.getPageHref(targetPage);

        return (
          <a
            href={finalDisabled ? undefined : href}
            aria-label={accessibleLabel}
            aria-disabled={finalDisabled || undefined}
            tabIndex={finalDisabled ? -1 : undefined}
            data-disabled={finalDisabled || undefined}
            className={joinNavigationClassNames(
              "stip-pagination__item",
              "stip-pagination__control",
              controlClassName,
            )}
            onClick={(event) => {
              if (finalDisabled) {
                event.preventDefault();
              }
            }}
          >
            {content}
          </a>
        );
      }

      return (
        <button
          type="button"
          aria-label={accessibleLabel}
          disabled={finalDisabled}
          className={joinNavigationClassNames(
            "stip-pagination__item",
            "stip-pagination__control",
            controlClassName,
          )}
          onClick={(event) => interactionProps.onPageChange(targetPage, event)}
        >
          {content}
        </button>
      );
    };

    const renderPageItem = (itemPage: number) => {
      const current = itemPage === safePage;
      const accessibleLabel = current
        ? `Halaman saat ini, ${itemPage}`
        : `Halaman ${itemPage}`;

      if (interactionProps.mode === "link") {
        return (
          <a
            key={itemPage}
            href={interactionProps.getPageHref(itemPage)}
            aria-label={accessibleLabel}
            aria-current={current ? "page" : undefined}
            data-current={current || undefined}
            className="stip-pagination__item stip-pagination__page"
          >
            {itemPage}
          </a>
        );
      }

      return (
        <button
          key={itemPage}
          type="button"
          aria-label={accessibleLabel}
          aria-current={current ? "page" : undefined}
          disabled={disabled || current}
          data-current={current || undefined}
          className="stip-pagination__item stip-pagination__page"
          onClick={(event) => interactionProps.onPageChange(itemPage, event)}
        >
          {itemPage}
        </button>
      );
    };

    return (
      <nav
        ref={ref}
        aria-label={label}
        className={joinNavigationClassNames("stip-pagination", className)}
      >
        <div className="stip-pagination__desktop">
          {showFirstLast
            ? renderControl({
                targetPage: 1,
                accessibleLabel: "Halaman pertama",
                icon: <ChevronsLeft />,
                controlDisabled: safePage === 1,
              })
            : null}

          {showPreviousNext
            ? renderControl({
                targetPage: safePage - 1,
                accessibleLabel: "Halaman sebelumnya",
                icon: <ChevronLeft />,
                controlDisabled: safePage === 1,
              })
            : null}

          <div className="stip-pagination__pages">
            {items.map((item) => {
              if (item.type === "ellipsis") {
                return (
                  <span
                    key={item.key}
                    aria-hidden="true"
                    className="stip-pagination__ellipsis"
                  >
                    …
                  </span>
                );
              }

              return renderPageItem(item.page);
            })}
          </div>

          {showPreviousNext
            ? renderControl({
                targetPage: safePage + 1,
                accessibleLabel: "Halaman berikutnya",
                icon: <ChevronRight />,
                controlDisabled: safePage === safeTotalPages,
              })
            : null}

          {showFirstLast
            ? renderControl({
                targetPage: safeTotalPages,
                accessibleLabel: "Halaman terakhir",
                icon: <ChevronsRight />,
                controlDisabled: safePage === safeTotalPages,
              })
            : null}
        </div>

        <div className="stip-pagination__mobile">
          {showPreviousNext
            ? renderControl({
                targetPage: safePage - 1,
                accessibleLabel: "Halaman sebelumnya",
                icon: <ChevronLeft />,
                controlDisabled: safePage === 1,
              })
            : null}

          <span aria-live="polite" className="stip-pagination__summary">
            Halaman {safePage} dari {safeTotalPages}
          </span>

          {showPreviousNext
            ? renderControl({
                targetPage: safePage + 1,
                accessibleLabel: "Halaman berikutnya",
                icon: <ChevronRight />,
                controlDisabled: safePage === safeTotalPages,
              })
            : null}
        </div>
      </nav>
    );
  },
);

Pagination.displayName = "Pagination";
