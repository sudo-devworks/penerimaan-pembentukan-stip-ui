import type { MouseEventHandler, ReactNode } from "react";

import type { ButtonSize, ButtonVariant } from "../button";

export type DropdownActionPlacement = "start" | "end";

export interface DropdownActionItemBase {
  /**
   * Stable identifier used for rendering and testing.
   */
  id: string;

  /**
   * Visible action label.
   */
  label: string;

  /**
   * Optional supporting description.
   */
  description?: string;

  /**
   * Decorative icon.
   */
  icon?: ReactNode;

  /**
   * Prevents interaction.
   */
  disabled?: boolean;

  /**
   * Applies destructive visual treatment.
   */
  destructive?: boolean;
}

export interface DropdownActionButtonItem extends DropdownActionItemBase {
  type?: "action";

  onSelect: MouseEventHandler<HTMLButtonElement>;

  href?: never;
  target?: never;
  rel?: never;
}

export interface DropdownActionLinkItem extends DropdownActionItemBase {
  type: "link";

  href: string;

  target?: string;
  rel?: string;

  onSelect?: never;
}

export interface DropdownActionSeparator {
  type: "separator";
  id: string;
}

export type DropdownActionItem =
  DropdownActionButtonItem | DropdownActionLinkItem | DropdownActionSeparator;

export interface DropdownActionProps {
  /**
   * Visible trigger label.
   */
  label: string;

  /**
   * Menu entries.
   */
  items: DropdownActionItem[];

  /**
   * Button visual variant.
   *
   * @default 'outline'
   */
  variant?: ButtonVariant;

  /**
   * Button size.
   *
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Optional trigger leading icon.
   */
  leadingIcon?: ReactNode;

  /**
   * Horizontal menu alignment relative to trigger.
   *
   * @default 'start'
   */
  placement?: DropdownActionPlacement;

  /**
   * Disables the trigger.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Makes the trigger fill available width.
   *
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Accessible menu label.
   * Falls back to the visible trigger label.
   */
  menuLabel?: string;

  className?: string;
}
