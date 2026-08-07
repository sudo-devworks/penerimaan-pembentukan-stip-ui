import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { BreadcrumbProps } from "./Breadcrumb.types";

import "./Breadcrumb.css";

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ children, label = "Breadcrumb", className, ...navigationProps }, ref) => {
    return (
      <nav
        {...navigationProps}
        ref={ref}
        aria-label={label}
        className={joinNavigationClassNames("stip-breadcrumb", className)}
      >
        <ol className="stip-breadcrumb__list">{children}</ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = "Breadcrumb";
