import {
  FloatingArrow,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { forwardRef, useCallback, useId, useState } from "react";

import { Button } from "../../actions/button";

import type { ButtonProps } from "../../actions/button";

import { OverlayPortal } from "../overlay-portal";
import {
  joinOverlayClassNames,
  mapFloatingOpenChangeReason,
  useControllableOverlayState,
} from "../shared";

import { TooltipContext, useTooltipContext } from "./Tooltip.context";

import type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipProps,
  TooltipTriggerProps,
} from "./Tooltip.types";

import "./Tooltip.css";

import { OverlayNode } from "../overlay-node";

interface TooltipRootProps extends TooltipProps {
  nodeId: string;
}

const TooltipRoot = ({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  placement = "top",
  openDelay = 500,
  closeDelay = 0,
  closeOnEscape = true,
  portalContainer,
  nodeId,
}: TooltipRootProps) => {
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

  const hover = useHover(context, {
    mouseOnly: true,
    move: false,
    delay: {
      open: openDelay,
      close: closeDelay,
    },
  });

  const focus = useFocus(context, {
    visibleOnly: true,
  });

  const dismiss = useDismiss(context, {
    escapeKey: closeOnEscape,

    /*
     * Pointer leave and focus blur are owned
     * by useHover and useFocus.
     */
    outsidePress: false,

    bubbles: {
      escapeKey: false,
      outsidePress: false,
    },
  });

  const role = useRole(context, {
    role: "tooltip",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const closeFromTrigger = useCallback(() => {
    if (!isOpen) {
      return;
    }

    setOpen(false, {
      reason: "trigger-toggle",
    });
  }, [isOpen, setOpen]);

  const contextValue = {
    isOpen,
    context,
    setReference,
    setFloating,
    getReferenceProps,
    getFloatingProps,
    floatingStyles,
    contentId,
    setArrowElement,
    closeFromTrigger,
    portalContainer,
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  );
};

export const Tooltip = (props: TooltipProps) => {
  return (
    <OverlayNode>
      {(nodeId) => <TooltipRoot {...props} nodeId={nodeId} />}
    </OverlayNode>
  );
};

export const TooltipTrigger = forwardRef<
  HTMLButtonElement,
  TooltipTriggerProps
>(({ children, onClick, ...restProps }, forwardedRef) => {
  const {
    isOpen,
    contentId,
    setReference,
    getReferenceProps,
    closeFromTrigger,
  } = useTooltipContext();

  const interactionProps = getReferenceProps({
    onClick(event: React.MouseEvent<HTMLButtonElement>) {
      onClick?.(event);

      if (event.defaultPrevented) {
        return;
      }

      closeFromTrigger();
    },
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
      aria-describedby={isOpen ? contentId : undefined}
      onClick={interactionProps.onClick as ButtonProps["onClick"] | undefined}
      onFocus={interactionProps.onFocus as ButtonProps["onFocus"] | undefined}
      onBlur={interactionProps.onBlur as ButtonProps["onBlur"] | undefined}
      onMouseEnter={
        interactionProps.onMouseEnter as ButtonProps["onMouseEnter"] | undefined
      }
      onMouseLeave={
        interactionProps.onMouseLeave as ButtonProps["onMouseLeave"] | undefined
      }
      onPointerEnter={
        interactionProps.onPointerEnter as
          ButtonProps["onPointerEnter"] | undefined
      }
      onPointerLeave={
        interactionProps.onPointerLeave as
          ButtonProps["onPointerLeave"] | undefined
      }
    >
      {children}
    </Button>
  );
});

TooltipTrigger.displayName = "TooltipTrigger";

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, children, style, ...restProps }, forwardedRef) => {
    const {
      isOpen,
      setFloating,
      getFloatingProps,
      floatingStyles,
      contentId,
      portalContainer,
    } = useTooltipContext();

    if (!isOpen) {
      return null;
    }

    return (
      <OverlayPortal container={portalContainer}>
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
          role="tooltip"
          className={joinOverlayClassNames("stip-tooltip", className)}
          style={{
            ...floatingStyles,
            ...style,
          }}
        >
          {children}
        </div>
      </OverlayPortal>
    );
  },
);

TooltipContent.displayName = "TooltipContent";

export const TooltipArrow = forwardRef<SVGSVGElement, TooltipArrowProps>(
  ({ className, ...restProps }, forwardedRef) => {
    const { context, setArrowElement } = useTooltipContext();

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
        className={joinOverlayClassNames("stip-tooltip__arrow", className)}
      />
    );
  },
);

TooltipArrow.displayName = "TooltipArrow";
