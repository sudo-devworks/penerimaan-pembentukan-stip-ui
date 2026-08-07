import { forwardRef } from "react";

import { ErrorMessage } from "../error-message";
import { HelperText } from "../helper-text";
import { joinClassNames } from "../shared";
import type { CheckboxGroupProps } from "./CheckboxGroup.types";

export const CheckboxGroup = forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>(function CheckboxGroup(
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
      className={joinClassNames("checkbox-group", className)}
      data-invalid={invalid ? "true" : undefined}
      data-orientation={orientation}
      disabled={disabled}
    >
      <legend className="checkbox-group__legend">
        {legend}

        {required ? (
          <span aria-hidden="true" className="checkbox-group__required">
            *
          </span>
        ) : null}
      </legend>

      {helperText ? <HelperText id={helperId}>{helperText}</HelperText> : null}

      <div className="checkbox-group__items">{children}</div>

      {invalid && errorMessage ? (
        <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
      ) : null}
    </fieldset>
  );
});

CheckboxGroup.displayName = "CheckboxGroup";
