import type { HTMLAttributes } from "react";

import { joinClassNames } from "../shared";
import type { FormSupportingMessageProps } from "../shared";

export type ErrorMessageProps = FormSupportingMessageProps &
  Omit<HTMLAttributes<HTMLParagraphElement>, "children">;

export function ErrorMessage({
  children,
  className,
  ...props
}: ErrorMessageProps) {
  return (
    <p
      {...props}
      className={joinClassNames(
        "form-supporting-message",
        "form-error-message",
        className,
      )}
      data-message-type="error"
    >
      {children}
    </p>
  );
}
