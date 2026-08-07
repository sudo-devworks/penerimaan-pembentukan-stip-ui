import { forwardRef } from "react";

import { ErrorMessage } from "../error-message";
import { HelperText } from "../helper-text";
import { joinClassNames } from "../shared";
import type { RadioGroupProps } from "./RadioGroup.types";

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  function RadioGroup(
    {
      children,
      className,
      disabled = false,
      errorMessage,
      helperText,
      invalid = false,
      legend,
      orientation = "vertical",
      required = false,
      ...props
    },
    ref,
  ) {
    const groupId = props.id;
    const helperId = helperText && groupId ? `${groupId}-helper` : undefined;
    const errorId = errorMessage && groupId ? `${groupId}-error` : undefined;

    return (
      <fieldset
        {...props}
        ref={ref}
        aria-describedby={
          [helperId, invalid ? errorId : undefined].filter(Boolean).join(" ") ||
          undefined
        }
        className={joinClassNames("radio-group", className)}
        data-invalid={invalid ? "true" : undefined}
        data-orientation={orientation}
        disabled={disabled}
      >
        <legend className="radio-group__legend">
          {legend}

          {required ? (
            <span aria-hidden="true" className="radio-group__required">
              *
            </span>
          ) : null}
        </legend>

        {helperText ? (
          <HelperText id={helperId}>{helperText}</HelperText>
        ) : null}

        <div className="radio-group__items">{children}</div>

        {invalid && errorMessage ? (
          <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
        ) : null}
      </fieldset>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
