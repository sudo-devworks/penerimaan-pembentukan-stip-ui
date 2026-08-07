import {
  FloatingList,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { forwardRef, useCallback, useId, useRef, useState } from "react";

import { Button } from "../../actions/button";

import type { ButtonProps } from "../../actions/button";

import type { ButtonHTMLAttributes } from "react";

import { Check, Circle } from "lucide-react";

import { OverlayFocusScope } from "../overlay-focus-scope";
import { OverlayPortal } from "../overlay-portal";
import {
  joinOverlayClassNames,
  mapFloatingOpenChangeReason,
  useControllableOverlayState,
} from "../shared";

import type { OverlayDismissReason } from "../shared";

import {
  MenuContext,
  MenuRadioGroupContext,
  useMenuContext,
  useMenuRadioGroupContext,
} from "./Menu.context";

import type {
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuGroupLabelProps,
  MenuGroupProps,
  MenuItemProps,
  MenuProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
  MenuTriggerProps,
} from "./Menu.types";

import "./Menu.css";

import { OverlayNode } from "../overlay-node";

interface MenuRootProps extends MenuProps {
  nodeId: string;
}

const MenuRoot = ({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  placement = "bottom-start",
  closeOnEscape = true,
  closeOnOutsidePress = true,
  portalContainer,
  nodeId,
}: MenuRootProps) => {
  const { isOpen, setOpen } = useControllableOverlayState({
    open,
    defaultOpen,
    onOpenChange,
  });

  const contentId = useId();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<Array<HTMLElement | null>>([]);

  const labelsRef = useRef<Array<string | null>>([]);

  const {
    context,
    refs: { setReference, setFloating },
    floatingStyles,
  } = useFloating({
    nodeId,
    open: isOpen,
    placement,

    whileElementsMounted: autoUpdate,

    middleware: [
      offset(8),
      flip({
        padding: 16,
      }),
      shift({
        padding: 16,
      }),
    ],

    onOpenChange(nextOpen, _event, reason) {
      setOpen(nextOpen, {
        reason: mapFloatingOpenChangeReason(reason),
      });

      if (!nextOpen) {
        setActiveIndex(null);
      }
    },
  });

  const click = useClick(context);

  const dismiss = useDismiss(context, {
    escapeKey: closeOnEscape,

    outsidePress: closeOnOutsidePress,

    bubbles: {
      escapeKey: false,
      outsidePress: false,
    },
  });

  const role = useRole(context, {
    role: "menu",
  });

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
    focusItemOnOpen: true,
    orientation: "vertical",
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
    enabled: isOpen,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, listNavigation, typeahead],
  );

  const requestClose = useCallback(
    (reason: OverlayDismissReason) => {
      setOpen(false, {
        reason,
      });

      setActiveIndex(null);
    },
    [setOpen],
  );

  const contextValue = {
    isOpen,
    context,
    setReference,
    setFloating,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    floatingStyles,
    contentId,
    activeIndex,
    elementsRef,
    labelsRef,
    requestClose,
    portalContainer,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export const Menu = (props: MenuProps) => {
  return (
    <OverlayNode>
      {(nodeId) => <MenuRoot {...props} nodeId={nodeId} />}
    </OverlayNode>
  );
};

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ children, onClick, ...restProps }, forwardedRef) => {
    const { isOpen, contentId, setReference, getReferenceProps } =
      useMenuContext();

    const interactionProps = getReferenceProps({
      onClick,
    });

    return (
      <Button
        {...restProps}
        ref={(element) => {
          setReference(element);

          if (typeof forwardedRef === "function") {
            forwardedRef(element);
          } else if (forwardedRef) {
            forwardedRef.current = element;
          }
        }}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? contentId : undefined}
        onClick={interactionProps.onClick as ButtonProps["onClick"] | undefined}
        onKeyDown={
          interactionProps.onKeyDown as ButtonProps["onKeyDown"] | undefined
        }
        onMouseDown={
          interactionProps.onMouseDown as ButtonProps["onMouseDown"] | undefined
        }
        onPointerDown={
          interactionProps.onPointerDown as
            ButtonProps["onPointerDown"] | undefined
        }
      >
        {children}
      </Button>
    );
  },
);

MenuTrigger.displayName = "MenuTrigger";

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  (
    { className, children, style, "aria-label": ariaLabel, ...restProps },
    forwardedRef,
  ) => {
    const {
      isOpen,
      context,
      setFloating,
      getFloatingProps,
      floatingStyles,
      contentId,
      elementsRef,
      labelsRef,
      portalContainer,
    } = useMenuContext();

    if (!isOpen) {
      return null;
    }

    return (
      <OverlayPortal container={portalContainer}>
        <OverlayFocusScope
          context={context}
          modal={false}
          outsideElementsInert={false}
          returnFocus
          restoreFocus
        >
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            <div
              {...getFloatingProps({
                ...restProps,
              })}
              ref={(element) => {
                setFloating(element);

                if (typeof forwardedRef === "function") {
                  forwardedRef(element);
                } else if (forwardedRef) {
                  forwardedRef.current = element;
                }
              }}
              id={contentId}
              role="menu"
              aria-label={ariaLabel}
              tabIndex={-1}
              className={joinOverlayClassNames("stip-menu", className)}
              style={{
                ...floatingStyles,
                ...style,
              }}
            >
              {children}
            </div>
          </FloatingList>
        </OverlayFocusScope>
      </OverlayPortal>
    );
  },
);

MenuContent.displayName = "MenuContent";

interface UseMenuListItemOptions {
  textValue: string;
  disabled: boolean;
}

const useMenuListItem = ({ textValue, disabled }: UseMenuListItemOptions) => {
  const { activeIndex, getItemProps } = useMenuContext();

  const { ref: listItemRef, index } = useListItem({
    label: disabled ? null : textValue,
  });

  return {
    activeIndex,
    getItemProps,
    listItemRef,
    index,
  };
};

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      children,
      textValue,
      onSelect,
      keepOpenOnSelect = false,
      destructive = false,
      disabled = false,
      className,
      ...restProps
    },
    forwardedRef,
  ) => {
    const { requestClose } = useMenuContext();

    const { activeIndex, getItemProps, listItemRef, index } = useMenuListItem({
      textValue,
      disabled,
    });

    const mergedRef = useMergeRefs([listItemRef, forwardedRef]);

    const interactionProps = getItemProps({
      onClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (disabled) {
          return;
        }

        onSelect?.(event);

        if (event.defaultPrevented || keepOpenOnSelect) {
          return;
        }

        requestClose("item-select");
      },
    }) as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        {...restProps}
        {...interactionProps}
        ref={mergedRef}
        type="button"

        role="menuitem"
        disabled={disabled}
        tabIndex={activeIndex === index ? 0 : -1}
        data-active={activeIndex === index || undefined}
        data-destructive={destructive || undefined}
        className={joinOverlayClassNames("stip-menu__item", className)}
      >
        {children}
      </button>
    );
  },
);

MenuItem.displayName = "MenuItem";

export const MenuCheckboxItem = forwardRef<
  HTMLButtonElement,
  MenuCheckboxItemProps
>(
  (
    {
      children,
      textValue,
      checked,
      onCheckedChange,
      keepOpenOnSelect = true,
      disabled = false,
      className,
      ...restProps
    },
    forwardedRef,
  ) => {
    const { requestClose } = useMenuContext();

    const { activeIndex, getItemProps, listItemRef, index } = useMenuListItem({
      textValue,
      disabled,
    });

    const mergedRef = useMergeRefs([listItemRef, forwardedRef]);

    const interactionProps = getItemProps({
      onClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (disabled) {
          return;
        }

        onCheckedChange?.(!checked, event);

        if (event.defaultPrevented || keepOpenOnSelect) {
          return;
        }

        requestClose("item-select");
      },
    }) as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        {...restProps}
        {...interactionProps}
        ref={mergedRef}
        type="button"
        role="menuitemcheckbox"
        aria-checked={checked}
        disabled={disabled}
        tabIndex={activeIndex === index ? 0 : -1}
        data-active={activeIndex === index || undefined}
        data-checked={checked || undefined}
        className={joinOverlayClassNames(
          "stip-menu__item",
          "stip-menu__item--selection",
          className,
        )}
      >
        <span className="stip-menu__selection-indicator" aria-hidden="true">
          {checked ? <Check /> : null}
        </span>

        <span className="stip-menu__item-content">{children}</span>
      </button>
    );
  },
);

MenuCheckboxItem.displayName = "MenuCheckboxItem";

export const MenuRadioGroup = forwardRef<HTMLDivElement, MenuRadioGroupProps>(
  ({ value, onValueChange, className, children, ...restProps }, ref) => {
    const contextValue = {
      value,
      onValueChange,
    };

    return (
      <MenuRadioGroupContext.Provider value={contextValue}>
        <div
          {...restProps}
          ref={ref}
          role="group"
          className={joinOverlayClassNames("stip-menu__group", className)}
        >
          {children}
        </div>
      </MenuRadioGroupContext.Provider>
    );
  },
);

MenuRadioGroup.displayName = "MenuRadioGroup";

export const MenuRadioItem = forwardRef<HTMLButtonElement, MenuRadioItemProps>(
  (
    {
      children,
      textValue,
      value,
      keepOpenOnSelect = true,
      disabled = false,
      className,
      ...restProps
    },
    forwardedRef,
  ) => {
    const { requestClose } = useMenuContext();

    const { value: selectedValue, onValueChange } = useMenuRadioGroupContext();

    const checked = selectedValue === value;

    const { activeIndex, getItemProps, listItemRef, index } = useMenuListItem({
      textValue,
      disabled,
    });

    const mergedRef = useMergeRefs([listItemRef, forwardedRef]);

    const interactionProps = getItemProps({
      onClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (disabled) {
          return;
        }

        onValueChange?.(value, event);

        if (event.defaultPrevented || keepOpenOnSelect) {
          return;
        }

        requestClose("item-select");
      },
    }) as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        {...restProps}
        {...interactionProps}
        ref={mergedRef}
        type="button"
        role="menuitemradio"
        aria-checked={checked}
        disabled={disabled}
        tabIndex={activeIndex === index ? 0 : -1}
        data-active={activeIndex === index || undefined}
        data-checked={checked || undefined}
        className={joinOverlayClassNames(
          "stip-menu__item",
          "stip-menu__item--selection",
          className,
        )}
      >
        <span className="stip-menu__selection-indicator" aria-hidden="true">
          {checked ? <Circle /> : null}
        </span>

        <span className="stip-menu__item-content">{children}</span>
      </button>
    );
  },
);

MenuRadioItem.displayName = "MenuRadioItem";

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      role="group"
      className={joinOverlayClassNames("stip-menu__group", className)}
    />
  ),
);

MenuGroup.displayName = "MenuGroup";

export const MenuGroupLabel = forwardRef<HTMLDivElement, MenuGroupLabelProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-menu__group-label", className)}
    />
  ),
);

MenuGroupLabel.displayName = "MenuGroupLabel";

export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      role="separator"
      className={joinOverlayClassNames("stip-menu__separator", className)}
    />
  ),
);

MenuSeparator.displayName = "MenuSeparator";
