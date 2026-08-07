import type { ReactNode } from "react";

import { joinClassNames } from "./form-control.utils";
import type { FormControlSize } from "./form-control.types";

export interface FormControlFrameProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  invalid?: boolean;
  leadingIcon?: ReactNode;
  readOnly?: boolean;
  size?: FormControlSize;
  trailingAction?: ReactNode;
}

export function FormControlFrame({
  children,
  className,
  disabled = false,
  fullWidth = true,
  invalid = false,
  leadingIcon,
  readOnly = false,
  size = "md",
  trailingAction,
}: FormControlFrameProps) {
  return (
    <div
      className={joinClassNames(
        "form-control-frame",
        fullWidth && "form-control-frame--full-width",
        className,
      )}
      data-disabled={disabled ? "true" : undefined}
      data-invalid={invalid ? "true" : undefined}
      data-readonly={readOnly ? "true" : undefined}
      data-size={size}
    >
      {leadingIcon ? (
        <span aria-hidden="true" className="form-control-frame__leading-icon">
          {leadingIcon}
        </span>
      ) : null}

      {children}

      {trailingAction ? (
        <span className="form-control-frame__trailing-action">
          {trailingAction}
        </span>
      ) : null}
    </div>
  );
}
