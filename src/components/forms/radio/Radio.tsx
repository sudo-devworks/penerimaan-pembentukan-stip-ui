import { forwardRef } from "react";

import "./Radio.css";

import { joinClassNames } from "../shared";
import type { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    className,
    description,
    disabled = false,
    id,
    invalid = false,
    label,
    ...props
  },
  ref,
) {
  const descriptionId = description && id ? `${id}-description` : undefined;

  return (
    <label
      className={joinClassNames("radio", className)}
      data-disabled={disabled ? "true" : undefined}
      data-invalid={invalid ? "true" : undefined}
    >
      <span className="radio__control">
        <input
          {...props}
          ref={ref}
          aria-describedby={props["aria-describedby"] ?? descriptionId}
          aria-invalid={invalid ? true : props["aria-invalid"]}
          className="radio__native"
          disabled={disabled}
          id={id}
          type="radio"
        />

        <span aria-hidden="true" className="radio__visual">
          <span className="radio__dot" />
        </span>
      </span>

      <span className="radio__content">
        <span className="radio__label">{label}</span>

        {description ? (
          <span className="radio__description" id={descriptionId}>
            {description}
          </span>
        ) : null}
      </span>
    </label>
  );
});

Radio.displayName = "Radio";
