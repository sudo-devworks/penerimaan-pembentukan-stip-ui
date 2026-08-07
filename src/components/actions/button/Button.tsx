import { forwardRef, useId } from "react";

import type { ButtonProps } from "./Button.types";

import "./Button.css";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      leadingIcon,
      trailingIcon,
      loading = false,
      loadingLabel,
      fullWidth = false,
      disabled = false,
      type = "button",
      className,
      "aria-describedby": ariaDescribedBy,
      ...buttonProps
    },
    ref,
  ) => {
    const generatedLoadingDescriptionId = useId();

    const isInteractionDisabled = disabled || loading;
    const visibleContent = loading && loadingLabel ? loadingLabel : children;

    const loadingDescriptionId =
      loading && loadingLabel ? generatedLoadingDescriptionId : undefined;

    const describedBy =
      [ariaDescribedBy, loadingDescriptionId].filter(Boolean).join(" ") ||
      undefined;

    return (
      <button
        {...buttonProps}
        ref={ref}
        type={type}
        disabled={isInteractionDisabled}
        aria-busy={loading || undefined}
        aria-describedby={describedBy}
        data-variant={variant}
        data-size={size}
        data-loading={loading || undefined}
        className={joinClassNames(
          "stip-button",
          fullWidth && "stip-button--full-width",
          className,
        )}
      >
        <span className="stip-button__content">
          {loading ? (
            <span className="stip-button__spinner" aria-hidden="true" />
          ) : leadingIcon ? (
            <span
              className="stip-button__icon stip-button__icon--leading"
              aria-hidden="true"
            >
              {leadingIcon}
            </span>
          ) : null}

          <span className="stip-button__label">{visibleContent}</span>

          {!loading && trailingIcon ? (
            <span
              className="stip-button__icon stip-button__icon--trailing"
              aria-hidden="true"
            >
              {trailingIcon}
            </span>
          ) : null}
        </span>

        {loading && loadingLabel ? (
          <span id={loadingDescriptionId} className="stip-button__sr-only">
            Sedang memproses: {loadingLabel}
          </span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = "Button";
