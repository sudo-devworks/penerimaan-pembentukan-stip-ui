import { forwardRef } from "react";

import { FormControlFrame, joinClassNames } from "../shared";
import type { TextInputProps } from "./TextInput.types";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      className,
      disabled = false,
      fullWidth = true,
      invalid = false,
      leadingIcon,
      readOnly = false,
      size = "md",
      trailingAction,
      type = "text",
      ...props
    },
    ref,
  ) {
    return (
      <FormControlFrame
        disabled={disabled}
        fullWidth={fullWidth}
        invalid={invalid}
        leadingIcon={leadingIcon}
        readOnly={readOnly}
        size={size}
        trailingAction={trailingAction}
      >
        <input
          {...props}
          ref={ref}
          aria-invalid={invalid ? true : props["aria-invalid"]}
          className={joinClassNames("text-input", className)}
          disabled={disabled}
          readOnly={readOnly}
          type={type}
        />
      </FormControlFrame>
    );
  },
);

TextInput.displayName = "TextInput";
