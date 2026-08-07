import { forwardRef } from "react";

import type { IconButtonProps } from "./IconButton.types";

import "./IconButton.css";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      "aria-label": ariaLabel,
      variant = "ghost",
      size = "md",
      shape = "rounded",
      loading = false,
      loadingLabel,
      disabled = false,
      type = "button",
      className,
      ...buttonProps
    },
    ref,
  ) => {
    const isInteractionDisabled = disabled || loading;

    const accessibleLabel = loading && loadingLabel ? loadingLabel : ariaLabel;

    return (
      <button
        {...buttonProps}
        ref={ref}
        type={type}
        disabled={isInteractionDisabled}
        aria-label={accessibleLabel}
        aria-busy={loading || undefined}
        data-variant={variant}
        data-size={size}
        data-shape={shape}
        data-loading={loading || undefined}
        className={joinClassNames("stip-icon-button", className)}
      >
        {loading ? (
          <span className="stip-icon-button__spinner" aria-hidden="true" />
        ) : (
          <span className="stip-icon-button__icon" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
