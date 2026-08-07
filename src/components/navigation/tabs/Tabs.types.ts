import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type TabsOrientation = "horizontal" | "vertical";

export type TabsActivationMode = "automatic" | "manual";

export type TabValue = string;

export interface TabsProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /**
   * TabList, Tab, dan TabPanel composition.
   */
  children: ReactNode;

  /**
   * Currently selected tab value.
   */
  value: TabValue;

  /**
   * Called when another enabled tab is selected.
   */
  onValueChange: (value: TabValue) => void;

  /**
   * Controls keyboard direction and visual layout.
   *
   * @default 'horizontal'
   */
  orientation?: TabsOrientation;

  /**
   * Automatic activates a tab as keyboard focus moves.
   * Manual requires Enter or Space.
   *
   * @default 'automatic'
   */
  activationMode?: TabsActivationMode;

  /**
   * Shared prefix used to generate tab and panel ids.
   * A stable generated id is used when omitted.
   */
  id?: string;
}

export interface TabListProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Tab components.
   */
  children: ReactNode;

  /**
   * Accessible name for the tab list.
   */
  "aria-label"?: string;

  /**
   * Reference to visible text describing the tab list.
   */
  "aria-labelledby"?: string;
}

export interface TabProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "value"
> {
  /**
   * Unique value linked to a TabPanel.
   */
  value: TabValue;

  /**
   * Visible tab label.
   */
  children: ReactNode;

  /**
   * Optional decorative leading icon.
   */
  icon?: ReactNode;

  /**
   * Optional trailing badge or status.
   */
  badge?: ReactNode;
}

export interface TabPanelProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Must match the associated Tab value.
   */
  value: TabValue;

  /**
   * Panel content.
   */
  children: ReactNode;

  /**
   * Keeps inactive content mounted but hidden.
   *
   * @default false
   */
  forceMount?: boolean;
}
