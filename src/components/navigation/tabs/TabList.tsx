import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type KeyboardEvent,
  type ReactElement,
} from "react";

import { joinNavigationClassNames } from "../shared";
import { useTabsContext } from "./Tabs.context";
import type { TabListProps, TabProps } from "./Tabs.types";

const isTabElement = (child: unknown): child is ReactElement<TabProps> =>
  isValidElement<TabProps>(child) && typeof child.props.value === "string";

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, onKeyDown, ...listProps }, ref) => {
    const { orientation, activationMode, selectTab } = useTabsContext();

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);

      if (event.defaultPrevented) {
        return;
      }

      const enabledTabs = Array.from(
        event.currentTarget.querySelectorAll<HTMLButtonElement>(
          '[role="tab"]:not(:disabled)',
        ),
      );

      if (enabledTabs.length === 0) {
        return;
      }

      const activeIndex = enabledTabs.indexOf(
        document.activeElement as HTMLButtonElement,
      );

      if (activeIndex < 0) {
        return;
      }

      const nextKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";

      const previousKey =
        orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";

      const getNextIndex = (): number | null => {
        switch (event.key) {
          case nextKey:
            return (activeIndex + 1) % enabledTabs.length;

          case previousKey:
            return (activeIndex - 1 + enabledTabs.length) % enabledTabs.length;

          case "Home":
            return 0;

          case "End":
            return enabledTabs.length - 1;

          default:
            return null;
        }
      };

      const nextIndex = getNextIndex();

      if (nextIndex === null) {
        return;
      }

      event.preventDefault();

      const nextTab = enabledTabs[nextIndex];

      nextTab.focus();

      if (activationMode === "automatic") {
        const nextValue = nextTab.dataset.value;

        if (nextValue) {
          selectTab(nextValue);
        }
      }
    };

    const enhancedChildren = Children.map(children, (child) => {
      if (!isTabElement(child)) {
        return child;
      }

      return cloneElement(child);
    });

    return (
      <div
        {...listProps}
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        data-orientation={orientation}
        className={joinNavigationClassNames("stip-tab-list", className)}
        onKeyDown={handleKeyDown}
      >
        {enhancedChildren}
      </div>
    );
  },
);

TabList.displayName = "TabList";
