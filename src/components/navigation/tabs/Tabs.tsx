import { forwardRef, useId, useMemo } from "react";

import { joinNavigationClassNames } from "../shared";
import { TabsContext } from "./Tabs.context";
import type { TabsProps } from "./Tabs.types";

import "./Tabs.css";

const sanitizeTabValue = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      value,
      onValueChange,
      orientation = "horizontal",
      activationMode = "automatic",
      id,
      className,
      ...containerProps
    },
    ref,
  ) => {
    const generatedId = useId();

    const baseId = id ?? `stip-tabs-${generatedId.replace(/:/g, "")}`;

    const contextValue = useMemo(
      () => ({
        baseId,
        value,
        orientation,
        activationMode,
        selectTab: onValueChange,
        getTabId: (tabValue: string) =>
          `${baseId}-tab-${sanitizeTabValue(tabValue)}`,
        getPanelId: (tabValue: string) =>
          `${baseId}-panel-${sanitizeTabValue(tabValue)}`,
      }),
      [activationMode, baseId, onValueChange, orientation, value],
    );

    return (
      <TabsContext.Provider value={contextValue}>
        <div
          {...containerProps}
          ref={ref}
          data-orientation={orientation}
          className={joinNavigationClassNames("stip-tabs", className)}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);

Tabs.displayName = "Tabs";
