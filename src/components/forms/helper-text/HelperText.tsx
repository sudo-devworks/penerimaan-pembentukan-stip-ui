import type { HTMLAttributes } from "react";

import { joinClassNames } from "../shared";
import type { FormSupportingMessageProps } from "../shared";

export type HelperTextProps = FormSupportingMessageProps &
  Omit<HTMLAttributes<HTMLParagraphElement>, "children">;

export function HelperText({ children, className, ...props }: HelperTextProps) {
  return (
    <p
      {...props}
      className={joinClassNames(
        "form-supporting-message",
        "form-helper-text",
        className,
      )}
      data-message-type="helper"
    >
      {children}
    </p>
  );
}
