import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import { useTabsContext } from "./Tabs.context";
import type { TabPanelProps } from "./Tabs.types";

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, children, forceMount = false, className, ...panelProps }, ref) => {
    const { value: selectedValue, getTabId, getPanelId } = useTabsContext();

    const selected = selectedValue === value;

    if (!selected && !forceMount) {
      return null;
    }

    return (
      <div
        {...panelProps}
        ref={ref}
        id={getPanelId(value)}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={getTabId(value)}
        hidden={!selected}
        data-selected={selected || undefined}
        className={joinNavigationClassNames("stip-tab-panel", className)}
      >
        {children}
      </div>
    );
  },
);

TabPanel.displayName = "TabPanel";
