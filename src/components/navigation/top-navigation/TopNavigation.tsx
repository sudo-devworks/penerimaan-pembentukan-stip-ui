import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { TopNavigationProps } from "./TopNavigation.types";

import "./TopNavigation.css";

export const TopNavigation = forwardRef<HTMLElement, TopNavigationProps>(
  (
    { children, label = "Navigasi utama", className, ...navigationProps },
    ref,
  ) => {
    return (
      <nav
        {...navigationProps}
        ref={ref}
        aria-label={label}
        className={joinNavigationClassNames("stip-top-navigation", className)}
      >
        <div className="stip-top-navigation__items">{children}</div>
      </nav>
    );
  },
);

TopNavigation.displayName = "TopNavigation";
