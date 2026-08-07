import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { BottomNavigationProps } from "./BottomNavigation.types";

import "./BottomNavigation.css";

export const BottomNavigation = forwardRef<HTMLElement, BottomNavigationProps>(
  (
    {
      children,
      label = "Navigasi utama peserta",
      className,
      ...navigationProps
    },
    ref,
  ) => {
    return (
      <nav
        {...navigationProps}
        ref={ref}
        aria-label={label}
        className={joinNavigationClassNames(
          "stip-bottom-navigation",
          className,
        )}
      >
        <div className="stip-bottom-navigation__items">{children}</div>
      </nav>
    );
  },
);

BottomNavigation.displayName = "BottomNavigation";
