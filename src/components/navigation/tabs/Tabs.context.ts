import { createContext, useContext } from "react";

import type {
  TabValue,
  TabsActivationMode,
  TabsOrientation,
} from "./Tabs.types";

export interface TabsContextValue {
  baseId: string;
  value: TabValue;
  orientation: TabsOrientation;
  activationMode: TabsActivationMode;
  selectTab: (value: TabValue) => void;
  getTabId: (value: TabValue) => string;
  getPanelId: (value: TabValue) => string;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = (): TabsContextValue => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be rendered inside <Tabs>.");
  }

  return context;
};
