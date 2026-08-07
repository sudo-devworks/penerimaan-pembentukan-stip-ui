import { forwardRef } from "react";

import { joinClassNames } from "../shared";
import type { FormLabelProps } from "./FormLabel.types";

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  function FormLabel(
    { children, className, optional = false, required = false, ...props },
    ref,
  ) {
    if (import.meta.env.DEV && required && optional) {
      console.warn(
        'FormLabel: props "required" dan "optional" tidak boleh digunakan bersamaan.',
      );
    }

    const showRequired = required;
    const showOptional = optional && !required;

    return (
      <label
        {...props}
        ref={ref}
        className={joinClassNames("form-label", className)}
      >
        <span className="form-label__text">{children}</span>

        {showRequired ? (
          <span aria-hidden="true" className="form-label__required-indicator">
            *
          </span>
        ) : null}

        {showOptional ? (
          <span className="form-label__optional-indicator">Opsional</span>
        ) : null}
      </label>
    );
  },
);

FormLabel.displayName = "FormLabel";
