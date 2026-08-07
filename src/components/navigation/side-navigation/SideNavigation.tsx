import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { SideNavigationProps } from "./SideNavigation.types";

import "./SideNavigation.css";

export const SideNavigation = forwardRef<HTMLElement, SideNavigationProps>(
  (
    { children, label = "Navigasi utama", className, ...navigationProps },
    ref,
  ) => {
    return (
      <nav
        {...navigationProps}
        ref={ref}
        aria-label={label}
        className={joinNavigationClassNames("stip-side-navigation", className)}
      >
        {children}
      </nav>
    );
  },
);

SideNavigation.displayName = "SideNavigation";
