import { Check, Minus } from "lucide-react";
import { forwardRef, useEffect, useRef } from "react";

import "./Checkbox.css";

import { joinClassNames } from "../shared";
import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      className,
      description,
      disabled = false,
      id,
      indeterminate = false,
      invalid = false,
      label,
      ...props
    },
    forwardedRef,
  ) {
    const internalRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = (node: HTMLInputElement | null) => {
      internalRef.current = node;

      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    const descriptionId = description && id ? `${id}-description` : undefined;

    return (
      <label
        className={joinClassNames("checkbox", className)}
        data-disabled={disabled ? "true" : undefined}
        data-invalid={invalid ? "true" : undefined}
      >
        <span className="checkbox__control">
          <input
            {...props}
            ref={setRefs}
            aria-describedby={props["aria-describedby"] ?? descriptionId}
            aria-invalid={invalid ? true : props["aria-invalid"]}
            className="checkbox__native"
            disabled={disabled}
            id={id}
            type="checkbox"
          />

          <span aria-hidden="true" className="checkbox__visual">
            {indeterminate ? <Minus /> : <Check />}
          </span>
        </span>

        <span className="checkbox__content">
          <span className="checkbox__label">{label}</span>

          {description ? (
            <span className="checkbox__description" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
