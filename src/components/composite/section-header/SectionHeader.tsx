import { forwardRef, useId } from "react";

import "./SectionHeader.css";

import type {
  SectionHeaderHeadingLevel,
  SectionHeaderProps,
} from "./SectionHeader.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

const headingElements: Record<
  SectionHeaderHeadingLevel,
  "h2" | "h3" | "h4" | "h5" | "h6"
> = {
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(
  function SectionHeader(
    {
      actions,
      className,
      description,
      divided = false,
      headingLevel = 2,
      metadata,
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
        className={joinClassNames(
          "section-header",
          divided && "section-header--divided",
          className,
        )}
      >
        <div className="section-header__content">
          <HeadingElement
            className="section-header__title"
            id={generatedTitleId}
          >
            {title}
          </HeadingElement>

          {description ? (
            <div className="section-header__description">{description}</div>
          ) : null}

          {metadata ? (
            <div className="section-header__metadata">{metadata}</div>
          ) : null}
        </div>

        {actions ? (
          <div className="section-header__actions">{actions}</div>
        ) : null}
      </header>
    );
  },
);

SectionHeader.displayName = "SectionHeader";
