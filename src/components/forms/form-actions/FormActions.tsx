import { forwardRef } from "react";

import "./FormActions.css";

import { joinClassNames } from "../shared";
import type { FormActionsProps } from "./FormActions.types";

export const FormActions = forwardRef<HTMLDivElement, FormActionsProps>(
  function FormActions(
    {
      align = "end",
      children,
      className,
      divided = false,
      stackOnMobile = true,
      ...props
    },
    ref,
  ) {
    return (
      <div
        {...props}
        ref={ref}
        className={joinClassNames(
          "form-actions",
          divided && "form-actions--divided",
          stackOnMobile && "form-actions--stack-mobile",
          className,
        )}
        data-align={align}
      >
        {children}
      </div>
    );
  },
);

FormActions.displayName = "FormActions";
