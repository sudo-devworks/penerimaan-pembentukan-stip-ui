import { forwardRef, useId } from "react";

import "./TableToolbar.css";

import type { TableToolbarProps } from "./TableToolbar.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const TableToolbar = forwardRef<HTMLDivElement, TableToolbarProps>(
  function TableToolbar(
    { actions, className, controls, description, title, ...toolbarProps },
    ref,
  ) {
    const generatedTitleId = useId();

    const labelledBy =
      title && !toolbarProps["aria-label"] && !toolbarProps["aria-labelledby"]
        ? generatedTitleId
        : toolbarProps["aria-labelledby"];

    return (
      <div
        {...toolbarProps}
        ref={ref}
        aria-labelledby={labelledBy}
        className={joinClassNames("table-toolbar", className)}
      >
        {title || description ? (
          <div className="table-toolbar__context">
            {title ? (
              <div className="table-toolbar__title" id={generatedTitleId}>
                {title}
              </div>
            ) : null}

            {description ? (
              <div className="table-toolbar__description">{description}</div>
            ) : null}
          </div>
        ) : null}

        {controls ? (
          <div className="table-toolbar__controls">{controls}</div>
        ) : null}

        {actions ? (
          <div className="table-toolbar__actions">{actions}</div>
        ) : null}
      </div>
    );
  },
);

TableToolbar.displayName = "TableToolbar";
