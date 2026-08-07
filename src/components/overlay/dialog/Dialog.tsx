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

import { DialogContext, useDialogContext } from "./Dialog.context";

import type {
  DialogBodyProps,
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "./Dialog.types";

import "./Dialog.css";

import { OverlayNode } from "../overlay-node";

interface DialogRootProps extends DialogProps {
  nodeId: string;
}

const DialogRoot = ({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  closeOnEscape = true,
  closeOnBackdrop = true,
  portalContainer,
  nodeId,
}: DialogRootProps) => {
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

    /*
     * Modal outside dismissal is owned
     * by the backdrop, not useDismiss.
     */
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
    (
      reason:
        | "escape-key"
        | "pointer-outside"
        | "focus-outside"
        | "backdrop"
        | "close-action"
        | "item-select"
        | "trigger-toggle"
        | "programmatic",
    ) => {
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
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};

export const Dialog = (props: DialogProps) => {
  return (
    <OverlayNode>
      {(nodeId) => <DialogRoot {...props} nodeId={nodeId} />}
    </OverlayNode>
  );
};

export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, onClick, ...restProps }, forwardedRef) => {
    const { isOpen, setReference, getReferenceProps } = useDialogContext();

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

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    { size = "md", className, children, "aria-label": ariaLabel, ...restProps },
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
    } = useDialogContext();

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
              data-size={size}
              className={joinOverlayClassNames("stip-dialog", className)}
            >
              {children}
            </div>
          </OverlayFocusScope>
        </OverlayBackdrop>
      </OverlayPortal>
    );
  },
);

DialogContent.displayName = "DialogContent";

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-dialog__header", className)}
    />
  ),
);

DialogHeader.displayName = "DialogHeader";

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...restProps }, ref) => {
    const { titleId, setTitleMounted } = useDialogContext();

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
        className={joinOverlayClassNames("stip-dialog__title", className)}
      />
    );
  },
);

DialogTitle.displayName = "DialogTitle";

export const DialogDescription = forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, ...restProps }, ref) => {
  const { descriptionId, setDescriptionMounted } = useDialogContext();

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
      className={joinOverlayClassNames("stip-dialog__description", className)}
    />
  );
});

DialogDescription.displayName = "DialogDescription";

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-dialog__body", className)}
    />
  ),
);

DialogBody.displayName = "DialogBody";

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...restProps }, ref) => (
    <div
      {...restProps}
      ref={ref}
      className={joinOverlayClassNames("stip-dialog__footer", className)}
    />
  ),
);

DialogFooter.displayName = "DialogFooter";

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ onClick, ...restProps }, ref) => {
    const { requestClose } = useDialogContext();

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

DialogClose.displayName = "DialogClose";
