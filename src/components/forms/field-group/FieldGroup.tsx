import { forwardRef } from "react";

import "./FieldGroup.css";

import { joinClassNames } from "../shared";
import type { FieldGroupProps } from "./FieldGroup.types";

export const FieldGroup = forwardRef<HTMLDivElement, FieldGroupProps>(
  function FieldGroup(
    { children, className, columns = 1, mobileColumns = 1, ...props },
    ref,
  ) {
    return (
      <div
        {...props}
        ref={ref}
        className={joinClassNames("field-group", className)}
        data-columns={columns}
        data-mobile-columns={mobileColumns}
      >
        {children}
      </div>
    );
  },
);

FieldGroup.displayName = "FieldGroup";
