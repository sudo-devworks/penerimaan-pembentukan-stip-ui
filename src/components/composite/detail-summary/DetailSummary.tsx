import { forwardRef, useId } from "react";

import "./DetailSummary.css";

import type { DetailSummaryProps } from "./DetailSummary.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const DetailSummary = forwardRef<HTMLElement, DetailSummaryProps>(
  function DetailSummary(
    {
      actions,
      children,
      className,
      description,
      metadata,
      status,
      title,
      ...sectionProps
    },
    ref,
  ) {
    const generatedTitleId = useId();

    const labelledBy =
      !sectionProps["aria-label"] && !sectionProps["aria-labelledby"]
        ? generatedTitleId
        : sectionProps["aria-labelledby"];

    return (
      <section
        {...sectionProps}
        ref={ref}
        aria-labelledby={labelledBy}
        className={joinClassNames("detail-summary", className)}
      >
        <header className="detail-summary__header">
          <div className="detail-summary__heading">
            <div className="detail-summary__title-row">
              <h2 className="detail-summary__title" id={generatedTitleId}>
                {title}
              </h2>

              {status ? (
                <div className="detail-summary__status">{status}</div>
              ) : null}
            </div>

            {description ? (
              <div className="detail-summary__description">{description}</div>
            ) : null}

            {metadata ? (
              <div className="detail-summary__metadata">{metadata}</div>
            ) : null}
          </div>

          {actions ? (
            <div className="detail-summary__actions">{actions}</div>
          ) : null}
        </header>

        <div className="detail-summary__content">{children}</div>
      </section>
    );
  },
);

DetailSummary.displayName = "DetailSummary";
