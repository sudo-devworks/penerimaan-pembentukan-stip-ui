import { forwardRef } from "react";

import type { TextActionProps } from "./TextAction.types";

import "./TextAction.css";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const TextAction = forwardRef<HTMLButtonElement, TextActionProps>(
  (
    {
      children,
      variant = "default",
      size = "md",
      leadingIcon,
      trailingIcon,
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

    const visibleLabel = loading && loadingLabel ? loadingLabel : children;

    return (
      <button
        {...buttonProps}
        ref={ref}
        type={type}
        disabled={isInteractionDisabled}
        aria-busy={loading || undefined}
        data-variant={variant}
        data-size={size}
        data-loading={loading || undefined}
        className={joinClassNames("stip-text-action", className)}
      >
        {loading ? (
          <span className="stip-text-action__spinner" aria-hidden="true" />
        ) : leadingIcon ? (
          <span className="stip-text-action__icon" aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}

        <span className="stip-text-action__label">{visibleLabel}</span>

        {!loading && trailingIcon ? (
          <span className="stip-text-action__icon" aria-hidden="true">
            {trailingIcon}
          </span>
        ) : null}
      </button>
    );
  },
);

TextAction.displayName = "TextAction";
