import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

import type { ButtonProps } from "../../actions/button";

import type { OverlayOpenChangeHandler, OverlayPlacement } from "../shared";

export interface MenuProps {
  children: ReactNode;

  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Initial uncontrolled open state.
   *
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Reports requested state changes.
   */
  onOpenChange?: OverlayOpenChangeHandler;

  /**
   * Preferred placement relative to the trigger.
   *
   * @default 'bottom-start'
   */
  placement?: OverlayPlacement;

  /**
   * Allows Escape-key dismissal.
   *
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Allows outside pointer dismissal.
   *
   * @default true
   */
  closeOnOutsidePress?: boolean;

  /**
   * Portal target.
   */
  portalContainer?: HTMLElement | null;
}

export type MenuTriggerProps = Omit<
  ButtonProps,
  "aria-expanded" | "aria-haspopup" | "aria-controls"
>;

export interface MenuContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accessible menu label.
   */
  "aria-label": string;
}

export interface MenuItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> {
  children: ReactNode;

  /**
   * Plain-text label used for typeahead.
   */
  textValue: string;

  /**
   * Called when the action is selected.
   */
  onSelect?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Keeps the menu open after selection.
   *
   * @default false
   */
  keepOpenOnSelect?: boolean;

  /**
   * Applies destructive visual treatment.
   *
   * @default false
   */
  destructive?: boolean;
}

export interface MenuCheckboxItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "aria-checked"
> {
  children: ReactNode;

  /**
   * Plain-text label used for typeahead.
   */
  textValue: string;

  /**
   * Current checked state.
   */
  checked: boolean;

  /**
   * Called with the requested checked state.
   */
  onCheckedChange?: (
    checked: boolean,
    event: MouseEvent<HTMLButtonElement>,
  ) => void;

  /**
   * Keeps the menu open after selection.
   *
   * @default true
   */
  keepOpenOnSelect?: boolean;
}

export interface MenuRadioItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "aria-checked" | "value"
> {
  children: ReactNode;

  /**
   * Plain-text label used for typeahead.
   */
  textValue: string;

  /**
   * Value represented by this radio item.
   */
  value: string;

  /**
   * Keeps the menu open after selection.
   *
   * @default true
   */
  keepOpenOnSelect?: boolean;
}

export interface MenuRadioGroupProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /**
   * Current selected value.
   */
  value: string;

  /**
   * Called when a radio item requests selection.
   */
  onValueChange?: (value: string, event: MouseEvent<HTMLButtonElement>) => void;
}

export type MenuGroupLabelProps = HTMLAttributes<HTMLDivElement>;

export type MenuGroupProps = HTMLAttributes<HTMLDivElement>;

export type MenuSeparatorProps = HTMLAttributes<HTMLDivElement>;
