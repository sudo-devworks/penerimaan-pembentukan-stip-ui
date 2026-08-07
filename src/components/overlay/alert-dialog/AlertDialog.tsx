import {
  useClick,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { OverlayNode } from "../overlay-node";

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

import type {
  AlertDialogBodyProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogFooterProps,
  AlertDialogHeaderProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
} from "./AlertDialog.types";

import "./AlertDialog.css";

interface AlertDialogContextValue {
  isOpen: boolean;

  context: ReturnType<typeof useFloating>["context"];

  setReference: (node: HTMLElement | null) => void;

  setFloating: (node: HTMLElement | null) => void;

  getReferenceProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;

  getFloatingProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;

  titleId: string;
  descriptionId: string;

  titleMounted: boolean;
  descriptionMounted: boolean;

  setTitleMounted: (mounted: boolean) => void;

  setDescriptionMounted: (mounted: boolean) => void;

  requestClose: (reason: OverlayDismissReason) => void;

  closeOnBackdrop: boolean;

  initialFocusRef: React.RefObject<HTMLElement | null>;

  portalContainer?: HTMLElement | null;
}

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null);

const useAlertDialogContext = () => {
  const context = useContext(AlertDialogContext);

  if (!context) {
    throw new Error(
      "AlertDialog compound components must be rendered inside AlertDialog.",
    );
  }

  return context;
};

interface AlertDialogRootProps extends AlertDialogProps {
  nodeId: string;
}

const AlertDialogRoot = ({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  closeOnEscape = true,
  closeOnBackdrop = false,
  initialFocusRef,
  portalContainer,
  nodeId,
}: AlertDialogRootProps) => {
  const fallbackInitialFocusRef = useRef<HTMLElement>(null);

  const resolvedInitialFocusRef = initialFocusRef ?? fallbackInitialFocusRef;

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
    role: "alertdialog",
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
    initialFocusRef: resolvedInitialFocusRef,
    portalContainer,
  };

  return (
    <AlertDialogContext.Provider value={contextValue}>
      {children}
    </AlertDialogContext.Provider>
  );
};

export const AlertDialog = (props: AlertDialogProps) => {
  return (
    <OverlayNode>
      {(nodeId) => <AlertDialogRoot {...props} nodeId={nodeId} />}
    </OverlayNode>
  );
};

export const AlertDialogTrigger = forwardRef<
  HTMLButtonElement,
  AlertDialogTriggerProps
>(({ children, onClick, ...restProps }, forwardedRef) => {
  const { isOpen, setReference, getReferenceProps } = useAlertDialogContext();

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
});

AlertDialogTrigger.displayName = "AlertDialogTrigger";

export const AlertDialogContent = forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(
  (
    { size = "sm", className, children, "aria-label": ariaLabel, ...restProps },
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
      requestClose,
      closeOnBackdrop,
      initialFocusRef,
      portalContainer,
    } = useAlertDialogContext();

    if (!isOpen) {
      return null;
    }

    return (
      <OverlayPortal container={portalContainer}>
        <OverlayBackdrop
          lockScroll
          onBackdropClick={() => {
            if (closeOnBackdrop) {
              requestClose("backdrop");
            }
          }}
        >
          <OverlayFocusScope
            context={context}
            modal
            initialFocus={initialFocusRef}
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
              role="alertdialog"
              aria-modal="true"
              aria-label={titleMounted ? undefined : ariaLabel}
              aria-labelledby={titleMounted ? titleId : undefined}
              aria-describedby={descriptionMounted ? descriptionId : undefined}
              tabIndex={-1}
              data-size={size}
              className={joinOverlayClassNames("stip-alert-dialog", className)}
            >
              {children}
            </div>
          </OverlayFocusScope>
        </OverlayBackdrop>
      </OverlayPortal>
    );
  },
);

AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader = forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(({ className, ...restProps }, ref) => (
  <div
    {...restProps}
    ref={ref}
    className={joinOverlayClassNames("stip-alert-dialog__header", className)}
  />
));

AlertDialogHeader.displayName = "AlertDialogHeader";

export const AlertDialogTitle = forwardRef<
  HTMLHeadingElement,
  AlertDialogTitleProps
>(({ className, ...restProps }, ref) => {
  const { titleId, setTitleMounted } = useAlertDialogContext();

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
      className={joinOverlayClassNames("stip-alert-dialog__title", className)}
    />
  );
});

AlertDialogTitle.displayName = "AlertDialogTitle";

export const AlertDialogDescription = forwardRef<
  HTMLParagraphElement,
  AlertDialogDescriptionProps
>(({ className, ...restProps }, ref) => {
  const { descriptionId, setDescriptionMounted } = useAlertDialogContext();

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
      className={joinOverlayClassNames(
        "stip-alert-dialog__description",
        className,
      )}
    />
  );
});

AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogBody = forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-alert-dialog__body", className)}
    />
  ),
);

AlertDialogBody.displayName = "AlertDialogBody";

export const AlertDialogFooter = forwardRef<
  HTMLDivElement,
  AlertDialogFooterProps
>(({ className, ...restProps }, ref) => (
  <div
    {...restProps}
    ref={ref}
    className={joinOverlayClassNames("stip-alert-dialog__footer", className)}
  />
));

AlertDialogFooter.displayName = "AlertDialogFooter";

export const AlertDialogCancel = forwardRef<
  HTMLButtonElement,
  AlertDialogCancelProps
>(({ onClick, ...restProps }, forwardedRef) => {
  const { requestClose, initialFocusRef } = useAlertDialogContext();

  return (
    <Button
      {...restProps}
      ref={(element) => {
        if (!initialFocusRef.current) {
          initialFocusRef.current = element;
        }

        if (typeof forwardedRef === "function") {
          forwardedRef(element);
        } else if (forwardedRef) {
          forwardedRef.current = element;
        }
      }}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        requestClose("close-action");
      }}
    />
  );
});

AlertDialogCancel.displayName = "AlertDialogCancel";
