import {
  FloatingArrow,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { forwardRef, useCallback, useId, useState } from "react";

import { Button } from "../../actions/button";

import type { ButtonProps } from "../../actions/button";

import { OverlayFocusScope } from "../overlay-focus-scope";
import { OverlayPortal } from "../overlay-portal";
import {
  joinOverlayClassNames,
  mapFloatingOpenChangeReason,
  useControllableOverlayState,
  useOverlayDismiss,
} from "../shared";

import type { OverlayDismissReason } from "../shared";

import { PopoverContext, usePopoverContext } from "./Popover.context";

import type {
  PopoverArrowProps,
  PopoverContentProps,
  PopoverProps,
  PopoverTriggerProps,
} from "./Popover.types";

import "./Popover.css";

import { OverlayNode } from "../overlay-node";

interface PopoverRootProps extends PopoverProps {
  nodeId: string;
}

const PopoverRoot = ({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  placement = "bottom-start",
  closeOnEscape = true,
  closeOnOutsidePress = true,
  portalContainer,
  nodeId,
}: PopoverRootProps) => {
  const { isOpen, setOpen } = useControllableOverlayState({
    open,
    defaultOpen,
    onOpenChange,
  });

  const contentId = useId();

  const [arrowElement, setArrowElement] = useState<SVGSVGElement | null>(null);

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
      arrow({
        element: arrowElement,
      }),
    ],

    onOpenChange(nextOpen, _event, reason) {
      setOpen(nextOpen, {
        reason: mapFloatingOpenChangeReason(reason),
      });
    },
  });

  const click = useClick(context);

  const {
    getReferenceProps: getDismissReferenceProps,
    getFloatingProps: getDismissFloatingProps,
  } = useOverlayDismiss(context, {
    escapeKey: closeOnEscape,
    outsidePress: closeOnOutsidePress,
    referencePress: false,
  });

  const {
    getReferenceProps: getBaseReferenceProps,
    getFloatingProps: getBaseFloatingProps,
  } = useInteractions([click]);

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
    floatingStyles,
    contentId,
    placement,
    setArrowElement,
    requestClose,
    portalContainer,
  };

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );
};

export const Popover = (props: PopoverProps) => {
  return (
    <OverlayNode>
      {(nodeId) => <PopoverRoot {...props} nodeId={nodeId} />}
    </OverlayNode>
  );
};

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ children, onClick, ...restProps }, forwardedRef) => {
  const { isOpen, contentId, setReference, getReferenceProps } =
    usePopoverContext();

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
});

PopoverTrigger.displayName = "PopoverTrigger";

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, children, style, ...restProps }, forwardedRef) => {
    const {
      isOpen,
      context,
      setFloating,
      getFloatingProps,
      floatingStyles,
      contentId,
      placement,
      portalContainer,
    } = usePopoverContext();

    if (!isOpen) {
      return null;
    }

    return (
      <OverlayPortal container={portalContainer}>
        <OverlayFocusScope
          context={context}
          modal={false}
          initialFocus={-1}
          outsideElementsInert={false}
          closeOnFocusOut={false}
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
            id={contentId}
            tabIndex={-1}
            data-placement={placement}
            className={joinOverlayClassNames("stip-popover", className)}
            style={{
              ...floatingStyles,
              ...style,
            }}
          >
            {children}
          </div>
        </OverlayFocusScope>
      </OverlayPortal>
    );
  },
);

PopoverContent.displayName = "PopoverContent";

export const PopoverArrow = forwardRef<SVGSVGElement, PopoverArrowProps>(
  ({ className, ...restProps }, forwardedRef) => {
    const { context, setArrowElement } = usePopoverContext();
    return (
      <FloatingArrow
        {...restProps}
        ref={(element) => {
          setArrowElement(element);

          if (typeof forwardedRef === "function") {
            forwardedRef(element);
          } else if (forwardedRef) {
            forwardedRef.current = element;
          }
        }}
        context={context}
        className={joinOverlayClassNames("stip-popover__arrow", className)}
      />
    );
  },
);

PopoverArrow.displayName = "PopoverArrow";
