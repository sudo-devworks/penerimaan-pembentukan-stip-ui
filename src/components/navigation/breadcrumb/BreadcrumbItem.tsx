import { forwardRef } from "react";
import { ChevronRight } from "lucide-react";

import { joinNavigationClassNames } from "../shared";
import type { BreadcrumbItemProps } from "./Breadcrumb.types";

export const BreadcrumbItem = forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps
>(
  (
    { children, href, current = false, separator, className, ...anchorProps },
    ref,
  ) => {
    const separatorContent = separator ?? <ChevronRight />;

    return (
      <li data-current={current || undefined} className="stip-breadcrumb__item">
        {current || !href ? (
          <span
            aria-current={current ? "page" : undefined}
            className={joinNavigationClassNames(
              "stip-breadcrumb__current",
              className,
            )}
          >
            {children}
          </span>
        ) : (
          <a
            {...anchorProps}
            ref={ref}
            href={href}
            className={joinNavigationClassNames(
              "stip-breadcrumb__link",
              className,
            )}
          >
            {children}
          </a>
        )}

        {!current ? (
          <span aria-hidden="true" className="stip-breadcrumb__separator">
            {separatorContent}
          </span>
        ) : null}
      </li>
    );
  },
);

BreadcrumbItem.displayName = "BreadcrumbItem";
