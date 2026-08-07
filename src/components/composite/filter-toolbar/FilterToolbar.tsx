import { forwardRef } from "react";

import "./FilterToolbar.css";

import type { FilterToolbarProps } from "./FilterToolbar.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const FilterToolbar = forwardRef<HTMLDivElement, FilterToolbarProps>(
  function FilterToolbar(
    {
      actions,
      activeFilters,
      className,
      filters,
      mobileFilterTrigger,
      resultsSummary,
      search,
      ...toolbarProps
    },
    ref,
  ) {
    const hasPrimaryRow = search || filters || mobileFilterTrigger || actions;
    const hasSupportingRow = resultsSummary || activeFilters;

    return (
      <div
        {...toolbarProps}
        ref={ref}
        className={joinClassNames("filter-toolbar", className)}
      >
        {hasPrimaryRow ? (
          <div className="filter-toolbar__primary">
            <div className="filter-toolbar__controls">
              {search ? (
                <div className="filter-toolbar__search">{search}</div>
              ) : null}

              {filters ? (
                <div className="filter-toolbar__filters">{filters}</div>
              ) : null}

              {mobileFilterTrigger ? (
                <div className="filter-toolbar__mobile-trigger">
                  {mobileFilterTrigger}
                </div>
              ) : null}
            </div>

            {actions ? (
              <div className="filter-toolbar__actions">{actions}</div>
            ) : null}
          </div>
        ) : null}

        {hasSupportingRow ? (
          <div className="filter-toolbar__supporting">
            {resultsSummary ? (
              <div aria-live="polite" className="filter-toolbar__results">
                {resultsSummary}
              </div>
            ) : null}

            {activeFilters ? (
              <div className="filter-toolbar__active-filters">
                {activeFilters}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);

FilterToolbar.displayName = "FilterToolbar";
