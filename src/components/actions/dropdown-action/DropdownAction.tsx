import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

import { Button } from "../button";

import type {
  DropdownActionItem,
  DropdownActionProps,
} from "./DropdownAction.types";

import "./DropdownAction.css";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

const isSeparator = (
  item: DropdownActionItem,
): item is Extract<DropdownActionItem, { type: "separator" }> =>
  item.type === "separator";

const isLinkItem = (
  item: DropdownActionItem,
): item is Extract<DropdownActionItem, { type: "link" }> =>
  item.type === "link";

const mergeRel = (
  target: string | undefined,
  rel: string | undefined,
): string | undefined => {
  if (target !== "_blank") {
    return rel;
  }

  return Array.from(
    new Set([
      ...(rel?.split(/\s+/).filter(Boolean) ?? []),
      "noopener",
      "noreferrer",
    ]),
  ).join(" ");
};

export const DropdownAction = ({
  label,
  items,
  variant = "outline",
  size = "md",
  leadingIcon,
  placement = "start",
  disabled = false,
  fullWidth = false,
  menuLabel,
  className,
}: DropdownActionProps) => {
  const menuId = useId();

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | HTMLAnchorElement | null>>(
    [],
  );

  const [isOpen, setIsOpen] = useState(false);

  const interactiveItems = items.filter(
    (item) => !isSeparator(item) && !item.disabled,
  );

  const focusItem = (index: number) => {
    const interactiveIndex = Math.max(
      0,
      Math.min(index, interactiveItems.length - 1),
    );

    const targetItem = interactiveItems[interactiveIndex];

    if (!targetItem) {
      return;
    }

    const sourceIndex = items.findIndex((item) => item.id === targetItem.id);

    itemRefs.current[sourceIndex]?.focus();
  };

  const closeMenu = (returnFocus = false) => {
    if (returnFocus) {
      triggerRef.current?.focus();
    }

    setIsOpen(false);
  };

  const openMenu = (focusPosition: "first" | "last" = "first") => {
    if (disabled || interactiveItems.length === 0) {
      return;
    }

    setIsOpen(true);

    window.requestAnimationFrame(() => {
      focusItem(focusPosition === "first" ? 0 : interactiveItems.length - 1);
    });
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const handleTriggerKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openMenu("first");
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      openMenu("last");
    }

    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      closeMenu(true);
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentSourceIndex = itemRefs.current.findIndex(
      (item) => item === document.activeElement,
    );

    const currentItem = items[currentSourceIndex];

    const currentInteractiveIndex =
      currentItem && !isSeparator(currentItem)
        ? interactiveItems.findIndex((item) => item.id === currentItem.id)
        : -1;

    if (event.key === "ArrowDown") {
      event.preventDefault();

      const nextIndex =
        currentInteractiveIndex >= interactiveItems.length - 1
          ? 0
          : currentInteractiveIndex + 1;

      focusItem(nextIndex);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      const previousIndex =
        currentInteractiveIndex <= 0
          ? interactiveItems.length - 1
          : currentInteractiveIndex - 1;

      focusItem(previousIndex);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusItem(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusItem(interactiveItems.length - 1);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
    }

    if (event.key === "Tab") {
      closeMenu();
    }
  };

  const handleItemSelected = () => {
    closeMenu(true);
  };

  return (
    <div
      ref={rootRef}
      data-placement={placement}
      className={joinClassNames(
        "stip-dropdown-action",
        fullWidth && "stip-dropdown-action--full-width",
        className,
      )}
    >
      <Button
        ref={triggerRef}
        variant={variant}
        size={size}
        leadingIcon={leadingIcon}
        trailingIcon={<ChevronDown />}
        disabled={disabled}
        fullWidth={fullWidth}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={() => {
          if (isOpen) {
            closeMenu();
          } else {
            openMenu("first");
          }
        }}
        onKeyDown={handleTriggerKeyDown}
      >
        {label}
      </Button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          aria-label={menuLabel ?? label}
          className="stip-dropdown-action__menu"
          onKeyDown={handleMenuKeyDown}
        >
          {items.map((item, index) => {
            if (isSeparator(item)) {
              return (
                <div
                  key={item.id}
                  role="separator"
                  className="stip-dropdown-action__separator"
                />
              );
            }

            const itemContent = (
              <>
                {item.icon ? (
                  <span
                    className="stip-dropdown-action__item-icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                ) : null}

                <span className="stip-dropdown-action__item-content">
                  <span className="stip-dropdown-action__item-label">
                    {item.label}
                  </span>

                  {item.description ? (
                    <span className="stip-dropdown-action__item-description">
                      {item.description}
                    </span>
                  ) : null}
                </span>

                {isLinkItem(item) && item.target === "_blank" ? (
                  <span
                    className="stip-dropdown-action__item-icon"
                    aria-hidden="true"
                  >
                    <ExternalLink />
                  </span>
                ) : null}
              </>
            );

            if (isLinkItem(item)) {
              if (item.disabled) {
                return (
                  <span
                    key={item.id}
                    role="menuitem"
                    aria-disabled="true"
                    data-destructive={item.destructive || undefined}
                    className="stip-dropdown-action__item"
                  >
                    {itemContent}
                  </span>
                );
              }

              return (
                <a
                  key={item.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  role="menuitem"
                  href={item.href}
                  target={item.target}
                  rel={mergeRel(item.target, item.rel)}
                  tabIndex={-1}
                  data-destructive={item.destructive || undefined}
                  className="stip-dropdown-action__item"
                  onClick={handleItemSelected}
                >
                  {itemContent}
                </a>
              );
            }

            return (
              <button
                key={item.id}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                tabIndex={-1}
                data-destructive={item.destructive || undefined}
                className="stip-dropdown-action__item"
                onClick={(event) => {
                  item.onSelect(event);
                  handleItemSelected();
                }}
              >
                {itemContent}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
