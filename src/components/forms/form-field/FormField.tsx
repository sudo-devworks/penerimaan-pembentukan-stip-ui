import { forwardRef } from "react";

import { ErrorMessage } from "../error-message";
import { FormLabel } from "../form-label";
import { HelperText } from "../helper-text";
import { RequirementMessage } from "../requirement-message";
import { createFormFieldMessageIds, joinClassNames } from "../shared";
import type { FormFieldProps } from "./FormField.types";

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  function FormField(
    {
      characterCount,
      characterCountId,
      children,
      className,
      disabled = false,
      errorMessage,
      errorMessageId,
      helperText,
      helperTextId,
      htmlFor,
      invalid = false,
      label,
      optional = false,
      required = false,
      requirementMessage,
      requirementMessageId,
      ...props
    },
    ref,
  ) {
    if (import.meta.env.DEV && required && optional) {
      console.warn(
        'FormField: props "required" dan "optional" tidak boleh digunakan bersamaan.',
      );
    }

    const generatedIds = createFormFieldMessageIds(htmlFor);

    const resolvedHelperTextId = helperTextId ?? generatedIds.helperId;

    const resolvedRequirementMessageId =
      requirementMessageId ?? generatedIds.requirementId;

    const resolvedErrorMessageId = errorMessageId ?? generatedIds.errorId;

    const resolvedCharacterCountId =
      characterCountId ?? generatedIds.characterCountId;

    const showErrorMessage = invalid && Boolean(errorMessage);

    return (
      <div
        {...props}
        ref={ref}
        className={joinClassNames("form-field", className)}
        data-disabled={disabled ? "true" : undefined}
        data-invalid={invalid ? "true" : undefined}
        data-required={required ? "true" : undefined}
      >
        {label ? (
          <FormLabel htmlFor={htmlFor} optional={optional} required={required}>
            {label}
          </FormLabel>
        ) : null}

        <div className="form-field__control">{children}</div>

        {helperText ||
        requirementMessage ||
        showErrorMessage ||
        characterCount ? (
          <div className="form-field__supporting-content">
            <div className="form-field__messages">
              {helperText ? (
                <HelperText id={resolvedHelperTextId}>{helperText}</HelperText>
              ) : null}

              {requirementMessage ? (
                <RequirementMessage id={resolvedRequirementMessageId}>
                  {requirementMessage}
                </RequirementMessage>
              ) : null}

              {showErrorMessage ? (
                <ErrorMessage id={resolvedErrorMessageId}>
                  {errorMessage}
                </ErrorMessage>
              ) : null}
            </div>

            {characterCount ? (
              <span
                className="form-field__character-count"
                id={resolvedCharacterCountId}
              >
                {characterCount}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);

FormField.displayName = "FormField";
