import { forwardRef } from "react";

import { FormControlFrame, joinClassNames } from "../shared";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      className,
      disabled = false,
      fullWidth = true,
      invalid = false,
      leadingIcon,
      readOnly = false,
      size = "md",
      trailingAction,
      ...props
    },
    ref,
  ) {
    return (
      <FormControlFrame
        className="textarea-frame"
        disabled={disabled}
        fullWidth={fullWidth}
        invalid={invalid}
        leadingIcon={leadingIcon}
        readOnly={readOnly}
        size={size}
        trailingAction={trailingAction}
      >
        <textarea
          {...props}
          ref={ref}
          aria-invalid={invalid ? true : props["aria-invalid"]}
          className={joinClassNames("textarea", className)}
          disabled={disabled}
          readOnly={readOnly}
        />
      </FormControlFrame>
    );
  },
);

Textarea.displayName = "Textarea";
