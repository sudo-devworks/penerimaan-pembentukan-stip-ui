import { forwardRef } from "react";

import "./DescriptionList.css";

import type {
  DescriptionListItemProps,
  DescriptionListProps,
} from "./DescriptionList.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const DescriptionList = forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(function DescriptionList(
  { children, className, columns = 1, divided = false, ...listProps },
  ref,
) {
  return (
    <dl
      {...listProps}
      ref={ref}
      className={joinClassNames(
        "description-list",
        `description-list--columns-${columns}`,
        divided && "description-list--divided",
        className,
      )}
    >
      {children}
    </dl>
  );
});

DescriptionList.displayName = "DescriptionList";

export const DescriptionListItem = forwardRef<
  HTMLDivElement,
  DescriptionListItemProps
>(function DescriptionListItem(
  { actions, children, className, term, ...itemProps },
  ref,
) {
  return (
    <div
      {...itemProps}
      ref={ref}
      className={joinClassNames("description-list__item", className)}
    >
      <dt className="description-list__term">{term}</dt>

      <dd className="description-list__description">
        <div className="description-list__value">{children}</div>

        {actions ? (
          <div className="description-list__actions">{actions}</div>
        ) : null}
      </dd>
    </div>
  );
});

DescriptionListItem.displayName = "DescriptionListItem";
