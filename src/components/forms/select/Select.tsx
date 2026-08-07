import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

import { FormControlFrame, joinClassNames } from "../shared";
import type { SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      children,
      className,
      disabled = false,
      fullWidth = true,
      invalid = false,
      leadingIcon,
      size = "md",
      ...props
    },
    ref,
  ) {
    return (
      <FormControlFrame
        className="select-frame"
        disabled={disabled}
        fullWidth={fullWidth}
        invalid={invalid}
        leadingIcon={leadingIcon}
        size={size}
        trailingAction={
          <ChevronDown aria-hidden="true" className="select-frame__chevron" />
        }
      >
        <select
          {...props}
          ref={ref}
          aria-invalid={invalid ? true : props["aria-invalid"]}
          className={joinClassNames("select-control", className)}
          disabled={disabled}
        >
          {children}
        </select>
      </FormControlFrame>
    );
  },
);

Select.displayName = "Select";
