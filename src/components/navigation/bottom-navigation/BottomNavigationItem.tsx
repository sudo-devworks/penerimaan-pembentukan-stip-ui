import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { BottomNavigationItemProps } from "./BottomNavigation.types";

export const BottomNavigationItem = forwardRef<
  HTMLAnchorElement,
  BottomNavigationItemProps
>(
  (
    {
      children,
      href,
      icon,
      badge,
      active = false,
      disabled = false,
      accessibleLabel,
      className,
      onClick,
      ...anchorProps
    },
    ref,
  ) => {
    return (
      <a
        {...anchorProps}
        ref={ref}
        href={disabled ? undefined : href}
        aria-label={accessibleLabel}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        data-active={active || undefined}
        data-disabled={disabled || undefined}
        className={joinNavigationClassNames(
          "stip-bottom-navigation__item",
          className,
        )}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
      >
        <span className="stip-bottom-navigation__item-icon-wrapper">
          {icon ? (
            <span
              aria-hidden="true"
              className="stip-bottom-navigation__item-icon"
            >
              {icon}
            </span>
          ) : null}

          {badge ? (
            <span className="stip-bottom-navigation__item-badge">{badge}</span>
          ) : null}
        </span>

        <span className="stip-bottom-navigation__item-label">{children}</span>
      </a>
    );
  },
);

BottomNavigationItem.displayName = "BottomNavigationItem";
