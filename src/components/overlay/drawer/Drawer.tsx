import {
  useClick,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { forwardRef, useCallback, useEffect, useId, useState } from "react";

import { Button } from "../../actions/button";

import type { ButtonProps } from "../../actions/button";

import { OverlayBackdrop } from "../overlay-backdrop";
import { OverlayFocusScope } from "../overlay-focus-scope";
import { OverlayPortal } from "../overlay-portal";
import {
  joinOverlayClassNames,
  mapFloatingOpenChangeReason,
  useControllableOverlayState,
  useOverlayDismiss,
} from "../shared";

import type { OverlayDismissReason } from "../shared";

import { DrawerContext, useDrawerContext } from "./Drawer.context";

import type {
  DrawerBodyProps,
  DrawerCloseProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerFooterProps,
  DrawerHeaderProps,
  DrawerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "./Drawer.types";

import "./Drawer.css";

import { OverlayNode } from "../overlay-node";

interface DrawerRootProps extends DrawerProps {
  nodeId: string;
}

const DrawerRoot = ({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  closeOnEscape = true,
  closeOnBackdrop = true,
  portalContainer,
  nodeId,
}: DrawerRootProps) => {
  const { isOpen, setOpen } = useControllableOverlayState({
    open,
    defaultOpen,
    onOpenChange,
  });

  const titleId = useId();
  const descriptionId = useId();

  const [titleMounted, setTitleMounted] = useState(false);

  const [descriptionMounted, setDescriptionMounted] = useState(false);

  const {
    context,
    refs: { setReference, setFloating },
  } = useFloating({
    nodeId,
    open: isOpen,

    onOpenChange(nextOpen, _event, reason) {
      setOpen(nextOpen, {
        reason: mapFloatingOpenChangeReason(reason),
      });
    },
  });

  const click = useClick(context);

  const role = useRole(context, {
    role: "dialog",
  });

  const {
    getReferenceProps: getDismissReferenceProps,
    getFloatingProps: getDismissFloatingProps,
  } = useOverlayDismiss(context, {
    escapeKey: closeOnEscape,
    outsidePress: false,
    referencePress: false,
  });

  const {
    getReferenceProps: getBaseReferenceProps,
    getFloatingProps: getBaseFloatingProps,
  } = useInteractions([click, role]);

  const getReferenceProps = (userProps: Record<string, unknown> = {}) =>
    getDismissReferenceProps(getBaseReferenceProps(userProps));

  const getFloatingProps = (userProps: Record<string, unknown> = {}) =>
    getDismissFloatingProps(getBaseFloatingProps(userProps));

  const requestClose = useCallback(
    (reason: OverlayDismissReason) => {
      setOpen(false, {
        reason,
      });
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
    titleId,
    descriptionId,
    titleMounted,
    descriptionMounted,
    setTitleMounted,
    setDescriptionMounted,
    requestClose,
    closeOnBackdrop,
    portalContainer,
  };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

export const Drawer = (props: DrawerProps) => {
  return (
    <OverlayNode>
      {(nodeId) => <DrawerRoot {...props} nodeId={nodeId} />}
    </OverlayNode>
  );
};

export const DrawerTrigger = forwardRef<HTMLButtonElement, DrawerTriggerProps>(
  ({ children, onClick, ...restProps }, forwardedRef) => {
    const { isOpen, setReference, getReferenceProps } = useDrawerContext();

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
        aria-haspopup="dialog"
        aria-expanded={isOpen}
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

DrawerTrigger.displayName = "DrawerTrigger";

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  (
    {
      placement = "right",
      size = "md",
      className,
      children,
      "aria-label": ariaLabel,
      ...restProps
    },
    forwardedRef,
  ) => {
    const {
      isOpen,
      context,
      setFloating,
      getFloatingProps,
      titleId,
      descriptionId,
      titleMounted,
      descriptionMounted,
      closeOnBackdrop,
      portalContainer,
      requestClose,
    } = useDrawerContext();

    if (!isOpen) {
      return null;
    }

    return (
      <OverlayPortal container={portalContainer}>
        <OverlayBackdrop
          lockScroll
          className="stip-drawer-backdrop"
          onBackdropClick={() => {
            if (closeOnBackdrop) {
              requestClose("backdrop");
            }
          }}
        >
          <OverlayFocusScope
            context={context}
            modal
            outsideElementsInert
            returnFocus
            restoreFocus
          >
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
              role="dialog"
              aria-modal="true"
              aria-label={titleMounted ? undefined : ariaLabel}
              aria-labelledby={titleMounted ? titleId : undefined}
              aria-describedby={descriptionMounted ? descriptionId : undefined}
              tabIndex={-1}
              data-placement={placement}
              data-size={size}
              className={joinOverlayClassNames("stip-drawer", className)}
            >
              {children}
            </div>
          </OverlayFocusScope>
        </OverlayBackdrop>
      </OverlayPortal>
    );
  },
);

DrawerContent.displayName = "DrawerContent";

export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-drawer__header", className)}
    />
  ),
);

DrawerHeader.displayName = "DrawerHeader";

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ className, ...restProps }, ref) => {
    const { titleId, setTitleMounted } = useDrawerContext();

    useEffect(() => {
      setTitleMounted(true);

      return () => {
        setTitleMounted(false);
      };
    }, [setTitleMounted]);

    return (
      <h2
        {...restProps}
        ref={ref}
        id={titleId}
        className={joinOverlayClassNames("stip-drawer__title", className)}
      />
    );
  },
);

DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = forwardRef<
  HTMLParagraphElement,
  DrawerDescriptionProps
>(({ className, ...restProps }, ref) => {
  const { descriptionId, setDescriptionMounted } = useDrawerContext();

  useEffect(() => {
    setDescriptionMounted(true);

    return () => {
      setDescriptionMounted(false);
    };
  }, [setDescriptionMounted]);

  return (
    <p
      {...restProps}
      ref={ref}
      id={descriptionId}
      className={joinOverlayClassNames("stip-drawer__description", className)}
    />
  );
});

DrawerDescription.displayName = "DrawerDescription";

export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-drawer__body", className)}
    />
  ),
);

DrawerBody.displayName = "DrawerBody";

export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-drawer__footer", className)}
    />
  ),
);

DrawerFooter.displayName = "DrawerFooter";

export const DrawerClose = forwardRef<HTMLButtonElement, DrawerCloseProps>(
  ({ onClick, ...restProps }, ref) => {
    const { requestClose } = useDrawerContext();

    return (
      <Button
        {...restProps}
        ref={ref}
        onClick={(event) => {
          onClick?.(event);

          if (event.defaultPrevented) {
            return;
          }

          requestClose("close-action");
        }}
      />
    );
  },
);

DrawerClose.displayName = "DrawerClose";
