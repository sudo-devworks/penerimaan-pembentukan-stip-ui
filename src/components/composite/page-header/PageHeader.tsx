import { forwardRef, useId } from "react";

import "./PageHeader.css";

import type {
  PageHeaderHeadingLevel,
  PageHeaderProps,
} from "./PageHeader.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

const headingElements: Record<
  PageHeaderHeadingLevel,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  function PageHeader(
    {
      actions,
      className,
      description,
      eyebrow,
      headingLevel = 1,
      metadata,
      navigation,
      status,
      title,
      ...headerProps
    },
    ref,
  ) {
    const generatedTitleId = useId();
    const HeadingElement = headingElements[headingLevel];

    const labelledBy =
      !headerProps["aria-label"] && !headerProps["aria-labelledby"]
        ? generatedTitleId
        : headerProps["aria-labelledby"];

    return (
      <header
        {...headerProps}
        ref={ref}
        aria-labelledby={labelledBy}
        className={joinClassNames("page-header", className)}
      >
        {navigation ? (
          <div className="page-header__navigation">{navigation}</div>
        ) : null}

        <div className="page-header__layout">
          <div className="page-header__content">
            {eyebrow ? (
              <div className="page-header__eyebrow">{eyebrow}</div>
            ) : null}

            <div className="page-header__title-row">
              <HeadingElement
                className="page-header__title"
                id={generatedTitleId}
              >
                {title}
              </HeadingElement>

              {status ? (
                <div className="page-header__status">{status}</div>
              ) : null}
            </div>

            {description ? (
              <div className="page-header__description">{description}</div>
            ) : null}

            {metadata ? (
              <div className="page-header__metadata">{metadata}</div>
            ) : null}
          </div>

          {actions ? (
            <div className="page-header__actions">{actions}</div>
          ) : null}
        </div>
      </header>
    );
  },
);

PageHeader.displayName = "PageHeader";
