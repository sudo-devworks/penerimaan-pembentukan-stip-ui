import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { SideNavigationItemProps } from "./SideNavigation.types";

export const SideNavigationItem = forwardRef<
  HTMLAnchorElement,
  SideNavigationItemProps
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
          "stip-side-navigation__item",
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
        {icon ? (
          <span aria-hidden="true" className="stip-side-navigation__item-icon">
            {icon}
          </span>
        ) : null}

        <span className="stip-side-navigation__item-label">{children}</span>

        {badge ? (
          <span className="stip-side-navigation__item-badge">{badge}</span>
        ) : null}
      </a>
    );
  },
);

SideNavigationItem.displayName = "SideNavigationItem";
