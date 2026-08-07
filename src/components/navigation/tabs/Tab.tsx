import { forwardRef, type KeyboardEvent } from "react";

import { joinNavigationClassNames } from "../shared";
import { useTabsContext } from "./Tabs.context";
import type { TabProps } from "./Tabs.types";

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      value,
      children,
      icon,
      badge,
      disabled = false,
      type = "button",
      className,
      onClick,
      onKeyDown,
      ...buttonProps
    },
    ref,
  ) => {
    const {
      value: selectedValue,
      activationMode,
      selectTab,
      getTabId,
      getPanelId,
    } = useTabsContext();

    const selected = selectedValue === value;

    const handleClick: TabProps["onClick"] = (event) => {
      onClick?.(event);

      if (event.defaultPrevented || disabled) {
        return;
      }

      selectTab(value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);

      if (event.defaultPrevented || disabled || activationMode !== "manual") {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectTab(value);
      }
    };

    return (
      <button
        {...buttonProps}
        ref={ref}
        id={getTabId(value)}
        type={type}
        role="tab"
        disabled={disabled}
        tabIndex={selected ? 0 : -1}
        aria-selected={selected}
        aria-controls={getPanelId(value)}
        data-value={value}
        data-selected={selected || undefined}
        className={joinNavigationClassNames("stip-tab", className)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {icon ? (
          <span aria-hidden="true" className="stip-tab__icon">
            {icon}
          </span>
        ) : null}

        <span className="stip-tab__label">{children}</span>

        {badge ? <span className="stip-tab__badge">{badge}</span> : null}
      </button>
    );
  },
);

Tab.displayName = "Tab";
